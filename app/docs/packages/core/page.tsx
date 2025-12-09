import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
    title: "@melony/core - Documentation",
    description: "Core types, utilities, and protocol definitions for the Melony framework.",
};

export default function CoreDocsPage() {
    return (
        <article className="space-y-8">
            <header>
                <h1 className="text-4xl mb-4 font-bold">@melony/core</h1>
                <p className="text-xl text-muted-foreground">
                    The foundation of the Melony framework.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>@melony/core</code> package contains the shared types, event definitions, and protocol specifications used across the entire framework. It has zero dependencies and is designed to be lightweight.
                </p>
                <div className="my-6">
                    <CodeBlock language="bash">npm install @melony/core</CodeBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Events</strong>: Standardized event types for streaming UI and data.</li>
                    <li><strong>Protocol</strong>: The communication protocol between the runtime and the client.</li>
                    <li><strong>Types</strong>: Shared TypeScript interfaces for actions, messages, and state.</li>
                </ul>
            </section>
        </article>
    );
}
