export interface SeoRoute {
 path: string;
 lastmod?: string;
 changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
 priority?: number;
}


export const seoRoutes: SeoRoute[] = [
 { path: '/', changefreq: 'weekly', priority: 1.0 },
 { path: '/events', changefreq: 'weekly', priority: 0.9 },
 { path: '/book', changefreq: 'weekly', priority: 0.9 },
 { path: '/about', changefreq: 'monthly', priority: 0.7 },
 { path: '/merch', changefreq: 'monthly', priority: 0.6 },
 { path: '/contact', changefreq: 'monthly', priority: 0.6 },
];