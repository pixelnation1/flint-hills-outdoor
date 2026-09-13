import {
  CONTACT_NAME,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  phoneHref,
  SERVICE_AREA,
  WEBSITE_DISPLAY,
  WEBSITE_HREF,
} from '../site.js'

export default function ContactDetails() {
  return (
    <ul className="contact-details">
      <li>{CONTACT_NAME}</li>
      <li>
        Phone:{' '}
        <a href={phoneHref}>{PHONE_DISPLAY}</a>
      </li>
      <li>
        Email:{' '}
        <a href={EMAIL_HREF}>{EMAIL}</a>
      </li>
      <li>
        Website:{' '}
        <a href={WEBSITE_HREF}>{WEBSITE_DISPLAY}</a>
      </li>
      <li>Service Area: {SERVICE_AREA}</li>
    </ul>
  )
}
