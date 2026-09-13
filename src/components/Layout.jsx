import { Outlet } from 'react-router-dom'
import {
  localBusinessJsonLd,
  organizationJsonLd,
} from '../data/seo.js'
import ContactBar from './ContactBar.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import JsonLd from './JsonLd.jsx'
import ScrollManager from './ScrollManager.jsx'

export default function Layout() {
  return (
    <div className="page" id="top">
      <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
      <a className="skip-link" href="/#estimate">
        Skip to estimate form
      </a>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ContactBar />
    </div>
  )
}
