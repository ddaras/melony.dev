import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
    title: "@melony/react - Documentation",
    description: "React integration for Melony: components, hooks, and Server-Driven UI.",
};

export default function ReactDocsPage() {
    return (
        <article className="space-y-8">
            <header>
                <h1 className="text-4xl mb-4 font-bold">@melony/react</h1>
                <p className="text-xl text-muted-foreground">
                    Build beautiful AI interfaces with React and Server-Driven UI.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>@melony/react</code> package provides everything you need to build AI chat interfaces in React. It includes the <code>MelonyProvider</code>, hooks like <code>useMelony</code>, and the <code>MelonyMarkdown</code> renderer.
                </p>
                <div className="my-6">
                    <CodeBlock language="bash">npm install @melony/react</CodeBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Server-Driven UI</strong>: Render components directly from server events.</li>
                    <li><strong>MelonyMarkdown</strong>: Render mixed content (markdown + components) seamlessly.</li>
                    <li><strong>Hooks</strong>: <code>useMelony</code>, <code>useChat</code>, and more for custom logic.</li>
                    <li><strong>Theming</strong>: Full control over the look and feel of your AI interface.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Usage</h2>
                <CodeBlock language="tsx">
                    {`"use client";
import { MelonyStoreProvider, Chat } from "@melony/react";

export default function Page() {
  return (
    <MelonyStoreProvider api="/api/chat">
      <Chat />
    </MelonyStoreProvider>
  );
}`}
                </CodeBlock>
            </section>
        </article>
    );
}
