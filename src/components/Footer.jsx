import { Link } from 'react-router-dom'
import {
  ADDITIONAL_NEARBY,
  AREAS,
  BUSINESS_NAME,
  CITY,
  OWNER_NAME,
  SERVICES,
} from '../site.js'
import BrandLogo from './BrandLogo.jsx'
import ContactDetails from './ContactDetails.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="footer-logo-link" to="/" aria-label="Flint Hills Outdoor Co. home">
            <BrandLogo className="footer-logo" />
          </Link>
          <p>
            Locally owned and operated by {OWNER_NAME} in {CITY}. Year-round
            outdoor property care for homes and local businesses.
          </p>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Service areas</h2>
          <ul>
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/service-areas/${area.slug}`}>
                  {area.name}, {area.state}
                </Link>
              </li>
            ))}
            {ADDITIONAL_NEARBY.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ContactDetails />
          <Link className="btn btn-forest footer-estimate" to="/#estimate">
            Request a Free Estimate
          </Link>
        </div>
      </div>
      <p className="copyright">
        © {year} {BUSINESS_NAME}. All rights reserved.
      </p>
    </footer>
  )
}
