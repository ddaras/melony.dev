"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMMAND = "npx create-melony-app@latest";

export function QuickStartCommand() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50 flex items-center justify-between gap-4 group">
        <code className="text-lg font-mono text-foreground flex-1 text-left overflow-x-auto">
          {COMMAND}
        </code>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyCommand}
          className="flex-shrink-0 hover:bg-muted/50"
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
}

