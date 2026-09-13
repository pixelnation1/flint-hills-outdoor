import { AREAS } from './areas.js'
import { SERVICES } from './services.js'
import {
  BUSINESS_NAME,
  CONTACT_NAME,
  EMAIL,
  LOGO_SRC,
  PHONE_TEL,
  SITE_URL,
} from '../site.js'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  const clean = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${clean}`
}

export function logoUrl() {
  return absoluteUrl(LOGO_SRC)
}

export function getSeoRoutes() {
  return [
    {
      path: '/',
      title: 'Flint Hills Outdoor Co. | Year-Round Property Care in Emporia, KS',
      description:
        'Locally owned lawn mowing, leaf removal, snow removal, and yard cleanup in Emporia, Kansas and nearby towns. Call 620-779-5234 or request a free estimate.',
    },
    {
      path: '/services',
      title: 'Outdoor Services in Emporia, KS | Flint Hills Outdoor Co.',
      description:
        'Lawn mowing, leaf removal, snow removal, property maintenance, yard cleanup, and seasonal cleanup from Flint Hills Outdoor Co. in Emporia, Kansas.',
    },
    ...SERVICES.map((service) => ({
      path: `/services/${service.slug}`,
      title: service.titleTag,
      description: service.description,
    })),
    {
      path: '/service-areas',
      title: 'Service Areas | Flint Hills Outdoor Co. in Emporia, KS',
      description:
        'Flint Hills Outdoor Co. serves Emporia, Americus, Olpe, Hartford, Neosho Rapids, and Reading, Kansas. Request a free estimate for outdoor property care.',
    },
    ...AREAS.map((area) => ({
      path: `/service-areas/${area.slug}`,
      title: area.titleTag,
      description: area.description,
    })),
  ]
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: CONTACT_NAME,
    legalName: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: EMAIL,
    image: logoUrl(),
    logo: logoUrl(),
    description:
      'Locally owned outdoor property care in Emporia, Kansas, including lawn mowing, leaf removal, snow removal, and yard cleanup.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Emporia',
      addressRegion: 'KS',
      addressCountry: 'US',
    },
    areaServed: AREAS.map((area) => ({
      '@type': 'City',
      name: `${area.name}, ${area.state}`,
    })),
    knowsAbout: SERVICES.map((service) => service.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outdoor property care',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: CONTACT_NAME,
    legalName: BUSINESS_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: PHONE_TEL,
    logo: logoUrl(),
    image: logoUrl(),
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function serviceJsonLd(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      '@id': `${SITE_URL}/#business`,
    },
    areaServed: AREAS.map((area) => ({
      '@type': 'City',
      name: `${area.name}, ${area.state}`,
    })),
  }
}
