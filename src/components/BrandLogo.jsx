import { LOGO_ALT, LOGO_SRC } from '../site.js'

export default function BrandLogo({ className, eager = false }) {
  return (
    <img
      className={className}
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width="2172"
      height="724"
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
    />
  )
}
