// eslint-disable
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: NextApiResponse<any | { error: string }>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      },
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await response.json();
    return res.json(data);
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(500).json({ error: "Failed to verify token" });
  }
}
