import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <ProductsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}