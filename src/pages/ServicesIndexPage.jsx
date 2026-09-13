import { Link } from 'react-router-dom'
import { breadcrumbJsonLd } from '../data/seo.js'
import { SERVICES } from '../site.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { SERVICE_ICONS } from '../components/Icons.jsx'
import Seo from '../components/Seo.jsx'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]

export default function ServicesIndexPage() {
  return (
    <>
      <Seo
        title="Outdoor Services in Emporia, KS | Flint Hills Outdoor Co."
        description="Lawn mowing, leaf removal, snow removal, property maintenance, yard cleanup, and seasonal cleanup from Flint Hills Outdoor Co. in Emporia, Kansas."
        path="/services"
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <header className="page-hero">
        <div className="section-inner">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">What we do</p>
          <h1>Outdoor services in Emporia and nearby towns</h1>
          <p className="page-lead">
            Flint Hills Outdoor Co. keeps the work list honest: lawn mowing,
            cleanup, and snow on walks and drives. Open a service page for
            what is included, who it fits, and how to request an estimate.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="section-inner">
          <ul className="service-grid">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <li
                  className={
                    service.featured
                      ? 'service-card service-card-primary'
                      : 'service-card'
                  }
                  key={service.slug}
                >
                  {Icon ? (
                    <span className="service-icon">
                      <Icon />
                    </span>
                  ) : null}
                  {service.kicker ? (
                    <p className="service-kicker">{service.kicker}</p>
                  ) : null}
                  <h2>{service.title}</h2>
                  <p>{service.cardCopy}</p>
                  <Link className="text-link" to={`/services/${service.slug}`}>
                    About {service.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
