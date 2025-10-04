import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Learn about building AI chat interfaces, React components, and modern web development with Melony.",
  openGraph: {
    title: "Melony Blog - AI Chat Interface Development",
    description:
      "Expert insights on building real-time AI chat interfaces with React and progressive rendering.",
    url: "https://melony.dev/blog",
  },
  twitter: {
    title: "Melony Blog - AI Chat Interface Development",
    description:
      "Expert insights on building real-time AI chat interfaces with React and progressive rendering.",
  },
  alternates: {
    canonical: "https://melony.dev/blog",
  },
};

// Blog post data - in a real app, this would come from a CMS or markdown files
const blogPosts = [
  {
    slug: "building-real-time-ai-chat-interfaces-react",
    title:
      "Building Real-Time Generative UI: How to Stream AI Components with Zero Latency",
    excerpt:
      "Learn how to create responsive, type-safe AI chat interfaces that render components progressively as the AI thinks. Master zero-latency streaming with React and TypeScript.",
    date: "2025-01-27",
    readTime: "8 min read",
    tags: ["React", "AI", "TypeScript", "Streaming"],
    featured: true,
  },
];

export default function BlogPage() {
  return (
    <article className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Melony Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert insights on building AI chat interfaces, React components, and
          modern web development.
        </p>
      </header>

      {/* Featured Post */}
      {blogPosts
        .filter((post) => post.featured)
        .map((post) => (
          <section
            key={post.slug}
            className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
              <span>Featured</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Read more →
            </Link>
          </section>
        ))}

      {/* All Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8">All Posts</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
