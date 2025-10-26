import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MelonyParser API",
  description: "Complete API reference for MelonyParser. Parse and extract Melony components from content strings programmatically.",
  openGraph: {
    title: "MelonyParser API - Melony Documentation",
    description: "Complete API reference for MelonyParser class.",
    url: "https://melony.dev/docs/api/melony-parser",
  },
  twitter: {
    title: "MelonyParser API - Melony Documentation",
    description: "Complete API reference for MelonyParser class.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/api/melony-parser",
  },
};

export default function MelonyParserPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MelonyParser</h1>
        <p className="text-xl text-muted-foreground">
          Low-level parser class for extracting and parsing Melony components from content strings.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { MelonyParser } from "melony";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          <code>MelonyParser</code> is the underlying parser used by <code>MelonyMarkdown</code> and 
          <code>MelonyWidget</code>. You typically don&apos;t need to use it directly, but it&apos;s available 
          for advanced use cases like custom renderers, custom component registration, or building 
          your own parsing logic.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <CodeBlock language="tsx">
          {`import { MelonyParser } from "melony";

const parser = new MelonyParser();

const content = \`
<card title="Weather">
  <text value="Sunny" />
</card>
\`;

const blocks = parser.parseContentAsBlocks(content);
console.log(blocks);`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Methods</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">parseContentAsBlocks</h3>
            <p className="text-muted-foreground mb-2">
              <code>(content: string) =&gt; Block[]</code>
            </p>
            <p className="text-muted-foreground mb-3">
              Parses content string into an array of blocks (text or component blocks).
            </p>
            <CodeBlock language="tsx">
              {`const content = \`
Some text here.

<card title="Hello">
  <text value="World" />
</card>

More text.
\`;

const blocks = parser.parseContentAsBlocks(content);

// Returns:
// [
//   { type: "text", content: "Some text here." },
//   { type: "component", component: {...} },
//   { type: "text", content: "More text." }
// ]`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">registerComponent</h3>
            <p className="text-muted-foreground mb-2">
              <code>(tag: string, componentName: string) =&gt; void</code>
            </p>
            <p className="text-muted-foreground mb-3">
              Register a custom component tag mapping.
            </p>
            <CodeBlock language="tsx">
              {`const parser = new MelonyParser();

// Register custom component
parser.registerComponent("mywidget", "MyWidget");

// Now the parser recognizes <mywidget> tags
const content = \`<mywidget prop="value" />\`;
const blocks = parser.parseContentAsBlocks(content);`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">registerComponents</h3>
            <p className="text-muted-foreground mb-2">
              <code>(mappings: Record&lt;string, string&gt;) =&gt; void</code>
            </p>
            <p className="text-muted-foreground mb-3">
              Register multiple component tag mappings at once.
            </p>
            <CodeBlock language="tsx">
              {`const parser = new MelonyParser();

parser.registerComponents({
  customcard: "CustomCard",
  specialbutton: "SpecialButton",
  mywidget: "MyWidget",
});`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Block Types</h2>
        <p className="text-muted-foreground mb-4">
          The parser returns an array of blocks with these types:
        </p>
        <CodeBlock language="tsx">
          {`type Block = TextBlock | ComponentBlock;

interface TextBlock {
  type: "text";
  content: string;
}

interface ComponentBlock {
  type: "component";
  component: ComponentDef;
}

interface ComponentDef {
  component: string;
  props?: Record<string, any>;
  children?: (ComponentDef | string)[];
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Custom Component Registration</h2>
        <p className="text-muted-foreground mb-4">
          Register custom component tags for specialized use cases:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyParser } from "melony";

// Create parser with custom components
const parser = new MelonyParser();

parser.registerComponents({
  "weather-card": "WeatherCard",
  "stock-ticker": "StockTicker",
  "custom-chart": "CustomChart",
});

const content = \`
<weather-card location="SF" temp="72" />
<stock-ticker symbol="AAPL" />
\`;

const blocks = parser.parseContentAsBlocks(content);
// Blocks will reference "WeatherCard" and "StockTicker" components`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Building Custom Renderers</h2>
        <p className="text-muted-foreground mb-4">
          Use the parser to build your own custom rendering logic:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyParser, renderComponent } from "melony";

function customRenderer(content: string) {
  const parser = new MelonyParser();
  const blocks = parser.parseContentAsBlocks(content);

  return blocks.map((block, index) => {
    if (block.type === "text") {
      return <div key={index}>{block.content}</div>;
    } else if (block.type === "component") {
      // Custom component rendering logic
      return (
        <div key={index} className="component-wrapper">
          {renderComponent(block.component)}
        </div>
      );
    }
  });
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Progressive Parsing</h2>
        <p className="text-muted-foreground mb-4">
          The parser is designed for progressive/streaming content:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyParser } from "melony";
import { useState, useEffect } from "react";

function StreamingRenderer({ stream }: { stream: ReadableStream }) {
  const [content, setContent] = useState("");
  const parser = new MelonyParser();

  useEffect(() => {
    const reader = stream.getReader();
    
    async function read() {
      const { done, value } = await reader.read();
      if (done) return;
      
      const chunk = new TextDecoder().decode(value);
      setContent((prev) => prev + chunk);
      
      read();
    }
    
    read();
  }, [stream]);

  const blocks = parser.parseContentAsBlocks(content);

  return (
    <div>
      {blocks.map((block, i) => (
        <div key={i}>
          {block.type === "text" ? block.content : renderComponent(block.component)}
        </div>
      ))}
    </div>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
        <p className="text-muted-foreground mb-4">
          Advanced usage with custom parsing and rendering:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyParser, renderComponent, ComponentDef } from "melony";
import { useState } from "react";

// Custom parser with additional components
const createCustomParser = () => {
  const parser = new MelonyParser();
  
  // Register custom components
  parser.registerComponents({
    "analytics-card": "AnalyticsCard",
    "chart-widget": "ChartWidget",
    "data-table": "DataTable",
  });
  
  return parser;
};

function CustomMelonyRenderer({ content }: { content: string }) {
  const parser = createCustomParser();
  const blocks = parser.parseContentAsBlocks(content);

  return (
    <div className="custom-renderer">
      {blocks.map((block, index) => {
        if (block.type === "text") {
          // Custom text rendering
          return (
            <div key={index} className="text-block">
              {block.content}
            </div>
          );
        } else {
          // Custom component rendering with wrapper
          return (
            <div key={index} className="component-block">
              <div className="component-header">
                Component: {block.component.component}
              </div>
              <div className="component-content">
                {renderComponent(block.component)}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default CustomMelonyRenderer;`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">When to Use MelonyParser</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong>Use MelonyParser directly when:</strong>
          </p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Building custom rendering logic</li>
            <li>Need to register custom component tags</li>
            <li>Building integrations with other libraries</li>
            <li>Need low-level access to parsed blocks</li>
            <li>Implementing custom progressive rendering</li>
          </ul>
          
          <p className="mt-4">
            <strong>Use MelonyMarkdown or MelonyWidget instead when:</strong>
          </p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Building standard chat interfaces</li>
            <li>Rendering AI responses with default components</li>
            <li>No need for custom parsing logic</li>
            <li>Standard use cases with built-in components</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <code>MelonyParser</code> is used internally by <code>MelonyMarkdown</code> and <code>MelonyWidget</code>
          </li>
          <li>
            Component registration is per-parser instance
          </li>
          <li>
            The parser handles incomplete/streaming content gracefully
          </li>
          <li>
            Parsed blocks can be cached for performance
          </li>
          <li>
            Use <code>renderComponent</code> helper to render ComponentDef objects
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">TypeScript Types</h2>
        <CodeBlock language="tsx">
          {`// Import types
import type { 
  MelonyParser,
  Block,
  TextBlock,
  ComponentBlock,
  ComponentDef 
} from "melony";

// Block type
type Block = TextBlock | ComponentBlock;

interface TextBlock {
  type: "text";
  content: string;
}

interface ComponentBlock {
  type: "component";
  component: ComponentDef;
}

// Component definition
interface ComponentDef {
  component: string;
  props?: Record<string, any>;
  children?: (ComponentDef | string)[];
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">See Also</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>
            <a href="/docs/api/melony-markdown" className="text-primary hover:underline">
              MelonyMarkdown
            </a>{" "}
            - High-level markdown rendering component
          </p>
          <p>
            <a href="/docs/api/melony-widget" className="text-primary hover:underline">
              MelonyWidget
            </a>{" "}
            - High-level widget rendering component
          </p>
          <p>
            <a href="/docs/api/melony-provider" className="text-primary hover:underline">
              MelonyProvider
            </a>{" "}
            - Root provider component
          </p>
        </div>
      </section>
    </div>
  );
}

