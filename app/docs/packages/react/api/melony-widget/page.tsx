import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MelonyWidget API",
  description: "Complete API reference for MelonyWidget. Render individual widget templates or component definitions without markdown.",
  openGraph: {
    title: "MelonyWidget API - Melony Documentation",
    description: "Complete API reference for MelonyWidget component.",
    url: "https://melony.dev/docs/packages/react/api/melony-widget",
  },
  twitter: {
    title: "MelonyWidget API - Melony Documentation",
    description: "Complete API reference for MelonyWidget component.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/packages/react/api/melony-widget",
  },
};

export default function MelonyWidgetPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MelonyWidget</h1>
        <p className="text-xl text-muted-foreground">
          Component for rendering individual widgets or component definitions without markdown context.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { MelonyWidget } from "melony";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          <code>MelonyWidget</code> renders component markup directly, without mixing with markdown:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyWidget } from "melony";

const widget = \`
<card title="Weather">
  <text value="Sunny, 72°F" />
  <badge label="Clear" variant="success" />
</card>
\`;

function Component() {
  return <MelonyWidget>{widget}</MelonyWidget>;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">children</h3>
            <p className="text-muted-foreground mb-2">
              <code>string | ComponentDef</code> • Required
            </p>
            <p className="text-muted-foreground mb-3">
              Either a string containing Melony component markup, or a ComponentDef object defining
              the component structure programmatically.
            </p>
            <p className="text-muted-foreground mb-3 font-semibold">String Format:</p>
            <CodeBlock language="tsx">
              {`<MelonyWidget>
  <card title="Hello">
    <text value="World" />
  </card>
</MelonyWidget>`}
            </CodeBlock>
            <p className="text-muted-foreground mb-3 mt-4 font-semibold">ComponentDef Format:</p>
            <CodeBlock language="tsx">
              {`const componentDef = {
  component: "Card",
  props: { title: "Hello" },
  children: [
    {
      component: "Text",
      props: { value: "World" },
    },
  ],
};

<MelonyWidget>{componentDef}</MelonyWidget>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">context</h3>
            <p className="text-muted-foreground mb-2">
              <code>Record&lt;string, any&gt;</code> • Optional
            </p>
            <p className="text-muted-foreground mb-3">
              Custom data object for template variable substitution.
            </p>
            <CodeBlock language="tsx">
              {`const context = {
  user: { name: "Alice" },
  temperature: 72,
};

const widget = \`
<card title="{{user.name}}'s Dashboard">
  <text value="Current temp: {{temperature}}°F" />
</card>
\`;

<MelonyWidget context={context}>{widget}</MelonyWidget>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>

        <h3 className="text-lg font-semibold mb-3 mt-6">1. Rendering Pure Components</h3>
        <p className="text-muted-foreground mb-4">
          When you have component markup without any markdown text:
        </p>
        <CodeBlock language="tsx">
          {`const componentMarkup = \`
<card title="User Profile">
  <row gap="md">
    <text value="Name: John Doe" />
    <badge label="Active" variant="success" />
  </row>
  <button label="Edit Profile" action='{"type":"edit"}' />
</card>
\`;

<MelonyWidget>{componentMarkup}</MelonyWidget>`}
        </CodeBlock>

        <h3 className="text-lg font-semibold mb-3 mt-6">2. Dynamic Widget Generation</h3>
        <p className="text-muted-foreground mb-4">
          Generate widgets programmatically with context:
        </p>
        <CodeBlock language="tsx">
          {`function WeatherWidget({ location, temp, condition }) {
  const context = { location, temp, condition };
  
  const template = \`
<card title="{{location}} Weather">
  <row gap="sm">
    <text value="{{temp}}°F" size="xl" weight="bold" />
    <badge label="{{condition}}" variant="primary" />
  </row>
</card>
  \`;

  return <MelonyWidget context={context}>{template}</MelonyWidget>;
}

<WeatherWidget location="SF" temp={72} condition="Sunny" />`}
        </CodeBlock>

        <h3 className="text-lg font-semibold mb-3 mt-6">3. Testing Components</h3>
        <p className="text-muted-foreground mb-4">
          Useful for testing component rendering in isolation:
        </p>
        <CodeBlock language="tsx">
          {`import { render } from "@testing-library/react";
import { MelonyProvider, MelonyWidget } from "melony";

test("renders button component", () => {
  const { getByText } = render(
    <MelonyProvider>
      <MelonyWidget>
        <button label="Click Me" variant="primary" />
      </MelonyWidget>
    </MelonyProvider>
  );
  
  expect(getByText("Click Me")).toBeInTheDocument();
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">ComponentDef Format</h2>
        <p className="text-muted-foreground mb-4">
          For programmatic component generation, use the ComponentDef object format:
        </p>
        <CodeBlock language="tsx">
          {`interface ComponentDef {
  component: string;           // Component name (e.g., "Card", "Text")
  props?: Record<string, any>; // Component props
  children?: (ComponentDef | string)[]; // Nested components or text
}

const def: ComponentDef = {
  component: "Card",
  props: { title: "Weather", padding: "lg" },
  children: [
    {
      component: "Text",
      props: { value: "Sunny", size: "xl" },
    },
    {
      component: "Badge",
      props: { label: "Clear", variant: "success" },
    },
  ],
};

<MelonyWidget>{def}</MelonyWidget>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">MelonyWidget vs MelonyMarkdown</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong>Use MelonyWidget when:</strong>
          </p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>You have pure component markup without markdown</li>
            <li>You&apos;re rendering a single, focused widget</li>
            <li>You&apos;re building programmatic component definitions</li>
            <li>You&apos;re testing components in isolation</li>
          </ul>

          <p className="mt-4">
            <strong>Use MelonyMarkdown when:</strong>
          </p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>You have mixed markdown text and components</li>
            <li>You&apos;re rendering AI streaming responses</li>
            <li>You need markdown formatting (headings, lists, etc.)</li>
            <li>You&apos;re building chat interfaces</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, MelonyWidget } from "melony";
