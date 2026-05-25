import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const staticRoutes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'about', changefreq: 'monthly', priority: '0.9' },
  { path: 'products', changefreq: 'weekly', priority: '0.9' },
  { path: 'blog', changefreq: 'weekly', priority: '0.8' },
  { path: 'clients', changefreq: 'monthly', priority: '0.7' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' },
  { path: 'automation', changefreq: 'weekly', priority: '0.9' },
  { path: 'plc-system', changefreq: 'weekly', priority: '0.9' },
  { path: 'scada-system', changefreq: 'weekly', priority: '0.9' },
  { path: 'vfd-drive', changefreq: 'weekly', priority: '0.9' },
  { path: 'hmi-system', changefreq: 'weekly', priority: '0.9' },
];

const totalBlogs = 114;
const lastmod = new Date().toISOString().split('T')[0]; // Current date: '2026-05-25'

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Add static routes
for (const route of staticRoutes) {
  xml += `  <url>
    <loc>https://dynamiccontrolsystems.in/${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>\n`;
}

// Add dynamic blog routes
for (let id = 1; id <= totalBlogs; id++) {
  xml += `  <url>
    <loc>https://dynamiccontrolsystems.in/blog/${id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Successfully updated sitemap.xml with ${staticRoutes.length} static routes and ${totalBlogs} blog routes!`);
