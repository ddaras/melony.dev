import type { Metadata } from "next";
import { Manrope, Urbanist, Fira_Code } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melony - React Toolkit for AI Chat Interfaces",
  description: "Build beautiful AI chat interfaces with React. Melony provides ready-to-use components, TypeScript support, and easy integration for modern chat experiences.",
  keywords: ["react", "ai", "chat", "interface", "components", "typescript", "ui", "toolkit"],
  authors: [{ name: "Melony Team" }],
  openGraph: {
    title: "Melony - React Toolkit for AI Chat Interfaces",
    description: "Build beautiful AI chat interfaces with React. Ready-to-use components with TypeScript support.",
    type: "website",
    url: "https://melony.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melony - React Toolkit for AI Chat Interfaces",
    description: "Build beautiful AI chat interfaces with React. Ready-to-use components with TypeScript support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${urbanist.variable} ${firaCode.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
