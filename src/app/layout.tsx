import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { 
  title: "Luiza Weisberg",
  description: "Personalized real estate services in Miami, Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body > 
      <Navbar/>
        {children} 
        <Footer />
      </body>
    </html>
  );
}
