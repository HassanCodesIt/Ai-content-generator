"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Sparkle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function EmailTemplatePage() {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    setGeneratedContent("");

    const requestBody = {
      prompt: `Generate an email based on the following information:\nSubject: ${subject}\nTo: ${to}\nPrompt: ${prompt}\nProvide only the email content as plain text, no extra formatting or explanations.`,
    };

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      setGeneratedContent(data.content);
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-full">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-8">
          <Mail className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 ml-3">Email Template Generator</h1>
        </div>

        <p className="text-gray-600 mb-10">Generate professional email templates effortlessly.</p>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
          <input
            type="text"
            id="subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 placeholder-gray-400"
            placeholder="Enter email subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="to" className="block text-gray-700 text-sm font-bold mb-2">To:</label>
          <input
            type="text"
            id="to"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 placeholder-gray-400"
            placeholder="Enter recipient name or context..."
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="prompt" className="block text-gray-700 text-sm font-bold mb-2">Prompt:</label>
          <textarea
            id="prompt"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 h-32 resize-none placeholder-gray-400"
            placeholder="Describe the purpose of the email, key points to include, and desired tone."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>

        <button
          onClick={handleGenerateContent}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center transition-colors duration-200"
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <Sparkle className="w-5 h-5 mr-2" />
          )}
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {generatedContent && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-inner">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Generated Email Template:</h2>
            <div className="whitespace-pre-wrap text-gray-950 font-medium">
              {generatedContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 