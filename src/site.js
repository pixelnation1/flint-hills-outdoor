export const PHONE_DISPLAY = '620-779-5234'
export const PHONE_TEL = '+16207795234'
export const EMAIL = 'service@flinthillsoutdoorco.com'
export const EMAIL_HREF = 'mailto:service@flinthillsoutdoorco.com'
export const SITE_URL = 'https://www.flinthillsoutdoorco.com'
export const WEBSITE_DISPLAY = 'www.flinthillsoutdoorco.com'
export const WEBSITE_HREF = SITE_URL
export const SERVICE_AREA = 'Emporia, KS & Surrounding Areas'
export const CONTACT_NAME = 'Flint Hills Outdoor Co.'
export const BUSINESS_NAME = 'Flint Hills Outdoor Co. LLC'
export const OWNER_NAME = 'Rayden Wright'
export const CITY = 'Emporia, Kansas'
export const LOGO_SRC = '/images/flint-hills-outdoor-logo.png'
export const LOGO_ALT = 'Flint Hills Outdoor Co. lawn care in Emporia, Kansas'

export const phoneHref = `tel:${PHONE_TEL}`
export const textHref = `sms:${PHONE_TEL}`

export { ADDITIONAL_NEARBY, AREAS, getArea, getOtherAreas } from './data/areas.js'
export {
  SERVICES,
  getRelatedServices,
  getService,
} from './data/services.js'

export const TRUST_POINTS = [
  {
    title: 'Locally owned',
    copy: 'Owned and operated by Rayden Wright in Emporia—not a call center.',
  },
  {
    title: 'Residential & commercial',
    copy: 'Homes and local businesses in the service area can request the same outdoor care.',
  },
  {
    title: 'Year-round service',
    copy: 'Mowing in season, cleanup when the yard needs it, snow on walks and drives in winter.',
  },
  {
    title: 'Reliable communication',
    copy: 'Call, text, or send the estimate form. You hear back from the person doing the work.',
  },
]

export const REASONS = [
  {
    title: 'You deal directly with the owner',
    copy: 'No call center or runaround. When you contact Flint Hills Outdoor Co., you’re dealing directly with the person responsible for the work.',
  },
  {
    title: 'Straightforward estimates',
    copy: 'Tell us what you need and we’ll give you a clear estimate before the work begins.',
  },
  {
    title: 'Local service',
    copy: 'Based in Emporia, Kansas and serving homes and properties throughout the surrounding area.',
  },
  {
    title: 'One call for the yard',
    copy: 'From regular mowing to seasonal cleanup and snow removal, Flint Hills Outdoor Co. can help throughout the year.',
  },
]

export const SEASONS = [
  {
    name: 'Spring',
    copy: 'Yard cleanup and the first stretch of recurring mowing once the grass takes off.',
    links: [
      { slug: 'yard-cleanup', label: 'Yard cleanup' },
      { slug: 'lawn-mowing', label: 'Lawn mowing' },
    ],
  },
  {
    name: 'Summer',
    copy: 'Weekly or biweekly mowing, trimming, and edging so the property stays ahead of the heat and growth.',
    links: [{ slug: 'lawn-mowing', label: 'Lawn mowing' }],
  },
  {
    name: 'Fall',
    copy: 'Leaf removal and a seasonal reset before the yard sits under wet cover all winter.',
    links: [
      { slug: 'leaf-removal', label: 'Leaf removal' },
      { slug: 'seasonal-cleanup', label: 'Seasonal cleanup' },
    ],
  },
  {
    name: 'Winter',
    copy: 'Sidewalks and driveways cleared after snow so the property stays usable.',
    links: [{ slug: 'snow-removal', label: 'Snow removal' }],
  },
]

export const HOME_FAQS = [
  {
    q: 'What parts of Kansas do you serve?',
    a: 'Flint Hills Outdoor Co. is based in Emporia and serves Americus, Olpe, Hartford, Neosho Rapids, and Reading. Nearby communities such as Madison, Lebo, and Allen are welcome to request an estimate.',
  },
  {
    q: 'Do you offer recurring lawn mowing?',
    a: 'Yes. Recurring mowing is the main service, including trimming, edging, and grass clipping cleanup. Weekly or biweekly schedules can be discussed when you request an estimate.',
  },
  {
    q: 'How do I get an estimate?',
    a: 'Submit the estimate form on this site, or call or text 620-779-5234. You can also email service@flinthillsoutdoorco.com. The form goes directly to Flint Hills Outdoor Co.',
  },
  {
    q: 'Do you work on homes and local businesses?',
    a: 'Yes. Residential properties are the core of the work, and local businesses in the service area can request the same outdoor care.',
  },
  {
    q: 'What if I only need help once?',
    a: 'One-time visits are available—cleanup, leaf removal, seasonal work, or a single mow. Recurring service is optional, not required.',
  },
]
