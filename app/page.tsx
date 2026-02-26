"use client";
import { Brain, Settings, Users, Book } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-0 left-0"></div>
        <div className="absolute w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-0"></div>
        <div className="absolute w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000 bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        {/* AI Content Generator Title */}
        <div className="text-center">
          <div className="bg-black w-[800px] h-32 flex items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
                AI Content <span className="text-purple-700">Generator</span>
            </h1>
          </div>
        </div>

        {/* Get Started Button */}
        <button
          onClick={handleGetStartedClick}
          className="mt-8 px-8 py-3 bg-purple-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-800 transition duration-300"
        >
          Get Started
        </button>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl w-full">
          {/* Card 1: 25+ templates */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <Brain className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">25+ templates</h3>
            <p className="text-gray-600 text-sm">
              Responsive, and mobile-first project on the web
            </p>
            <a href="#" className="text-blue-600 text-sm mt-4 flex items-center">
              Learn more <span className="ml-1 text-base">&gt;</span>
            </a>
          </div>

          {/* Card 2: Customizable */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <Settings className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Customizable</h3>
            <p className="text-gray-600 text-sm">
              Components are easily customized and extendable
            </p>
            <a href="#" className="text-blue-600 text-sm mt-4 flex items-center">
              Learn more <span className="ml-1 text-base">&gt;</span>
            </a>
          </div>

          {/* Card 3: Free to Use */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <Book className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free to Use</h3>
            <p className="text-gray-600 text-sm">
              Every component and plugin is well documented
            </p>
            <a href="#" className="text-blue-600 text-sm mt-4 flex items-center">
              Learn more <span className="ml-1 text-base">&gt;</span>
            </a>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <Users className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Contact us 24 hours a day, 7 days a week
            </p>
            <a href="#" className="text-blue-600 text-sm mt-4 flex items-center">
              Learn more <span className="ml-1 text-base">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 