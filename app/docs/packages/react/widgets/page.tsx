import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widget Templates",
  description: "Learn how to create reusable widget templates in Melony. Define custom component structures that AI can use with simple parameters.",
  openGraph: {
    title: "Widget Templates - Melony Documentation",
    description: "Create reusable widget templates that AI can use with simple parameters.",
    url: "https://melony.dev/docs/widgets",
  },
  twitter: {
    title: "Widget Templates - Melony Documentation",
    description: "Create reusable widget templates that AI can use with simple parameters.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/widgets",
  },
};

export default function WidgetsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Widget Templates</h1>
        <p className="text-xl text-muted-foreground">
          Create reusable widget templates that AI can instantiate with simple parameters.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Widget templates let you define complex component structures once and have the AI reuse them 
          with different parameters. Instead of the AI writing out full component markup every time, 
          it can use a simple <code>&lt;widget&gt;</code> tag with props.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Creating a Widget Template</h2>
        <p className="text-muted-foreground mb-4">
          Define a widget template with a type, name, template string, and props schema:
        </p>
        <CodeBlock language="tsx">
          {`import { WidgetTemplate } from "melony";

const weatherWidget: WidgetTemplate = {
  type: "weather",
  name: "Weather Card",
  description: "Display weather information",
  template: \`<card title="{{location}} Weather">
  <row gap="md" align="center">
    <text value="{{temperature}}°F" size="xl" weight="bold" />
    <badge label="{{condition}}" variant="primary" />
  </row>
  <text value="{{description}}" color="muted" />
  <button 
    label="Refresh" 
    variant="outline"
    action='{"type":"refresh-weather","location":"{{location}}"}' 
  />
</card>\`,
  props: [
    { name: "location", type: "string", required: true },
    { name: "temperature", type: "number", required: true },
    { name: "condition", type: "string", required: true },
    { name: "description", type: "string", required: false },
  ],
};`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Registering Widgets</h2>
        <p className="text-muted-foreground mb-4">
          Pass your widget templates to <code>MelonyProvider</code>:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyProvider } from "melony";

const widgets = [weatherWidget, stockWidget, taskWidget];

function App() {
  return (
    <MelonyProvider widgets={widgets}>
      {/* Your components */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How AI Uses Widgets</h2>
        <p className="text-muted-foreground mb-4">
          Once registered, the AI can use widgets with a simple tag:
        </p>
        <CodeBlock language="markdown">
          {`Here's the weather:

<widget 
  type="weather" 
  location="San Francisco" 
  temperature="68" 
  condition="Sunny"
  description="Perfect day for a walk!" 
/>

The temperature feels comfortable.`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          This renders the full template with the provided parameters substituted.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Template Variables</h2>
        <p className="text-muted-foreground mb-4">
          Templates use <code>{`{{variableName}}`}</code> syntax for variable substitution:
        </p>
        <CodeBlock language="tsx">
          {`template: \`<card title="{{title}}">
  <text value="{{content}}" />
  {{#if showButton}}
  <button label="{{buttonLabel}}" />
  {{/if}}
</card>\``}
        </CodeBlock>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <p>• <code>{`{{variable}}`}</code> - Simple variable substitution</p>
          <p>• All props are available as variables in the template</p>
          <p>• Variables can be used in any attribute or text content</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Multiple Widget Example</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s a complete example with multiple widgets:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, WidgetTemplate } from "melony";

const widgets: WidgetTemplate[] = [
  {
    type: "weather",
    name: "Weather Card",
    template: \`<card title="{{location}}">
      <text value="{{temperature}}°F" size="lg" weight="bold" />
      <badge label="{{condition}}" />
    </card>\`,
    props: [
      { name: "location", type: "string", required: true },
      { name: "temperature", type: "number", required: true },
      { name: "condition", type: "string", required: true },
    ],
  },
  {
    type: "stock",
    name: "Stock Quote",
    template: \`<card title="{{symbol}}">
      <row gap="sm">
        <text value="\${{price}}" size="xl" weight="bold" />
        <badge 
          label="{{change > 0 ? '+' : ''}}{{change}}%" 
          variant="{{change > 0 ? 'success' : 'destructive'}}" 
        />
      </row>
    </card>\`,
    props: [
      { name: "symbol", type: "string", required: true },
      { name: "price", type: "number", required: true },
      { name: "change", type: "number", required: true },
    ],
  },
  {
    type: "task",
    name: "Task Item",
    template: \`<card>
      <row gap="md" align="center">
        <text value="{{title}}" flex="1" />
        <badge label="{{status}}" />
        <button 
          label="Complete" 
          variant="outline" 
          action='{"type":"complete-task","id":"{{id}}"}' 
        />
      </row>
    </card>\`,
    props: [
      { name: "id", type: "string", required: true },
      { name: "title", type: "string", required: true },
      { name: "status", type: "string", required: true },
    ],
  },
];

export default function App() {
  return (
    <MelonyProvider widgets={widgets}>
      {/* Your app */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Widget Props Schema</h2>
        <p className="text-muted-foreground mb-4">
          Each widget prop has the following structure:
        </p>
        <CodeBlock language="tsx">
          {`interface WidgetProp {
  name: string;           // Prop name
  type: string;           // Type: "string", "number", "boolean", etc.
  required: boolean;      // Whether prop is required
  description?: string;   // Optional description
  default?: any;          // Optional default value
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefits of Widget Templates</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <strong>Consistency:</strong> Ensure UI components have consistent styling and structure
          </li>
          <li>
            <strong>Reusability:</strong> Define complex components once, reuse many times
          </li>
          <li>
            <strong>Simplicity:</strong> AI uses simple parameters instead of writing full markup
          </li>
          <li>
            <strong>Maintainability:</strong> Update widget templates in one place
          </li>
          <li>
            <strong>Type Safety:</strong> Define prop schemas to ensure correct usage
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>Keep widget templates focused on a single purpose</li>
          <li>Use descriptive type names (e.g., &quot;weather-card&quot; not &quot;widget1&quot;)</li>
          <li>Provide clear descriptions for each widget and prop</li>
          <li>Mark props as required only when truly necessary</li>
          <li>Use default values for optional props when sensible</li>
          <li>Test widgets with different parameter combinations</li>
        </ul>
      </section>
    </div>
  );
}

