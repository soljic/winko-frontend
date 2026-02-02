import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tokko | Win the Unattainable",
  description: "The premium marketplace for probability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased selection:bg-fuchsia-500/30")}>
        <LanguageProvider>
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
