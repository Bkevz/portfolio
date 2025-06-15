'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-vercel-border transition-all duration-300 ${
      isScrolled ? 'bg-vercel-bg/90 backdrop-blur-md' : 'bg-vercel-bg/80 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-neutral-900 rounded-full"></div>
          <span className="font-semibold text-sm">Amoni Kevin</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('work')} 
            className="text-vercel-text hover:text-white transition-colors text-sm"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-vercel-text hover:text-white transition-colors text-sm"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-vercel-text hover:text-white transition-colors text-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation