import { Helmet } from 'react-helmet-async'
import { absoluteUrl, logoUrl } from '../data/seo.js'
import { CONTACT_NAME } from '../site.js'

export default function Seo({
  title,
  description,
  path = '/',
  jsonLd,
  noIndex = false,
}) {
  const url = absoluteUrl(path)
  const image = logoUrl()
  const json = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={url} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {json.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
