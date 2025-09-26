"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Github, Terminal } from "lucide-react";

interface StarterTemplateProps {
  variant?: "home" | "docs";
}

export function StarterTemplate({ variant = "home" }: StarterTemplateProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/ddaras/melony-next-ai-sdk-starter.git my-chat-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHome = variant === "home";

  return (
    <section className={isHome ? "py-24 px-4 sm:px-6 lg:px-8 relative" : "space-y-8"}>
      {isHome && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
      )}
      
      <div className={isHome ? "max-w-7xl mx-auto relative" : ""}>
        <div className={isHome ? "text-center mb-20" : "mb-8"}>
          <h2 className={`${isHome ? "text-3xl font-bold" : "text-3xl"} font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text`}>
            {isHome ? "Get Started in 30 Seconds" : "Starter Template"}
          </h2>
          <p className={`${isHome ? "text-lg" : "text-lg"} text-muted-foreground/90 max-w-3xl ${isHome ? "mx-auto" : ""} font-medium leading-relaxed`}>
            {isHome 
              ? "Use our Next.js starter template to jumpstart your AI chat application"
              : "Jumpstart your AI chat application with our Next.js starter template that includes everything you need to get started."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Template info */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-background to-muted/30 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                      <Terminal className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">melony-next-ai-sdk-starter</CardTitle>
                      <CardDescription>Next.js + AI SDK + Melony</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Ready to use
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What&apos;s included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Next.js 15 with App Router</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>AI SDK integration with streaming</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Melony provider and hooks setup</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>TypeScript configuration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Tailwind CSS styling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Example chat interface</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={copyCommand}
                      className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {copied ? (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Command
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://github.com/ddaras/melony-next-ai-sdk-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Code example */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl border border-border/50 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Terminal
                </div>
              </div>
              <CodeBlock language="bash">
                {`# Clone the repository
git clone https://github.com/ddaras/melony-next-ai-sdk-starter.git my-chat-app

# Navigate to the project
cd my-chat-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
npm run dev`}
              </CodeBlock>
            </div>

            {isHome && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or explore the template on GitHub
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/ddaras/melony-next-ai-sdk-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Browse Template
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>

        {isHome && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <Terminal className="w-4 h-4 mr-2" />
              One command to get started
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">
                <code className="text-lg font-mono text-foreground">
                  git clone https://github.com/ddaras/melony-next-ai-sdk-starter.git my-chat-app
                </code>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
