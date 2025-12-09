import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MelonyMarkdown API",
  description: "Complete API reference for MelonyMarkdown. Render markdown content with embedded HTML-like components progressively.",
  openGraph: {
    title: "MelonyMarkdown API - Melony Documentation",
    description: "Complete API reference for MelonyMarkdown component.",
    url: "https://melony.dev/docs/packages/react/api/melony-markdown",
  },
  twitter: {
    title: "MelonyMarkdown API - Melony Documentation",
    description: "Complete API reference for MelonyMarkdown component.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/packages/react/api/melony-markdown",
  },
};

export default function MelonyMarkdownPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MelonyMarkdown</h1>
        <p className="text-xl text-muted-foreground">
          Component for rendering markdown content with embedded HTML-like Melony components.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { MelonyMarkdown } from "melony";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <CodeBlock language="tsx">
          {`import { MelonyMarkdown } from "melony";

const content = \`
# Hello World

Here's a component:

<card title="Weather">
  <text value="Sunny, 72°F" />
</card>

Some more markdown text.
\`;

function Component() {
  return <MelonyMarkdown>{content}</MelonyMarkdown>;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">children</h3>
            <p className="text-muted-foreground mb-2">
              <code>string</code> • Required
            </p>
            <p className="text-muted-foreground mb-3">
              Markdown content with optional embedded Melony component tags. The content is parsed
              progressively, rendering markdown text and components as they become complete.
            </p>
            <CodeBlock language="tsx">
              {`<MelonyMarkdown>
  ## Title
  
  <card>
    <text value="Content" />
  </card>
</MelonyMarkdown>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">components</h3>
            <p className="text-muted-foreground mb-2">
              <code>Partial&lt;Components&gt;</code> • Optional
            </p>
            <p className="text-muted-foreground mb-3">
              Custom React components to override default markdown element rendering (e.g., custom
              heading, paragraph, or link components).
            </p>
            <CodeBlock language="tsx">
              {`const customComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-purple-600">
      {children}
    </h1>
  ),
  p: ({ children }) => (
    <p className="my-4 text-gray-700">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-blue-500 underline">
      {children}
    </a>
  ),
};

<MelonyMarkdown components={customComponents}>
  {content}
</MelonyMarkdown>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">context</h3>
            <p className="text-muted-foreground mb-2">
              <code>Record&lt;string, any&gt;</code> • Optional
            </p>
            <p className="text-muted-foreground mb-3">
              Custom data object that becomes available as variables in component templates for
              dynamic content rendering.
            </p>
            <CodeBlock language="tsx">
              {`const context = {
  user: {
    name: "John Doe",
    email: "john@example.com",
  },
  isAuthenticated: true,
};

const content = \`
Welcome, {{user.name}}!

<card title="Profile">
  <text value="Email: {{user.email}}" />
  <text value="Status: {{isAuthenticated ? 'Active' : 'Guest'}}" />
</card>
\`;

<MelonyMarkdown context={context}>{content}</MelonyMarkdown>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Progressive Rendering</h2>
        <p className="text-muted-foreground mb-4">
          <code>MelonyMarkdown</code> is designed for streaming AI responses. As content arrives,
          it progressively parses and renders:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
          <li>Markdown text is rendered immediately</li>
          <li>Component tags are parsed as they become complete</li>
          <li>Components render instantly when their closing tag arrives</li>
          <li>No waiting for the entire response to complete</li>
        </ul>
        <CodeBlock language="tsx">
          {`import { useChat } from "ai/react";

function Chat() {
  const { messages } = useChat({ api: "/api/chat" });

  return messages.map((message) => (
    <div key={message.id}>
      {message.role === "assistant" ? (
        <MelonyMarkdown>{message.content}</MelonyMarkdown>
      ) : (
        <p>{message.content}</p>
      )}
    </div>
  ));
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Supported Markdown</h2>
        <p className="text-muted-foreground mb-4">
          <code>MelonyMarkdown</code> supports GitHub Flavored Markdown (GFM):
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Headings (# ## ### etc.)</li>
          <li>Bold, italic, strikethrough</li>
          <li>Lists (ordered and unordered)</li>
          <li>Links and images</li>
          <li>Code blocks and inline code</li>
          <li>Blockquotes</li>
          <li>Tables</li>
          <li>Task lists</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Embedded Components</h2>
        <p className="text-muted-foreground mb-4">
          All Melony components can be embedded using HTML-like syntax:
        </p>
        <CodeBlock language="markdown">
          {`## My Dashboard

Here's some markdown text.

<card title="Stats" padding="lg">
  <row gap="md">
    <column>
      <text value="Users" size="sm" color="muted" />
      <text value="1,234" size="xl" weight="bold" />
    </column>
    <column>
      <text value="Revenue" size="sm" color="muted" />
      <text value="$12,345" size="xl" weight="bold" />
    </column>
  </row>
</card>

More markdown text here.

<button label="Refresh" action='{"type":"refresh"}' />

The end.`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Context</h2>
        <p className="text-muted-foreground mb-4">
          Use context to pass dynamic data to templates:
        </p>
        <CodeBlock language="tsx">
          {`const context = {
  stats: {
    users: 1234,
    revenue: 12345,
  },
  products: [
    { name: "Product A", sales: 120 },
    { name: "Product B", sales: 98 },
  ],
};

const content = \`
## Dashboard

<card title="Statistics">
  <text value="Users: {{stats.users}}" />
  <text value="Revenue: \\$\\{{stats.revenue\\}}" />
</card>

<card title="Top Products">
  <for items="{{products}}">
    <text value="{{item.name}}: {{item.sales}} sales" />
  </for>
</card>
\`;

<MelonyMarkdown context={context}>{content}</MelonyMarkdown>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, MelonyMarkdown } from "melony";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const context = {
    user: {
      name: "Alice",
      email: "alice@example.com",
    },
    timestamp: new Date().toLocaleString(),
  };

  const handleAction = (action) => {
    console.log("Action:", action.type);
  };

  return (
    <MelonyProvider onAction={handleAction}>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="message">
              {message.role === "assistant" ? (
                <MelonyMarkdown context={context}>
                  {message.content}
                </MelonyMarkdown>
              ) : (
                <div className="user-message">
                  {message.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t p-4">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="w-full px-4 py-2 border rounded"
          />
        </form>
      </div>
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            Must be used within a <code>MelonyProvider</code> to access theme and action handlers
          </li>
          <li>
            Component tags must be properly closed (self-closing or with closing tag)
          </li>
          <li>
            Context variables use <code>{`{{variable}}`}</code> syntax
          </li>
          <li>
            Progressive rendering works best with streaming AI responses
          </li>
          <li>
            Markdown and components can be freely mixed in any order
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">See Also</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>
            <a href="/docs/packages/react/api/melony-provider" className="text-primary hover:underline">
              MelonyProvider
            </a>{" "}
            - Root provider component
          </p>
          <p>
            <a href="/docs/components" className="text-primary hover:underline">
              Components
            </a>{" "}
            - Available component tags
          </p>
          <p>
            <a href="/docs/context" className="text-primary hover:underline">
              Context System
            </a>{" "}
            - Learn about context variables
          </p>
        </div>
      </section>
    </div>
  );
}

