import type { Metadata } from "next";
import { Montserrat, Merriweather, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={`${montserrat.variable} ${merriweather.variable} ${ubuntuMono.variable}`}>
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
