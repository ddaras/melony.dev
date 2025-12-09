import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MelonyProvider API",
  description: "Complete API reference for MelonyProvider. Configure theme, actions, widgets, and global settings for all Melony components.",
  openGraph: {
    title: "MelonyProvider API - Melony Documentation",
    description: "Complete API reference for MelonyProvider component.",
    url: "https://melony.dev/docs/packages/react/api/melony-provider",
  },
  twitter: {
    title: "MelonyProvider API - Melony Documentation",
    description: "Complete API reference for MelonyProvider component.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/packages/react/api/melony-provider",
  },
};

export default function MelonyProviderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MelonyProvider</h1>
        <p className="text-xl text-muted-foreground">
          Root component that provides configuration and context for all Melony components.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { MelonyProvider } from "melony";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <CodeBlock language="tsx">
          {`import { MelonyProvider } from "melony";

function App() {
  return (
    <MelonyProvider>
      {/* Your components */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">children</h3>
            <p className="text-muted-foreground mb-2">
              <code>ReactNode</code> • Required
            </p>
            <p className="text-muted-foreground">
              Child components that will have access to the Melony context.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">theme</h3>
            <p className="text-muted-foreground mb-2">
              <code>MelonyTheme</code> • Optional
            </p>
            <p className="text-muted-foreground mb-3">
              Custom theme object to style all Melony components.
            </p>
            <CodeBlock language="tsx">
              {`const theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6366f1",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    muted: "#6b7280",
    background: "#ffffff",
    foreground: "#000000",
    border: "#e5e7eb",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
    },
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
};

<MelonyProvider theme={theme}>
  {/* Components */}
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">onAction</h3>
            <p className="text-muted-foreground mb-2">
              <code>(action: Action) =&gt; void</code> • Optional
            </p>
            <p className="text-muted-foreground mb-3">
              Callback function that handles actions triggered by buttons and other interactive components.
            </p>
            <CodeBlock language="tsx">
              {`const handleAction = (action: Action) => {
  console.log("Action:", action.type, action.payload);
  
  switch (action.type) {
    case "delete-item":
      // Handle delete
      break;
    case "refresh":
      // Handle refresh
      break;
  }
};

<MelonyProvider onAction={handleAction}>
  {/* Components */}
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">widgets</h3>
            <p className="text-muted-foreground mb-2">
              <code>WidgetTemplate[]</code> • Optional
            </p>
            <p className="text-muted-foreground mb-3">
              Array of widget templates that AI can use with the <code>&lt;widget&gt;</code> tag.
            </p>
            <CodeBlock language="tsx">
              {`const widgets = [
  {
    type: "weather",
    name: "Weather Card",
    template: \`<card title="{{location}}">
      <text value="{{temperature}}°F" />
      <badge label="{{condition}}" />
    </card>\`,
    props: [
      { name: "location", type: "string", required: true },
      { name: "temperature", type: "number", required: true },
      { name: "condition", type: "string", required: true },
    ],
  },
];

<MelonyProvider widgets={widgets}>
  {/* Components */}
</MelonyProvider>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">TypeScript Types</h2>

        <h3 className="text-lg font-semibold mb-3 mt-6">Action</h3>
        <CodeBlock language="tsx">
          {`interface Action {
  type: string;
  payload?: any;
}`}
        </CodeBlock>

        <h3 className="text-lg font-semibold mb-3 mt-6">MelonyTheme</h3>
        <CodeBlock language="tsx">
          {`interface MelonyTheme {
  colors?: {
    primary?: string;
    secondary?: string;
    success?: string;
    warning?: string;
    danger?: string;
    muted?: string;
    background?: string;
    foreground?: string;
    border?: string;
  };
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  typography?: {
    fontFamily?: string;
    fontSize?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
    fontWeight?: {
      normal?: string;
      medium?: string;
      semibold?: string;
      bold?: string;
    };
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    full?: string;
  };
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
}`}
        </CodeBlock>

        <h3 className="text-lg font-semibold mb-3 mt-6">WidgetTemplate</h3>
        <CodeBlock language="tsx">
          {`interface WidgetTemplate {
  type: string;
  name: string;
  description?: string;
  template: string;
  props: WidgetProp[];
}

interface WidgetProp {
  name: string;
  type: string;
  required: boolean;
  description?: string;
  default?: any;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, MelonyMarkdown } from "melony";
import { useChat } from "ai/react";

const customTheme = {
  colors: {
    primary: "#8b5cf6",
    success: "#10b981",
  },
};

const widgets = [
  {
    type: "weather",
    name: "Weather Card",
    template: \`<card title="{{location}}">
      <text value="{{temperature}}°F" />
    </card>\`,
    props: [
      { name: "location", type: "string", required: true },
      { name: "temperature", type: "number", required: true },
    ],
  },
];

export default function App() {
  const { messages } = useChat({ api: "/api/chat" });

  const handleAction = (action) => {
    console.log("Action:", action.type);
    // Handle actions
  };

  return (
    <MelonyProvider 
      theme={customTheme}
      onAction={handleAction}
      widgets={widgets}
    >
      {messages.map((m) => (
        <MelonyMarkdown key={m.id}>{m.content}</MelonyMarkdown>
      ))}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <code>MelonyProvider</code> should wrap your entire app or the section using Melony components
          </li>
          <li>
            All props are optional except <code>children</code>
          </li>
          <li>
            Theme values are merged with defaults, so you can provide partial themes
          </li>
          <li>
            The <code>onAction</code> handler receives all actions from child components
          </li>
          <li>
            Widget templates are globally available to all <code>MelonyMarkdown</code> and <code>MelonyWidget</code> components
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">See Also</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>
            <a href="/docs/packages/react/api/melony-markdown" className="text-primary hover:underline">
              MelonyMarkdown
            </a>{" "}
            - Render markdown with embedded components
          </p>
          <p>
            <a href="/docs/theming" className="text-primary hover:underline">
              Theming Guide
            </a>{" "}
            - Learn about theme customization
          </p>
          <p>
            <a href="/docs/actions" className="text-primary hover:underline">
              Actions & Events
            </a>{" "}
            - Learn about action handling
          </p>
          <p>
            <a href="/docs/widgets" className="text-primary hover:underline">
              Widget Templates
            </a>{" "}
            - Learn about widget templates
          </p>
        </div>
      </section>
    </div>
  );
}

