'use client';

import React, { useState } from "react";

export default function BlogTitlePage() {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedContent(""); // Clear previous content

    const prompt = `Generate a blog title based on the following information:
Title: ${titleInput}
Description: ${descriptionInput}

Provide only the blog title as plain text, no extra formatting or explanations.`;

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedContent(data.content || "No content generated.");
    } catch (err: any) {
      setError(err.message || "Failed to generate content.");
      console.error("Error during content generation:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full bg-gray-100">
      {/* Left Panel - Blog Title Input */}
      <div className="w-1/3 p-6 bg-white border-r border-gray-200 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-gray-950">Blog Title</h2>
        <p className="text-gray-700 mb-6">Description will go here</p>

        <div className="mb-4">
          <label htmlFor="title-input" className="block text-sm font-medium text-gray-800 mb-1">Title Input</label>
          <input
            type="text"
            id="title-input"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500"
            placeholder="Enter title here"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description-input" className="block text-sm font-medium text-gray-800 mb-1">Description Input</label>
          <textarea
            id="description-input"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500"
            placeholder="Enter description here"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          ></textarea>
        </div>

        <button
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        {error && <p className="text-red-500 mt-2 text-sm">Error: {error}</p>}
      </div>

      {/* Right Panel - Rich Text Editor */}
      <div className="flex-grow p-6 flex flex-col">
        <div className="bg-white rounded-lg shadow-md flex-grow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-950">Rich Text Editor</h2>
          <div className="border border-gray-300 rounded-md h-[calc(100%-3rem)] p-4 overflow-auto">
            {loading && <p className="text-gray-600">Loading content...</p>}
            {!loading && generatedContent && <p className="text-gray-950 whitespace-pre-wrap">{generatedContent}</p>}
            {!loading && !generatedContent && !error && <p className="text-gray-600">Rich Text Editor Content Area</p>}
          </div>
        </div>
      </div>
    </div>
  );
} 