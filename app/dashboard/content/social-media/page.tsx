"use client";

import { useState } from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function SocialMediaGenerator() {
  const [platform, setPlatform] = useState("twitter");
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Generate a ${platform} post based on the following information:
          Platform: ${platform}
          Prompt: ${prompt}
          Provide only the post content as plain text, no extra formatting or explanations.`,
        }),
      });

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Social Media Post Generator</h1>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Platform</label>
        <div className="flex gap-4">
          <button
            onClick={() => setPlatform("twitter")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              platform === "twitter" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            <Twitter size={20} />
            Twitter
          </button>
          <button
            onClick={() => setPlatform("linkedin")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              platform === "linkedin" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            <Linkedin size={20} />
            LinkedIn
          </button>
          <button
            onClick={() => setPlatform("instagram")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              platform === "instagram" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            <Instagram size={20} />
            Instagram
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            What would you like to post about?
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Describe your post idea or topic..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Post"}
        </button>
      </form>

      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Generated Post</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-950 whitespace-pre-wrap">{generatedContent}</p>
          </div>
        </div>
      )}
    </div>
  );
} 