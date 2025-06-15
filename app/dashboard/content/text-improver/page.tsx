import React from "react";

export default function TextImproverPage() {
  return (
    <div className="flex h-full bg-gray-100">
      {/* Left Panel - Text Improver Input */}
      <div className="w-1/3 p-6 bg-white border-r border-gray-200 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-gray-950">Text Improver</h2>
        <p className="text-gray-700 mb-6">Description will go here</p>

        <div className="mb-4">
          <label htmlFor="title-input" className="block text-sm font-medium text-gray-800 mb-1">Title Input</label>
          <input
            type="text"
            id="title-input"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500"
            placeholder="Enter title here"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description-input" className="block text-sm font-medium text-gray-800 mb-1">Description Input</label>
          <textarea
            id="description-input"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500"
            placeholder="Enter description here"
          ></textarea>
        </div>

        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
          Generate
        </button>
      </div>

      {/* Right Panel - Rich Text Editor */}
      <div className="flex-grow p-6 flex flex-col">
        <div className="bg-white rounded-lg shadow-md flex-grow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-950">Rich Text Editor</h2>
          {/* Placeholder for actual rich text editor */}
          <div className="border border-gray-300 rounded-md h-[calc(100%-3rem)] flex items-center justify-center text-gray-600">
            Rich Text Editor Content Area
          </div>
        </div>
      </div>
    </div>
  );
} 