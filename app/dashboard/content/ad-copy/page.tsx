"use client";

import { useState } from "react";
import { Megaphone } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AdCopyGenerator() {
  const [productService, setProductService] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [keyBenefits, setKeyBenefits] = useState("");
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
          prompt: `Generate ad copy based on the following information:
          Product/Service: ${productService}
          Target Audience: ${targetAudience}
          Key Benefits/Call to Action: ${keyBenefits}
          Provide only the ad copy content as plain text, no extra formatting or explanations.`,
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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Ad Copy Generator</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="productService" className="block text-sm font-medium text-gray-700 mb-2">
            Product/Service Name
          </label>
          <input
            type="text"
            id="productService"
            value={productService}
            onChange={(e) => setProductService(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-600"
            placeholder="e.g., AI Writing Assistant, Organic Coffee Subscription"
            required
          />
        </div>

        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience
          </label>
          <input
            type="text"
            id="targetAudience"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-600"
            placeholder="e.g., Small business owners, Coffee lovers"
            required
          />
        </div>

        <div>
          <label htmlFor="keyBenefits" className="block text-sm font-medium text-gray-700 mb-2">
            Key Benefits or Call to Action
          </label>
          <textarea
            id="keyBenefits"
            value={keyBenefits}
            onChange={(e) => setKeyBenefits(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-600"
            placeholder="e.g., Save time, Boost productivity, Buy now, Learn more"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Ad Copy"}
        </button>
      </form>

      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Generated Ad Copy</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-950 whitespace-pre-wrap"><ReactMarkdown remarkPlugins={[remarkGfm]}>{generatedContent}</ReactMarkdown></p>
          </div>
        </div>
      )}
    </div>
  );
} 