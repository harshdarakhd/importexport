import React from 'react'

export default function About(){
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">About Import Exports</h2>
          <p className="mt-4 text-gray-700">With 10+ years in sourcing and exporting agricultural commodities, we focus on traceability, certifications, and long-term partnerships.</p>
          <ul className="mt-4 list-disc ml-6 text-gray-700">
            <li>Global logistics & cold chain partners</li>
            <li>FSSAI / Organic / ISO certified suppliers</li>
            <li>Custom packaging & private labeling</li>
          </ul>
        </div>
        <div>
          <img src="/assets/about.jpg" alt="about" className="rounded shadow" />
        </div>
      </div>
    </section>
  )
}