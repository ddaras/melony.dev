"use client";

import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  children,
  language = "typescript",
  className,
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const highlightCode = async () => {
      try {
        const html = await codeToHtml(children.trim(), {
          lang: language,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        // Fallback to plain text
        setHighlightedCode(`<pre><code>${children}</code></pre>`);
      }
    };

    highlightCode();
  }, [children, language, mounted]);

  // Show loading state or fallback before hydration
  if (!mounted || !highlightedCode) {
    return (
      <pre className={cn(
        "overflow-x-auto rounded-lg border bg-muted p-4 text-sm",
        className
      )}>
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg border", className)}>
      <div
        className="shiki-container overflow-x-auto p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}

// Simpler inline code component
interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}
