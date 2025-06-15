"use client";

import { useState } from "react";
import { Package } from "lucide-react";

export default function ProductDescriptionGenerator() {
  const [productName, setProductName] = useState("");
  const [productFeatures, setProductFeatures] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
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
          prompt: `Generate a product description based on the following information:
          Product Name: ${productName}
          Key Features: ${productFeatures}
          Target Audience: ${targetAudience}
          Provide only the product description as plain text, no extra formatting or explanations.`,
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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Description Generator</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your product name..."
            required
          />
        </div>

        <div>
          <label htmlFor="productFeatures" className="block text-sm font-medium text-gray-700 mb-2">
            Key Features
          </label>
          <textarea
            id="productFeatures"
            value={productFeatures}
            onChange={(e) => setProductFeatures(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="List the main features of your product..."
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Who is this product for?"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Description"}
        </button>
      </form>

      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Generated Description</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-950 whitespace-pre-wrap">{generatedContent}</p>
          </div>
        </div>
      )}
    </div>
  );
} 