import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
  description: "Complete reference of all available Melony components. Learn how to use card, button, text, badge, row, column, chart, and more HTML-like tags.",
  openGraph: {
    title: "Components - Melony Documentation",
    description: "Complete reference of all available Melony component tags.",
    url: "https://melony.dev/docs/components",
  },
  twitter: {
    title: "Components - Melony Documentation",
    description: "Complete reference of all available Melony component tags.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/components",
  },
};

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-xl text-muted-foreground">
          Complete reference of all available HTML-like component tags that AI can use.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Melony provides a rich set of built-in components that AI can use with HTML-like syntax. 
          All components support common props and can be nested to create complex UIs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Layout Components</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Card</h3>
        <p className="text-muted-foreground mb-4">
          Container component with optional title and padding.
        </p>
        <CodeBlock language="markdown">
          {`<card title="Weather">
  <text value="Sunny, 72°F" />
</card>

<card title="Settings" padding="lg">
  <text value="Configure your preferences" />
</card>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>title</code> - Optional card title</p>
          <p>• <code>padding</code> - Size: xs, sm, md, lg, xl</p>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Row</h3>
        <p className="text-muted-foreground mb-4">
          Horizontal layout container.
        </p>
        <CodeBlock language="markdown">
          {`<row gap="md" align="center">
  <text value="Price:" />
  <text value="$99" weight="bold" />
  <badge label="Sale" variant="success" />
</row>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>gap</code> - Spacing: xs, sm, md, lg, xl</p>
          <p>• <code>align</code> - Alignment: start, center, end</p>
          <p>• <code>justify</code> - Justify: start, center, end, between</p>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Column</h3>
        <p className="text-muted-foreground mb-4">
          Vertical layout container.
        </p>
        <CodeBlock language="markdown">
          {`<column gap="sm">
  <text value="Name" size="sm" color="muted" />
  <text value="John Doe" weight="bold" />
</column>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>gap</code> - Spacing: xs, sm, md, lg, xl</p>
          <p>• <code>align</code> - Alignment: start, center, end, stretch</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Content Components</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">Text</h3>
        <p className="text-muted-foreground mb-4">
          Display text with various styling options.
        </p>
        <CodeBlock language="markdown">
          {`<text value="Hello World" />
<text value="Large text" size="xl" weight="bold" />
<text value="Muted text" color="muted" />
<text value="Flexible" flex="1" />`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>value</code> - Text content (required)</p>
          <p>• <code>size</code> - Font size: xs, sm, md, lg, xl</p>
          <p>• <code>weight</code> - Font weight: normal, medium, semibold, bold</p>
          <p>• <code>color</code> - Text color: primary, secondary, muted, success, warning, danger</p>
          <p>• <code>flex</code> - Flex grow: &quot;1&quot; to fill space</p>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Badge</h3>
        <p className="text-muted-foreground mb-4">
          Small label component for status indicators.
        </p>
        <CodeBlock language="markdown">
          {`<badge label="New" />
<badge label="Success" variant="success" />
<badge label="Warning" variant="warning" />
<badge label="Error" variant="danger" />`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>label</code> - Badge text (required)</p>
          <p>• <code>variant</code> - Style: primary, secondary, success, warning, danger, muted</p>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Button</h3>
        <p className="text-muted-foreground mb-4">
          Interactive button with action support.
        </p>
        <CodeBlock language="markdown">
          {`<button label="Click Me" />
<button label="Submit" variant="primary" />
<button label="Delete" variant="destructive" />
<button 
  label="Refresh" 
  variant="outline"
  action='{"type":"refresh","id":"123"}' 
/>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>label</code> - Button text (required)</p>
          <p>• <code>variant</code> - Style: primary, secondary, outline, destructive</p>
          <p>• <code>action</code> - JSON action string (optional)</p>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Link</h3>
        <p className="text-muted-foreground mb-4">
          Hyperlink component.
        </p>
        <CodeBlock language="markdown">
          {`<link href="https://example.com" label="Visit Site" />
<link href="/about" label="Learn More" />`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>href</code> - URL (required)</p>
          <p>• <code>label</code> - Link text (required)</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Data Visualization</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">Chart</h3>
        <p className="text-muted-foreground mb-4">
          Display data in various chart formats.
        </p>
        <CodeBlock language="markdown">
          {`<chart 
  type="line" 
  data='[{"month":"Jan","value":65},{"month":"Feb","value":72}]'
  xKey="month"
  yKey="value"
/>

<chart 
  type="bar" 
  data='[{"name":"Product A","sales":120},{"name":"Product B","sales":98}]'
  xKey="name"
  yKey="sales"
  title="Sales by Product"
/>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>type</code> - Chart type: line, bar, area, pie</p>
          <p>• <code>data</code> - JSON array of data points (required)</p>
          <p>• <code>xKey</code> - X-axis data key (required for line/bar/area)</p>
          <p>• <code>yKey</code> - Y-axis data key (required for line/bar/area)</p>
          <p>• <code>title</code> - Chart title (optional)</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Control Flow</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">For</h3>
        <p className="text-muted-foreground mb-4">
          Loop over arrays to render repeated content.
        </p>
        <CodeBlock language="markdown">
          {`<for items='[{"name":"Alice"},{"name":"Bob"},{"name":"Charlie"}]'>
  <text value="{{item.name}}" />
</for>

<for items='[{"id":1,"task":"Buy milk"},{"id":2,"task":"Walk dog"}]'>
  <row gap="md">
    <text value="{{index + 1}}" />
    <text value="{{item.task}}" flex="1" />
  </row>
</for>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>items</code> - JSON array (required)</p>
          <p><strong>Available Variables:</strong></p>
          <p>• <code>{`{{item}}`}</code> - Current item</p>
          <p>• <code>{`{{index}}`}</code> - Current index (0-based)</p>
          <p>• <code>{`{{isFirst}}`}</code>, <code>{`{{isLast}}`}</code>, <code>{`{{isEven}}`}</code>, <code>{`{{isOdd}}`}</code></p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Advanced Components</h2>

        <h3 className="text-xl font-semibold mb-3 mt-6">Widget</h3>
        <p className="text-muted-foreground mb-4">
          Use custom widget templates.
        </p>
        <CodeBlock language="markdown">
          {`<widget 
  type="weather" 
  location="San Francisco" 
  temperature="68" 
  condition="Sunny" 
/>`}
        </CodeBlock>
        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
          <p><strong>Props:</strong></p>
          <p>• <code>type</code> - Widget type identifier (required)</p>
          <p>• Additional props depend on the widget template definition</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s a comprehensive example using multiple components:
        </p>
        <CodeBlock language="markdown">
          {`<card title="Sales Dashboard" padding="lg">
  <row gap="lg" align="stretch">
    <column gap="sm" flex="1">
      <text value="Total Revenue" size="sm" color="muted" />
      <text value="$124,500" size="xl" weight="bold" />
      <badge label="+12% this month" variant="success" />
    </column>
    
    <column gap="sm" flex="1">
      <text value="Active Users" size="sm" color="muted" />
      <text value="1,234" size="xl" weight="bold" />
      <badge label="+5% this week" variant="success" />
    </column>
  </row>

  <chart 
    type="line"
    data='[
      {"month":"Jan","revenue":45000},
      {"month":"Feb","revenue":52000},
      {"month":"Mar","revenue":48000}
    ]'
    xKey="month"
    yKey="revenue"
    title="Monthly Revenue"
  />

  <card title="Top Products">
    <for items='[
      {"name":"Product A","sales":120,"trend":"up"},
      {"name":"Product B","sales":98,"trend":"down"},
      {"name":"Product C","sales":145,"trend":"up"}
    ]'>
      <row gap="md" align="center">
        <text value="{{item.name}}" flex="1" />
        <text value="{{item.sales}} sales" weight="medium" />
        <badge 
          label="{{item.trend === 'up' ? '↑' : '↓'}}" 
          variant="{{item.trend === 'up' ? 'success' : 'danger'}}" 
        />
      </row>
    </for>
  </card>

  <row gap="sm">
    <button label="Export Data" variant="primary" />
    <button label="Refresh" variant="outline" action='{"type":"refresh"}' />
  </row>
</card>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>Use semantic component names that reflect their purpose</li>
          <li>Keep nesting levels reasonable (3-4 levels max)</li>
          <li>Use layout components (row, column) for consistent spacing</li>
          <li>Leverage variants for different visual styles</li>
          <li>Combine components to create rich, interactive UIs</li>
          <li>Use the <code>flex</code> prop for responsive layouts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <a href="/docs/actions" className="text-primary hover:underline">
              Actions & Events
            </a>{" "}
            - Learn how to handle button clicks and user interactions
          </p>
          <p>
            <a href="/docs/theming" className="text-primary hover:underline">
              Theming
            </a>{" "}
            - Customize component appearance
          </p>
          <p>
            <a href="/docs/control-flow" className="text-primary hover:underline">
              Control Flow
            </a>{" "}
            - Master the <code>&lt;for&gt;</code> component
          </p>
        </div>
      </section>
    </div>
  );
}
