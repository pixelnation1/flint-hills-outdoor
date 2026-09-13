import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { getSeoRoutes } from '../src/data/seo.js'
import { SITE_URL } from '../src/site.js'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function setMeta(html, route) {
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${url}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
}

function sitemapXml(routes) {
  const urls = routes
    .map((route) => {
      const loc = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
      const priority = route.path === '/' ? '1.0' : route.path.split('/').length === 2 ? '0.8' : '0.7'
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function robotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
}

function serveSeoFiles() {
  return (req, res, next) => {
    const url = (req.url || '').split('?')[0]
    if (url === '/sitemap.xml') {
      const body = sitemapXml(getSeoRoutes())
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/xml; charset=utf-8')
      res.end(body)
      return
    }
    if (url === '/robots.txt') {
      const body = robotsTxt()
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end(body)
      return
    }
    next()
  }
}

export function seoStaticPlugin() {
  return {
    name: 'seo-static',
    configureServer(server) {
      server.middlewares.use(serveSeoFiles())
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveSeoFiles())
    },
    closeBundle() {
      const outDir = join(process.cwd(), 'dist')
      const indexPath = join(outDir, 'index.html')
      let html
      try {
        html = readFileSync(indexPath, 'utf8')
      } catch {
        return
      }

      const routes = getSeoRoutes()
      for (const route of routes) {
        const pageHtml = setMeta(html, route)
        if (route.path === '/') {
          writeFileSync(indexPath, pageHtml)
          continue
        }
        const target = join(outDir, route.path.replace(/^\//, ''), 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, pageHtml)
      }

      writeFileSync(join(outDir, 'sitemap.xml'), sitemapXml(routes))
      writeFileSync(join(outDir, 'robots.txt'), robotsTxt())
    },
  }
}
