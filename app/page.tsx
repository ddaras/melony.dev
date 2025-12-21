import Link from "next/link";
import { Github } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melony - TypeScript Framework for AI Apps",
  description:
    "The complete TypeScript framework for building production-grade AI applications. Features a runtime engine, agent patterns, server-driven UI, and full React integration.",
  openGraph: {
    title: "Melony - TypeScript Framework for AI Apps",
    description:
      "The complete TypeScript framework for building production-grade AI applications. Runtime engine, agents, and UI.",
    url: "https://melony.dev",
  },
  twitter: {
    title: "Melony - TypeScript Framework for AI Apps",
    description:
      "The complete TypeScript framework for building production-grade AI applications. Runtime engine, agents, and UI.",
  },
  alternates: {
    canonical: "https://melony.dev",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex flex-col">
      {/* Navigation */}
      <nav
        className="border-b border-border/20 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-2"
              aria-label="Melony - Home"
            >
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Melony</span>
            </Link>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors flex items-center space-x-1"
                aria-label="View Melony on GitHub (opens in new tab)"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're working on something amazing.
          </p>
        </div>
      </main>
    </div>
  );
}
