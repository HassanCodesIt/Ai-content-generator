import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center w-full max-w-xl mx-auto">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
      </div>
    </nav>
  );
} 