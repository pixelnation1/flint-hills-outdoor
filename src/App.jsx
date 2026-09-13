import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AreaPage from './pages/AreaPage.jsx'
import AreasIndexPage from './pages/AreasIndexPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ServicesIndexPage from './pages/ServicesIndexPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/service-areas" element={<AreasIndexPage />} />
        <Route path="/service-areas/:slug" element={<AreaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
