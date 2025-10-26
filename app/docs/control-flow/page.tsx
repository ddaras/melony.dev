import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control Flow",
  description: "Learn how to render dynamic lists with Melony's <for> component. Access loop variables like item, index, isFirst, isLast, and more.",
  openGraph: {
    title: "Control Flow - Melony Documentation",
    description: "Render dynamic lists with the <for> component and loop variables.",
    url: "https://melony.dev/docs/control-flow",
  },
  twitter: {
    title: "Control Flow - Melony Documentation",
    description: "Render dynamic lists with the <for> component and loop variables.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/control-flow",
  },
};

export default function ControlFlowPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Control Flow</h1>
        <p className="text-xl text-muted-foreground">
          Render dynamic lists and repeated content with the <code>&lt;for&gt;</code> component.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Melony provides a <code>&lt;for&gt;</code> component that lets AI render lists of items 
          dynamically. It&apos;s perfect for displaying arrays of data like tasks, users, products, or 
          any repeating content.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          The AI can use the <code>&lt;for&gt;</code> component with an <code>items</code> prop 
          containing a JSON array:
        </p>
        <CodeBlock language="markdown">
          {`<card title="Task List">
  <for items='[{"task": "Buy groceries"}, {"task": "Walk dog"}, {"task": "Code review"}]'>
    <text value="{{item.task}}" />
  </for>
</card>`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          This renders three text components, one for each task in the array.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Loop Variables</h2>
        <p className="text-muted-foreground mb-4">
          Inside a <code>&lt;for&gt;</code> component, you have access to these special variables:
        </p>
        <div className="space-y-3 text-muted-foreground">
          <p>• <code>{`{{item}}`}</code> - The current array item</p>
          <p>• <code>{`{{index}}`}</code> - Current index (0-based)</p>
          <p>• <code>{`{{isFirst}}`}</code> - Boolean, true if first item</p>
          <p>• <code>{`{{isLast}}`}</code> - Boolean, true if last item</p>
          <p>• <code>{`{{isEven}}`}</code> - Boolean, true if even index</p>
          <p>• <code>{`{{isOdd}}`}</code> - Boolean, true if odd index</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Using Loop Variables</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s an example using multiple loop variables:
        </p>
        <CodeBlock language="markdown">
          {`<card title="Shopping List">
  <for items='[
    {"item": "Apples", "qty": 5},
    {"item": "Bread", "qty": 2},
    {"item": "Milk", "qty": 1}
  ]'>
    <row gap="md" align="center">
      <text value="{{index + 1}}." weight="bold" />
      <text value="{{item.item}}" flex="1" />
      <badge label="Qty: {{item.qty}}" />
      <text value="{{isLast ? 'Last item' : ''}}" size="sm" color="muted" />
    </row>
  </for>
</card>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Nested Objects</h2>
        <p className="text-muted-foreground mb-4">
          Access nested properties using dot notation:
        </p>
        <CodeBlock language="markdown">
          {`<for items='[
  {"user": {"name": "Alice", "age": 30}},
  {"user": {"name": "Bob", "age": 25}}
]'>
  <card>
    <text value="{{item.user.name}}" size="lg" weight="bold" />
    <text value="Age: {{item.user.age}}" color="muted" />
  </card>
</for>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Conditional Styling</h2>
        <p className="text-muted-foreground mb-4">
          Use loop variables for conditional rendering:
        </p>
        <CodeBlock language="markdown">
          {`<for items='[
  {"status": "completed", "task": "Design"},
  {"status": "pending", "task": "Development"},
  {"status": "completed", "task": "Testing"}
]'>
  <row gap="md">
    <text value="{{index + 1}}" weight="bold" />
    <text value="{{item.task}}" flex="1" />
    <badge 
      label="{{item.status}}" 
      variant="{{item.status === 'completed' ? 'success' : 'warning'}}" 
    />
  </row>
</for>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Actions</h2>
        <p className="text-muted-foreground mb-4">
          Combine <code>&lt;for&gt;</code> with actions for interactive lists:
        </p>
        <CodeBlock language="markdown">
          {`<card title="User List">
  <for items='[
    {"id": "1", "name": "Alice"},
    {"id": "2", "name": "Bob"},
    {"id": "3", "name": "Charlie"}
  ]'>
    <row gap="md" align="center">
      <text value="{{item.name}}" flex="1" />
      <button 
        label="View Profile" 
        variant="outline"
        action='{"type":"view-user","id":"{{item.id}}"}' 
      />
      <button 
        label="Delete" 
        variant="destructive"
        action='{"type":"delete-user","id":"{{item.id}}"}' 
      />
    </row>
  </for>
</card>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complex Example</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s a more complex example with multiple nested components:
        </p>
        <CodeBlock language="markdown">
          {`<for items='[
  {
    "project": "Website Redesign",
    "tasks": 3,
    "completed": 2,
    "priority": "high"
  },
  {
    "project": "Mobile App",
    "tasks": 5,
    "completed": 1,
    "priority": "medium"
  }
]'>
  <card>
    <row gap="sm" align="center">
      <text value="{{item.project}}" size="lg" weight="bold" flex="1" />
      <badge 
        label="{{item.priority}}" 
        variant="{{item.priority === 'high' ? 'danger' : 'warning'}}" 
      />
    </row>
    
    <row gap="md">
      <column>
        <text value="Tasks" size="sm" color="muted" />
        <text value="{{item.tasks}}" weight="bold" />
      </column>
      <column>
        <text value="Completed" size="sm" color="muted" />
        <text value="{{item.completed}}" weight="bold" />
      </column>
      <column>
        <text value="Progress" size="sm" color="muted" />
        <text value="{{Math.round(item.completed / item.tasks * 100)}}%" weight="bold" />
      </column>
    </row>
    
    <button 
      label="View Details" 
      variant="primary"
      action='{"type":"view-project","name":"{{item.project}}"}' 
    />
  </card>
</for>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Empty States</h2>
        <p className="text-muted-foreground mb-4">
          Handle empty arrays gracefully:
        </p>
        <CodeBlock language="markdown">
          {`<card title="Tasks">
  <for items='[]'>
    <text value="{{item.task}}" />
  </for>
  <text value="No tasks yet" color="muted" />
</card>`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          When the array is empty, the <code>&lt;for&gt;</code> component renders nothing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <strong>Use Arrays:</strong> Always provide a valid JSON array to the <code>items</code> prop
          </li>
          <li>
            <strong>Template Variables:</strong> Use <code>{`{{item.propertyName}}`}</code> to access item properties
          </li>
          <li>
            <strong>Unique Keys:</strong> Include unique IDs in your items for better rendering
          </li>
          <li>
            <strong>Keep It Simple:</strong> Avoid deeply nested loops when possible
          </li>
          <li>
            <strong>Error Handling:</strong> Handle empty arrays and missing properties
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Limitations</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>The <code>items</code> prop must be a valid JSON array string</li>
          <li>Template expressions have limited JavaScript support</li>
          <li>Nested <code>&lt;for&gt;</code> loops are not currently supported</li>
          <li>Items must be objects or primitive values</li>
        </ul>
      </section>
    </div>
  );
}

