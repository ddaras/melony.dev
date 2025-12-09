import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
    title: "@melony/client - Documentation",
    description: "Framework-agnostic client for connecting to Melony runtimes.",
};

export default function ClientDocsPage() {
    return (
        <article className="space-y-8">
            <header>
                <h1 className="text-4xl mb-4 font-bold">@melony/client</h1>
                <p className="text-xl text-muted-foreground">
                    Connect to Melony runtimes from any JavaScript environment.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>@melony/client</code> package provides a robust client for communicating with a Melony runtime over HTTP. It handles streaming, state management, and action dispatching.
                </p>
                <div className="my-6">
                    <CodeBlock language="bash">npm install @melony/client</CodeBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Framework Agnostic</strong>: Works in React, Vue, Svelte, Node.js, or vanilla JS.</li>
                    <li><strong>Streaming Support</strong>: Handles server-sent events (SSE) and chunked responses.</li>
                    <li><strong>State Management</strong>: Tracks conversation history and current agent state.</li>
                </ul>
            </section>
        </article>
    );
}
