"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import CursorEffect from './components/CursorEffect';
import ParallaxScroll from './components/ParallaxScroll';
import { AuthProvider } from './context/AuthContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata is not used in client components directly.
// export const metadata: Metadata = {
//   title: "AI Content Generator",
//   description: "Generate content with AI",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebarAndNavbar = !['/', '/sign-in', '/sign-up'].includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${showSidebarAndNavbar ? 'flex h-screen' : ''}`}>
        <AuthProvider>
          <CursorEffect />
          <ParallaxScroll />
          {showSidebarAndNavbar && <Sidebar />}
          <div className={showSidebarAndNavbar ? "flex flex-col flex-grow" : "w-full"}>
            {showSidebarAndNavbar && <Navbar />}
            <main className={showSidebarAndNavbar ? "flex-grow p-6 overflow-auto" : ""}>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
