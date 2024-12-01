import React from "react";
import { Sparkles, Boxes, Image, Video, Mic, Cpu, File } from "lucide-react";
import { WaitlistForm } from "../components/WaitlistForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">ProductX</h1>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Revolutionize Your Digital Experience
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text sm:text-4xl">
            With Next-Gen Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>

          {/* Waitlist Form */}
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white rounded-3xl shadow-lg">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Boxes className="h-6 w-6 text-purple-600" />}
            title="Seamless Integration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Feature
            icon={<Image className="h-6 w-6 text-purple-600" />}
            title="Visual Analytics"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Feature
            icon={<File className="h-6 w-6 text-purple-600" />}
            title="Smart Processing"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <Feature
            icon={<Video className="h-6 w-6 text-purple-600" />}
            title="Content Delivery"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Feature
            icon={<Mic className="h-6 w-6 text-purple-600" />}
            title="Voice Recognition"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
          />
          <Feature
            icon={<Cpu className="h-6 w-6 text-purple-600" />}
            title="Advanced Analytics"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gray-400" />
            <p className="text-sm text-gray-500">
              © 2024 ProductX. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-9 group">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-base font-semibold leading-7 text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-base leading-7 text-gray-600">{description}</p>
    </div>
  );
}

export default App;
