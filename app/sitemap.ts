import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://melony.dev';
  
  // Add your documentation and blog routes here
  const routes = [
    '',
    '/docs',
    '/docs/installation',
    '/docs/quick-start',
    '/docs/how-it-works',
    '/docs/complete-example',
    '/docs/multiple-components',
    '/docs/api/define-component-schema',
    '/docs/api/melony-card',
    '/docs/api/zod-schema-to-prompt',
    '/docs/api/zod-schemas-to-prompt',
    // Blog routes
    '/blog',
    '/blog/building-real-time-ai-chat-interfaces-react',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : route.startsWith('/blog') ? 'weekly' as const : 'weekly' as const,
    priority: route === '' ? 1 : route === '/docs' ? 0.9 : route.startsWith('/blog') ? 0.8 : 0.8,
  }));

  return routes;
} 