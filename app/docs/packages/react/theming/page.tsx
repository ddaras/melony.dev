import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theming",
  description: "Customize the appearance of all Melony components with the built-in theme system. Control colors, spacing, typography, and more.",
  openGraph: {
    title: "Theming - Melony Documentation",
    description: "Customize the appearance of all Melony components with the theme system.",
    url: "https://melony.dev/docs/theming",
  },
  twitter: {
    title: "Theming - Melony Documentation",
    description: "Customize the appearance of all Melony components with the theme system.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/theming",
  },
};

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Theming</h1>
        <p className="text-xl text-muted-foreground">
          Customize the appearance of all Melony components to match your brand.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Melony provides a comprehensive theme system that lets you customize colors, spacing, 
          typography, border radius, and more across all built-in components. Pass a theme object 
          to <code>MelonyProvider</code> to apply your custom styles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          Create a theme object and pass it to <code>MelonyProvider</code>:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, type MelonyTheme } from "melony";

const customTheme: MelonyTheme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6366f1",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
  },
};

function App() {
  return (
    <MelonyProvider theme={customTheme}>
      {/* Your components */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Theme Structure</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s the full theme interface with all available options:
        </p>
        <CodeBlock language="tsx">
          {`const theme: MelonyTheme = {
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
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
};`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Color System</h2>
        <p className="text-muted-foreground mb-4">
          Melony&apos;s color system includes semantic colors for different UI states:
        </p>
        <CodeBlock language="tsx">
          {`colors: {
  // Brand colors
  primary: "#3b82f6",      // Primary actions, links
  secondary: "#6366f1",    // Secondary actions
  
  // Status colors
  success: "#10b981",      // Success states
  warning: "#f59e0b",      // Warning states
  danger: "#ef4444",       // Error, destructive actions
  
  // UI colors
  muted: "#6b7280",        // Muted text, disabled states
  background: "#ffffff",   // Background color
  foreground: "#000000",   // Text color
  border: "#e5e7eb",       // Border color
}`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          Components like <code>&lt;button&gt;</code> and <code>&lt;badge&gt;</code> automatically 
          use these colors based on their <code>variant</code> prop.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Spacing Scale</h2>
        <p className="text-muted-foreground mb-4">
          Define a consistent spacing scale for gaps, padding, and margins:
        </p>
        <CodeBlock language="tsx">
          {`spacing: {
  xs: "4px",    // Extra small
  sm: "8px",    // Small
  md: "16px",   // Medium (default)
  lg: "24px",   // Large
  xl: "32px",   // Extra large
}`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          Used by components like <code>&lt;row&gt;</code>, <code>&lt;column&gt;</code>, 
          and <code>&lt;card&gt;</code> for consistent spacing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Typography</h2>
        <p className="text-muted-foreground mb-4">
          Customize fonts, sizes, and weights:
        </p>
        <CodeBlock language="tsx">
          {`typography: {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dark Mode Example</h2>
        <p className="text-muted-foreground mb-4">
          Create a dark theme by adjusting colors:
        </p>
        <CodeBlock language="tsx">
          {`const darkTheme: MelonyTheme = {
  colors: {
    primary: "#60a5fa",
    secondary: "#818cf8",
    success: "#34d399",
    warning: "#fbbf24",
    danger: "#f87171",
    muted: "#9ca3af",
    background: "#0f172a",
    foreground: "#f8fafc",
    border: "#334155",
  },
  // ... other theme properties
};

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <MelonyProvider theme={isDark ? darkTheme : lightTheme}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
      {/* Your components */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Partial Themes</h2>
        <p className="text-muted-foreground mb-4">
          You don&apos;t need to define all theme properties. Melony uses defaults for any missing values:
        </p>
        <CodeBlock language="tsx">
          {`// Only customize colors
const minimalTheme = {
  colors: {
    primary: "#8b5cf6",
    secondary: "#ec4899",
  },
};

// Only customize spacing
const spacingTheme = {
  spacing: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
  },
};`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dynamic Theming</h2>
        <p className="text-muted-foreground mb-4">
          Change themes dynamically based on user preferences:
        </p>
        <CodeBlock language="tsx">
          {`import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    // Listen to system theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? darkTheme : lightTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    setTheme(mediaQuery.matches ? darkTheme : lightTheme);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <MelonyProvider theme={theme}>
      {/* Your components */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <strong>Consistency:</strong> Use semantic color names consistently across your app
          </li>
          <li>
            <strong>Accessibility:</strong> Ensure sufficient contrast ratios (WCAG AA: 4.5:1 minimum)
          </li>
          <li>
            <strong>Spacing:</strong> Use a consistent spacing scale for visual harmony
          </li>
          <li>
            <strong>Typography:</strong> Limit to 2-3 font sizes for clarity
          </li>
          <li>
            <strong>Testing:</strong> Test your theme with all component variants
          </li>
        </ul>
      </section>
    </div>
  );
}

