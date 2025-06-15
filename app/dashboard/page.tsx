"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Browse All Templates</h1>
        <p className="text-lg mb-6">What would you like to create today?</p>
        <div className="relative w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/dashboard/content/blog-title" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-png.flaticon.com/128/17843/17843202.png" alt="Blog Title Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Blog Title</h3>
          <p className="text-gray-600 text-sm">An AI tool that generate blog title depends on your blog information</p>
        </Link>

        <Link href="/dashboard/content/blog-content" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/14447/14447642.gif" alt="Blog Content Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Blog Content</h3>
          <p className="text-gray-600 text-sm">An AI tool that serves as your personal blog post title writer, generating catchy and viral...</p>
        </Link>

        <Link href="/dashboard/content/blog-topic-ideas" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/15332/15332429.gif" alt="Blog Topic Ideas Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Blog Topic Ideas</h3>
          <p className="text-gray-600 text-sm">An AI tool that serves as your personal blog post title writer, generating catchy and viral...</p>
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" alt="Youtube SEO Title Icon" width={60} height={60} className="mb-4" />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Youtube SEO Title</h3>
          <p className="text-gray-600 text-sm">An AI tool that serves as your personal blog post title writer, generating catchy and viral...</p>
        </div>

        <Link href="/dashboard/content/youtube-description" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-png.flaticon.com/128/3670/3670209.png" alt="Youtube Description Icon" width={60} height={60} className="mb-4" />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Youtube Description</h3>
          <p className="text-gray-600 text-sm">An AI tool to generate programming code in any language</p>
        </Link>
        
        <Link href="/dashboard/content/youtube-tags" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" alt="Youtube Tags Icon" width={60} height={60} className="mb-4" />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Youtube Tags</h3>
          <p className="text-gray-600 text-sm">An AI tool to generate programming code in any language</p>
        </Link>

        <Link href="/dashboard/content/rewrite-article" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-png.flaticon.com/128/4316/4316211.png" alt="Rewrite Article Icon" width={60} height={60} className="mb-4" />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Rewrite Article (Plagiarism</h3>
          <p className="text-gray-600 text-sm">An AI tool to generate programming code in any language</p>
        </Link>

        <Link href="/dashboard/content/text-improver" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-png.flaticon.com/128/740/740882.png" alt="Text Improver Icon" width={60} height={60} className="mb-4" />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Text Improver</h3>
          <p className="text-gray-600 text-sm">An AI tool to generate programming code in any language</p>
        </Link>

        <Link href="/write-code" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/15713/15713025.gif" alt="Write Code Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Write Code</h3>
          <p className="text-gray-600 text-sm">An AI tool to generate programming code in any language</p>
        </Link>

        {/* Email Template Card */}
        <Link href="/dashboard/content/email-template" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/11237/11237480.gif" alt="Email Template Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Email Template</h3>
          <p className="text-gray-600 text-sm">An AI tool to generate professional email templates</p>
        </Link>

        {/* Social Media Posts Card */}
        <Link href="/dashboard/content/social-media" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/16075/16075689.gif" alt="Social Media Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Social Media Posts</h3>
          <p className="text-gray-600 text-sm">Generate engaging posts for Twitter, LinkedIn, and Instagram</p>
        </Link>

        {/* Product Description Card */}
        <Link href="/dashboard/content/product-description" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/12707/12707724.gif" alt="Product Description Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Product Description</h3>
          <p className="text-gray-600 text-sm">Create compelling product descriptions that convert</p>
        </Link>

        {/* Ad Copy Generator Card */}
        <Link href="/dashboard/content/ad-copy" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow transition-transform hover:scale-105 hover:bg-gray-50">
          <Image src="https://cdn-icons-gif.flaticon.com/11237/11237480.gif" alt="Ad Copy Icon" width={60} height={60} className="mb-4" unoptimized />
          <h3 className="font-extrabold text-lg mb-2 text-purple-700">Ad Copy Generator</h3>
          <p className="text-gray-600 text-sm">Generate persuasive ad copies for various platforms</p>
        </Link>
      </div>
    </div>
  );
}