import Link from "next/link";
import { MessageCircle, Github } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

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
        name: "Quickstart",
        href: "/docs/quickstart",
      },
    ],
  },
  {
    title: "Core Features",
    items: [
      {
        name: "Text Delta Handling",
        href: "/docs/text-deltas",
      },
      {
        name: "Custom Message Types",
        href: "/docs/custom-types",
      },
      {
        name: "Advanced Usage",
        href: "/docs/advanced-usage",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        name: "MelonyProvider",
        href: "/docs/melony-provider",
      },
      {
        name: "Hooks",
        href: "/docs/hooks",
      },
      {
        name: "Types",
        href: "/docs/types",
      },
    ],
  },
  {
    title: "Integration",
    items: [
      {
        name: "Server Integration",
        href: "/docs/server-integration",
      },
      {
        name: "Examples",
        href: "/docs/examples",
      },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Melony</span>
            </Link>
            <div className="flex items-center space-x-6">
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
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <nav className="sticky top-24 space-y-6">
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
                        className="text-muted-foreground hover:text-foreground transition-colors"
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
          <main className="lg:col-span-9">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
