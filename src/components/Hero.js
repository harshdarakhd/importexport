import React from 'react'

export default function Hero(){
  return (
    <header id="home" className="bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Trusted Import & Export Partner</h1>
          <p className="mt-4 text-gray-700">We source and deliver premium agricultural products worldwide with focus on quality, compliance, and timely delivery.</p>
          <div className="mt-6 flex gap-4">
            <a href="#products" className="px-6 py-3 bg-green-700 text-white rounded">Our Products</a>
            <a href="#contact" className="px-6 py-3 border border-green-700 rounded text-green-700">Get a Quote</a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/assets/hero-placeholder.jpg" alt="Export goods" className="w-full rounded shadow-md object-cover" />
        </div>
      </div>
    </header>
  )
}