import { useState } from "react";

function WeatherDashboard() {
  const [weather] = useState({
    location: "San Francisco",
    temperature: 72,
    condition: "Sunny",
    humidity: 65,
  });

  const handleAction = (action) => {
    if (action.type === "refresh") {
      console.log("Refreshing weather...");
    }
  };

  const context = {
    ...weather,
    lastUpdated: new Date().toLocaleTimeString(),
  };

  const widgetTemplate = \`
<card title="{{location}} Weather" padding="lg">
  <row gap="lg">
    <column>
      <text value="Temperature" size="sm" color="muted" />
      <text value="{{temperature}}°F" size="xl" weight="bold" />
    </column>
    
    <column>
      <text value="Condition" size="sm" color="muted" />
      <badge label="{{condition}}" variant="success" />
    </column>
    
    <column>
      <text value="Humidity" size="sm" color="muted" />
      <text value="{{humidity}}%" weight="medium" />
    </column>
  </row>
  
  <text value="Last updated: {{lastUpdated}}" size="sm" color="muted" />
  
  <row gap="sm">
    <button 
      label="Refresh" 
      variant="primary"
      action='{"type":"refresh","location":"{{location}}"}' 
    />
    <button label="Details" variant="outline" />
  </row>
</card>
  \`;

  return (
    <MelonyProvider onAction={handleAction}>
      <MelonyWidget context={context}>
        {widgetTemplate}
      </MelonyWidget>
    </MelonyProvider>
  );
}

export default WeatherDashboard;`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            Must be used within a <code>MelonyProvider</code> to access theme and actions
          </li>
          <li>
            Accepts either string markup or ComponentDef objects
          </li>
          <li>
            Context variables work the same as in <code>MelonyMarkdown</code>
          </li>
          <li>
            No markdown parsing—only component rendering
          </li>
          <li>
            Useful for building reusable widget wrappers
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
            - For markdown with embedded components
          </p>
          <p>
            <a href="/docs/packages/react/api/melony-provider" className="text-primary hover:underline">
              MelonyProvider
            </a>{" "}
            - Root provider component
          </p>
          <p>
            <a href="/docs/widgets" className="text-primary hover:underline">
              Widget Templates
            </a>{" "}
            - Learn about widget templates
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

