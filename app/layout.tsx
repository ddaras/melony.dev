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
  title: {
    default: "Melony - React Toolkit for AI Chat Interfaces",
    template: "%s | Melony"
  },
  description: "Build beautiful AI chat interfaces with React. Melony provides ready-to-use components, TypeScript support, and zero-latency progressive rendering for modern chat experiences.",
  keywords: [
    "react", "ai", "chat", "interface", "components", "typescript", "ui", "toolkit",
    "streaming", "progressive rendering", "zod", "json", "real-time", "melony",
    "ai ui", "react components", "chat interface", "streaming ui", "ai responses"
  ],
  authors: [{ name: "Melony Team" }],
  creator: "Melony Team",
  publisher: "Melony",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://melony.dev",
    title: "Melony - React Toolkit for AI Chat Interfaces",
    description: "Build beautiful AI chat interfaces with React. Zero-latency progressive rendering with TypeScript support.",
    siteName: "Melony",
    images: [
      {
        url: "https://melony.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melony - React Toolkit for AI Chat Interfaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melony - React Toolkit for AI Chat Interfaces",
    description: "Build beautiful AI chat interfaces with React. Zero-latency progressive rendering with TypeScript support.",
    creator: "@melonydev",
    images: ["https://melony.dev/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://melony.dev",
  },
  category: "technology",
  classification: "Software Development",
  other: {
    "application-name": "Melony",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Melony",
    "description": "React toolkit for building AI chat interfaces with zero-latency progressive rendering",
    "url": "https://melony.dev",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Melony Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Melony"
    },
    "keywords": "react, ai, chat, interface, components, typescript, streaming, progressive rendering",
    "programmingLanguage": ["TypeScript", "JavaScript"],
    "runtimePlatform": "Node.js",
    "softwareVersion": "1.4.7"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
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
