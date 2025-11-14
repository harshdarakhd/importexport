import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="w-full border rounded px-3 py-2 h-28" placeholder="How can we help?"></textarea>
          </div>
          <button type="button" className="px-5 py-2 bg-green-700 text-white rounded">Send Message</button>
        </form>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Head Office</h3>
            <p className="text-sm text-gray-600">Pune, Maharashtra, India</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-gray-600">contact@importexports.example</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-gray-600">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  )
}