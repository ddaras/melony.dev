import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
    title: "@melony/runtime - Documentation",
    description: "Action execution engine and approval flows for Melony.",
};

export default function RuntimeDocsPage() {
    return (
        <article className="space-y-8">
            <header>
                <h1 className="text-4xl mb-4 font-bold">@melony/runtime</h1>
                <p className="text-xl text-muted-foreground">
                    The execution engine for Melony applications.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>@melony/runtime</code> package handles the execution of actions, manages async generators, and orchestrates human-in-the-loop (HITL) approval flows.
                </p>
                <div className="my-6">
                    <CodeBlock language="bash">npm install @melony/runtime</CodeBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Action Definition</strong>: Define actions with Zod schemas for type-safe execution.</li>
                    <li><strong>Async Generators</strong>: Actions can yield multiple events over time (streaming).</li>
                    <li><strong>Chaining</strong>: Automatically chain actions based on results.</li>
                    <li><strong>Approval Flows</strong>: Built-in support for pausing execution for user approval.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Defining an Action</h2>
                <CodeBlock language="typescript">
                    {`import { defineAction } from "@melony/runtime";
import z from "zod";

export const myAction = defineAction({
  name: "myAction",
  paramsSchema: z.object({
    query: z.string(),
  }),
  execute: async function* (params) {
    yield { type: "text", data: { content: "Processing..." } };
    // ... logic
    yield { type: "text", data: { content: "Done!" } };
  },
});`}
                </CodeBlock>
            </section>
        </article>
    );
}
