import React from 'react'

function Logo(){
  return <div className="text-2xl font-bold text-green-700">Import Exports</div>
}

export default function Navbar(){
  const [open, setOpen] = React.useState(false)
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-green-700">Home</a>
          <a href="#products" className="hover:text-green-700">Products</a>
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
          <a href="/catalog.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-700 text-white rounded">Catalog</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {open && (
            <div className="absolute right-4 mt-2 w-48 bg-white shadow-lg rounded p-4">
              <a href="#home" className="block py-2">Home</a>
              <a href="#products" className="block py-2">Products</a>
              <a href="#about" className="block py-2">About</a>
              <a href="#contact" className="block py-2">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}