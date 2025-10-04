import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  tags,
  featured = false,
}: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <article className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
        <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
          <span>Featured</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <time dateTime={date}>{formattedDate}</time>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <Link 
            href={`/blog/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Read more →
        </Link>
      </article>
    );
  }

  return (
    <article className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{readTime}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <time dateTime={date}>{formattedDate}</time>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">
        <Link 
          href={`/blog/${slug}`}
          className="hover:text-primary transition-colors"
        >
          {title}
        </Link>
      </h3>
      <p className="text-muted-foreground mb-4">
        {excerpt}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
