"use client";

import { useState } from "react";
import { Code } from "lucide-react";

export default function WriteCodePage() {
  const [prompt, setPrompt] = useState("");
  const [codeResult, setCodeResult] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    setCodeResult("");
    setExplanation("");
    try {
      const response = await fetch('/api/generate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (response.ok) {
        setCodeResult(data.code);
        setExplanation(data.explanation);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error generating content:", error);
      alert("Failed to generate content.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 flex">
      <div className="w-1/2 pr-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <Code size={40} className="mr-4 text-purple-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-950">Write Code</h2>
              <p className="text-gray-700 text-sm">AI Model to generate programming code in any language</p>
            </div>
          </div>
          <p className="text-gray-700 mb-2">Enter description of code you want along with Programming Long</p>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-y text-gray-800 placeholder-gray-500"
            rows={6}
            placeholder="Bubble Sort algorithm in React"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <p className="text-gray-500 text-xs text-right mb-4">Note Max 2000 Words</p>
          <button
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-semibold"
            onClick={handleGenerateContent}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Content'}
          </button>
        </div>
      </div>

      <div className="w-1/2 pl-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-950">Your Result</h2>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 text-sm">
              Copy
            </button>
          </div>
          <div className="border border-gray-300 rounded-md p-4 bg-gray-50 min-h-[300px]">
            {codeResult && (
              <pre className="whitespace-pre-wrap text-sm font-mono bg-gray-100 p-2 rounded text-gray-950">
                <code>{codeResult}</code>
              </pre>
            )}
          </div>
          {explanation && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-gray-950">Explanation:</h3>
              <div className="bg-gray-50 p-3 rounded-md text-sm leading-relaxed text-gray-950">
                <pre className="whitespace-pre-wrap">{explanation}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 