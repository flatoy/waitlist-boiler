import React, { useState } from "react";
import { ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import Turnstile, { useTurnstile } from "react-turnstile";

interface VerifyResponse {
  success: boolean;
  message?: string;
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isTurnstileVerified, setIsTurnstileVerified] = useState(false);
  const turnstile = useTurnstile();

  const handleTurnstileVerify = async (token: string) => {
    try {
      const response = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data: VerifyResponse = await response.json();

      if (data.success) {
        setIsTurnstileVerified(true);
      } else {
        setErrorMessage("Human verification failed. Please try again.");
        turnstile.reset();
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Verification error. Please try again.");
      turnstile.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isTurnstileVerified) {
      setErrorMessage("Please complete the human verification.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error(data.message || "Failed to add email to waitlist");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Unable to join waitlist. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 py-3 rounded-lg">
        <Sparkles className="h-5 w-5" />
        <p className="font-medium">
          {`You're on the list! We'll notify you when we launch.`}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading"}
            className="min-w-0 flex-auto rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading" || !isTurnstileVerified}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex justify-center">
          <Turnstile
            fixedSize={true}
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
            onVerify={handleTurnstileVerify}
            onError={() => {
              setIsTurnstileVerified(false);
              setErrorMessage("Verification error occurred. Please try again.");
            }}
            onExpire={() => {
              setIsTurnstileVerified(false);
              setErrorMessage("Verification expired. Please verify again.");
            }}
            theme="light"
          />
        </div>
      </form>

      {status === "error" && (
        <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
