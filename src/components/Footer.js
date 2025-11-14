import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-2xl font-bold text-green-300">Import Exports</div>
          <p className="text-sm text-gray-400 mt-3">Connecting producers and buyers globally.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow us</h4>
          <div className="mt-2 flex gap-3">
            <a aria-label="linkedin" href="#">LinkedIn</a>
            <a aria-label="instagram" href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Import Exports — All rights reserved.</div>
    </footer>
  )
}