import React from 'react'

export default function ProductCard({p}){
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{p.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <a href={`#contact`} className="text-sm px-3 py-2 border rounded">Enquire</a>
          <a href={`/products/${p.id}`} className="text-sm text-green-700">View details →</a>
        </div>
      </div>
    </div>
  )
}