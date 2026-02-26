"use client";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import CursorEffect from './components/CursorEffect';
import ParallaxScroll from './components/ParallaxScroll';
import { AuthProvider } from './context/AuthContext';

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
  const showSidebarAndNavbar = pathname !== '/';

  return (
    <html lang="en">
      <body className={`font-sans antialiased ${showSidebarAndNavbar ? 'flex h-screen' : ''}`}>
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
