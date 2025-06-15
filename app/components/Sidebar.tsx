import Link from "next/link";
import { Home, History, Settings, Sparkles } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <Sparkles size={32} className="text-purple-600 mr-2" />
        <span className="text-xl font-bold text-gray-800">AI Gen</span>
      </div>
      <nav className="flex-grow mt-4">
        <ul>
          <li className="mb-2">
            <Link href="/dashboard" className="flex items-center p-2 text-gray-700 hover:bg-purple-600 hover:text-white rounded-md focus:bg-purple-600 focus:text-white">
              <Home size={20} className="mr-3" />
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/history" className="flex items-center p-2 text-gray-700 hover:bg-purple-600 hover:text-white rounded-md focus:bg-purple-600 focus:text-white">
              <History size={20} className="mr-3" />
              History
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/settings" className="flex items-center p-2 text-gray-700 hover:bg-purple-600 hover:text-white rounded-md focus:bg-purple-600 focus:text-white">
              <Settings size={20} className="mr-3" />
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
} 