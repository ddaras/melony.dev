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
    default: "Melony - TypeScript Framework for AI Apps",
    template: "%s | Melony"
  },
  description: "The complete TypeScript framework for building production-grade AI applications. Features a runtime engine, agent patterns, server-driven UI, and full React integration.",
  keywords: [
    "typescript", "ai framework", "agentic ai", "react", "server-driven ui", "llm",
    "ai agents", "melony", "production ai", "type-safe", "streaming"
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
    title: "Melony - TypeScript Framework for AI Apps",
    description: "The complete TypeScript framework for building production-grade AI applications. Runtime engine, agents, and UI.",
    siteName: "Melony",
    images: [
      {
        url: "https://melony.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melony - TypeScript Framework for AI Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melony - TypeScript Framework for AI Apps",
    description: "The complete TypeScript framework for building production-grade AI applications. Runtime engine, agents, and UI.",
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
