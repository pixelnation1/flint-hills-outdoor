import { Link } from 'react-router-dom'
import { phoneHref, textHref } from '../site.js'

export default function ContactBar() {
  return (
    <div className="contact-bar" role="navigation" aria-label="Quick contact">
      <a href={phoneHref}>Call</a>
      <a href={textHref}>Text</a>
      <Link className="contact-bar-primary" to="/#estimate">
        Estimate
      </Link>
    </div>
  )
}
