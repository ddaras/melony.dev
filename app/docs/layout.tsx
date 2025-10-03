"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Breadcrumb } from "@/components/breadcrumb";
import { usePathname } from "next/navigation";

const navigationSections = [
  {
    title: "Getting Started",
    items: [
      {
        name: "Introduction",
        href: "/docs",
      },
      {
        name: "Installation",
        href: "/docs/installation",
      },
      {
        name: "Quick Start",
        href: "/docs/quick-start",
      },
    ],
  },
  {
    title: "Guide",
    items: [
      {
        name: "Complete Example",
        href: "/docs/complete-example",
      },
      {
        name: "Multiple Components",
        href: "/docs/multiple-components",
      },
      {
        name: "How It Works",
        href: "/docs/how-it-works",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        name: "MelonyCard",
        href: "/docs/api/melony-card",
      },
      {
        name: "zodSchemaToPrompt",
        href: "/docs/api/zod-schema-to-prompt",
      },
      {
        name: "zodSchemasToPrompt",
        href: "/docs/api/zod-schemas-to-prompt",
      },
      {
        name: "defineComponentSchema",
        href: "/docs/api/define-component-schema",
      },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Generate breadcrumb items based on pathname
  const getBreadcrumbItems = () => {
    if (pathname === "/docs") {
      return [{ label: "Documentation" }];
    }

    const segments = pathname.split("/").filter(Boolean);
    const items = [];
    
    // Add "Documentation" as the first breadcrumb for all docs pages
    if (segments[0] === "docs") {
      items.push({ label: "Documentation", href: "/docs" });
    }

    // Build breadcrumbs from path segments
    let currentPath = "";
    for (let i = 1; i < segments.length; i++) {
      currentPath += `/${segments[i]}`;
      const isLast = i === segments.length - 1;
      
      // Convert path segment to readable label
      let label = segments[i];
      if (segments[i] === "api") {
        label = "API Reference";
      } else {
        // Convert kebab-case to Title Case
        label = label.split("-").map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ");
      }

      items.push({
        label,
        href: isLast ? undefined : currentPath
      });
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2" aria-label="Melony - Home">
              <span className="text-2xl font-semibold">Melony</span>
            </Link>
            <nav className="flex items-center space-x-6" role="navigation" aria-label="Secondary navigation">
              <Link
                href="/"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors flex items-center space-x-1"
                aria-label="View Melony on GitHub (opens in new tab)"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <ThemeSwitcher />
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3" role="complementary">
            <nav className="sticky top-24 space-y-6" role="navigation" aria-label="Documentation navigation">
              {navigationSections.map((section) => (
                <div key={section.title} className="flex flex-col space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider opacity-50">
                    {section.title}
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`hover:text-foreground transition-colors ${
                          item.href === pathname ? "text-foreground font-medium" : "text-muted-foreground"
                        }`}
                        aria-current={item.href === pathname ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 pb-20">
            <Breadcrumb items={breadcrumbItems} />
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
