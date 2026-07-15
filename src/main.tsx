import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Investors from './pages/Investors'
import Careers from './pages/Careers'
import { Nav, Footer, ScrollTop } from './components/Chrome'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
