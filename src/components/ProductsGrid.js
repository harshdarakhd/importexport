import React from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
  { id: 1, name: 'Green Peas', desc: 'Premium frozen green peas - bulk packaging', img: '/assets/peas.jpg' },
  { id: 2, name: 'Lentils', desc: 'High-quality lentils for export', img: '/assets/lentils.jpg' },
  { id: 3, name: 'Spices Mix', desc: 'Custom spice blends for your market', img: '/assets/spices.jpg' },
]

export default function ProductsGrid(){
  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <p className="text-gray-600 mb-6">A curated selection of our most demanded items. We also do private-label and custom packing on request.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}