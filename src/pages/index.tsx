import React from "react";
import { Share2, BookOpen, Image, Video, Mic, Bot, File } from "lucide-react";
import { WaitlistForm } from "../components/WaitlistForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Share2 className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Acme Inc</h1>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Workflow with
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text sm:text-4xl">
            Innovative Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {`Streamline your work process with our comprehensive solution. Our platform helps you manage, analyze, and optimize your content with the power of advanced AI technology.`}
          </p>

          {/* Waitlist Form */}
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<BookOpen className="h-6 w-6 text-blue-600" />}
            title="Smart Integration"
            description="Seamlessly integrate with your existing workflow. Our platform processes your data to provide actionable insights."
          />
          <Feature
            icon={<Image className="h-6 w-6 text-blue-600" />}
            title="Visual Processing"
            description="Advanced image analysis capabilities help you extract meaningful information from your visual content."
          />
          <Feature
            icon={<File className="h-6 w-6 text-blue-600" />}
            title="Document Analysis"
            description="Powerful document processing features help you make the most of your existing content and resources."
          />
          <Feature
            icon={<Video className="h-6 w-6 text-blue-600" />}
            title="Media Management"
            description="Comprehensive tools for handling all your media content, from processing to distribution."
          />
          <Feature
            icon={<Mic className="h-6 w-6 text-blue-600" />}
            title="Audio Processing"
            description="Transform audio content into valuable insights with our advanced processing capabilities."
          />
          <Feature
            icon={<Bot className="h-6 w-6 text-blue-600" />}
            title="AI-Powered"
            description="State-of-the-art artificial intelligence working to optimize your workflow and enhance productivity."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-gray-400" />
            <p className="text-sm text-gray-500">
              © 2024 Acme Inc. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
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
    <div className="relative pl-9">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center">
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
