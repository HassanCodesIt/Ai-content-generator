"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

export default function BlogContentPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    setGeneratedContent(""); // Clear previous content
    try {
      const prompt = `Generate a blog content based on the following information:
Title: ${title}
Description: ${description}
Provide only the blog content as plain text, no extra formatting or explanations.`;

      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setGeneratedContent(data.content);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error generating blog content:", error);
      alert("Failed to generate blog content.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 flex">
      <div className="w-1/2 pr-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <BookOpen size={40} className="mr-4 text-purple-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Blog Content</h2>
              <p className="text-gray-700 text-sm">
                AI Model to generate blog content based on your title and description.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-2">Enter your blog title:</p>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-gray-800 placeholder-gray-500"
            placeholder="e.g., The Future of AI"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-gray-700 mb-2">Enter your blog description:</p>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-y text-gray-800 placeholder-gray-500"
            rows={6}
            placeholder="e.g., Discussing advancements in AI and its impact on society."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-semibold"
            onClick={handleGenerateContent}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Blog Content'}
          </button>
        </div>
      </div>

      <div className="w-1/2 pl-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Result</h2>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 text-sm">
              Copy
            </button>
          </div>
          <div className="border border-gray-300 rounded-md p-4 bg-gray-50 min-h-[300px]">
            {generatedContent && (
              <div className="prose dark:prose-invert max-w-none text-gray-950">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{generatedContent}</ReactMarkdown>
              </div>
            )}
            {!generatedContent && <p className="text-gray-600">Generated content will appear here.</p>}
          </div>
        </div>
      </div>
    </div>
  );
} 