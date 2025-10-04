import Link from "next/link";
import type { Metadata } from "next";
import { Github } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Learn about building AI chat interfaces, React components, and modern web development with Melony.",
  openGraph: {
    title: "Melony Blog - AI Chat Interface Development",
    description:
      "Expert insights on building real-time AI chat interfaces with React and progressive rendering.",
    url: "https://melony.dev/blog",
  },
  twitter: {
    title: "Melony Blog - AI Chat Interface Development",
    description:
      "Expert insights on building real-time AI chat interfaces with React and progressive rendering.",
  },
  alternates: {
    canonical: "https://melony.dev/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold">
                Melony
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/docs"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/blog"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="https://generative-ui-playground.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Playground
              </Link>
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

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span className="font-bold text-lg text-foreground">Melony</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ddaras/melony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/melony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              NPM
            </a>
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
          </div>
          <span>MIT License © 2025</span>
        </div>
      </footer>
    </div>
  );
}
