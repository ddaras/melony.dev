import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Context System",
  description: "Learn how to pass custom data to Melony components for template rendering. Share state and data across AI-generated components.",
  openGraph: {
    title: "Context System - Melony Documentation",
    description: "Pass custom data to components for template rendering and variable substitution.",
    url: "https://melony.dev/docs/context",
  },
  twitter: {
    title: "Context System - Melony Documentation",
    description: "Pass custom data to components for template rendering and variable substitution.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/context",
  },
};

export default function ContextPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Context System</h1>
        <p className="text-xl text-muted-foreground">
          Pass custom data to components for dynamic template rendering.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Melony&apos;s context system allows you to pass custom data to <code>MelonyMarkdown</code> or 
          <code>MelonyWidget</code> components. This data becomes available as variables in component 
          templates, enabling dynamic content rendering based on your application state.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          Pass a <code>context</code> object to <code>MelonyMarkdown</code>:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyMarkdown } from "melony";

function Chat() {
  const context = {
    user: {
      name: "John Doe",
      email: "john@example.com",
    },
    isAuthenticated: true,
  };

  const aiResponse = \`
    Welcome, {{user.name}}!
    
    <card title="Profile">
      <text value="Name: {{user.name}}" />
      <text value="Email: {{user.email}}" />
    </card>
  \`;

  return <MelonyMarkdown context={context}>{aiResponse}</MelonyMarkdown>;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Using Context Variables</h2>
        <p className="text-muted-foreground mb-4">
          Context variables can be used anywhere in component templates:
        </p>
        <CodeBlock language="markdown">
          {`Hello {{user.name}}!

<card title="Welcome">
  <text value="Email: {{user.email}}" />
  <text value="Status: {{isAuthenticated ? 'Logged In' : 'Guest'}}" />
</card>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dynamic Data</h2>
        <p className="text-muted-foreground mb-4">
          Update context dynamically based on your application state:
        </p>
        <CodeBlock language="tsx">
          {`import { useState } from "react";
import { MelonyMarkdown } from "melony";

function Dashboard() {
  const [weather, setWeather] = useState({
    temp: 72,
    condition: "Sunny",
    location: "San Francisco",
  });

  const context = {
    weather,
    currentTime: new Date().toLocaleTimeString(),
  };

  const content = \`
    <card title="Dashboard">
      <text value="Time: {{currentTime}}" />
      <text value="{{weather.location}} Weather" size="lg" weight="bold" />
      <text value="{{weather.temp}}°F - {{weather.condition}}" />
    </card>
  \`;

  return (
    <div>
      <MelonyMarkdown context={context}>{content}</MelonyMarkdown>
      <button onClick={() => setWeather({ ...weather, temp: weather.temp + 1 })}>
        Increase Temp
      </button>
    </div>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Nested Objects</h2>
        <p className="text-muted-foreground mb-4">
          Context supports deeply nested objects:
        </p>
        <CodeBlock language="tsx">
          {`const context = {
  app: {
    name: "MyApp",
    version: "1.0.0",
    settings: {
      theme: "dark",
      language: "en",
    },
  },
  user: {
    profile: {
      name: "Alice",
      preferences: {
        notifications: true,
        newsletter: false,
      },
    },
  },
};`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          Access nested values with dot notation:
        </p>
        <CodeBlock language="markdown">
          {`<card title="{{app.name}} v{{app.version}}">
  <text value="Theme: {{app.settings.theme}}" />
  <text value="User: {{user.profile.name}}" />
  <text value="Notifications: {{user.profile.preferences.notifications ? 'On' : 'Off'}}" />
</card>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Arrays in Context</h2>
        <p className="text-muted-foreground mb-4">
          Pass arrays and use them with the <code>&lt;for&gt;</code> component:
        </p>
        <CodeBlock language="tsx">
          {`const context = {
  tasks: [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Walk dog", completed: true },
    { id: 3, title: "Code review", completed: false },
  ],
};

const content = \`
  <card title="My Tasks">
    <for items="{{tasks}}">
      <row gap="md">
        <text value="{{item.title}}" flex="1" />
        <badge 
          label="{{item.completed ? 'Done' : 'Pending'}}" 
          variant="{{item.completed ? 'success' : 'warning'}}" 
        />
      </row>
    </for>
  </card>
\`;

<MelonyMarkdown context={context}>{content}</MelonyMarkdown>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Functions in Context</h2>
        <p className="text-muted-foreground mb-4">
          You can pass functions to perform calculations or formatting:
        </p>
        <CodeBlock language="tsx">
          {`const context = {
  price: 99.99,
  quantity: 3,
  formatPrice: (num: number) => \`$\${num.toFixed(2)}\`,
  calculateTotal: (price: number, qty: number) => price * qty,
};

const content = \`
  <card title="Order Summary">
    <text value="Price: {{formatPrice(price)}}" />
    <text value="Quantity: {{quantity}}" />
    <text value="Total: {{formatPrice(calculateTotal(price, quantity))}}" />
  </card>
\`;`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Real-World Example</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s a complete example with authentication state:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, MelonyMarkdown } from "melony";
import { useChat } from "ai/react";
import { useAuth } from "@/hooks/useAuth";

export default function Chat() {
  const { messages } = useChat({ api: "/api/chat" });
  const { user, isAuthenticated, logout } = useAuth();

  const context = {
    user: {
      name: user?.name || "Guest",
      email: user?.email || "",
      avatar: user?.avatar || "",
    },
    isAuthenticated,
    permissions: user?.permissions || [],
    canEdit: user?.permissions?.includes("edit") || false,
    canDelete: user?.permissions?.includes("delete") || false,
  };

  const handleAction = (action) => {
    if (action.type === "logout") {
      logout();
    }
  };

  return (
    <MelonyProvider onAction={handleAction}>
      {messages.map((m) => (
        <MelonyMarkdown key={m.id} context={context}>
          {m.content}
        </MelonyMarkdown>
      ))}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          The AI can now use context variables in its responses:
        </p>
        <CodeBlock language="markdown">
          {`Welcome back, {{user.name}}!

<card title="Your Profile">
  <text value="Email: {{user.email}}" />
  <text value="Status: {{isAuthenticated ? 'Active' : 'Guest'}}" />
  
  {{#if canEdit}}
  <button 
    label="Edit Profile" 
    action='{"type":"edit-profile"}' 
  />
  {{/if}}
  
  <button 
    label="Logout" 
    variant="outline"
    action='{"type":"logout"}' 
  />
</card>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Context with Widgets</h2>
        <p className="text-muted-foreground mb-4">
          Context also works with <code>MelonyWidget</code>:
        </p>
        <CodeBlock language="tsx">
          {`const widgetTemplate = \`
  <card title="{{user.name}}'s Dashboard">
    <text value="Welcome back!" />
    <text value="Last login: {{lastLogin}}" size="sm" color="muted" />
  </card>
\`;

const context = {
  user: { name: "Alice" },
  lastLogin: "2024-01-15 10:30 AM",
};

<MelonyWidget context={context}>{widgetTemplate}</MelonyWidget>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <strong>Keep it Flat:</strong> Avoid deeply nested structures when possible
          </li>
          <li>
            <strong>Type Safety:</strong> Define TypeScript interfaces for your context objects
          </li>
          <li>
            <strong>Minimal Data:</strong> Only pass data that templates actually need
          </li>
          <li>
            <strong>Immutability:</strong> Don&apos;t mutate context objects directly
          </li>
          <li>
            <strong>Memoization:</strong> Use useMemo for computed context values
          </li>
          <li>
            <strong>Security:</strong> Never pass sensitive data that shouldn&apos;t be exposed
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">TypeScript Support</h2>
        <p className="text-muted-foreground mb-4">
          Define types for your context objects:
        </p>
        <CodeBlock language="tsx">
          {`interface UserContext {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  isAuthenticated: boolean;
  permissions: string[];
}

const context: UserContext = {
  user: {
    name: "Alice",
    email: "alice@example.com",
  },
  isAuthenticated: true,
  permissions: ["read", "write"],
};

<MelonyMarkdown context={context}>{content}</MelonyMarkdown>`}
        </CodeBlock>
      </section>
    </div>
  );
}

