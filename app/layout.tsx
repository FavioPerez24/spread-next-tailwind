import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spread - Micro Influencer Platform",
  description: "Beta MVP for Spread: Share campaigns and earn rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Spread</h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/campaigns" className="text-gray-700 hover:text-blue-600">
              Campaigns
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
