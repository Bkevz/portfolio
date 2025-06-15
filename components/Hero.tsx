'use client'

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vercel-accent/5 to-purple-500/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-vercel-text bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl text-vercel-text max-w-xl leading-relaxed">
              I build fast, scalable web applications with modern technologies. Currently based in Nairobi, Kenya.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
              <button 
                onClick={scrollToWork}
                className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              <button 
                onClick={scrollToContact}
                className="border border-vercel-border px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-vercel-card border border-vercel-border rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mt-8 space-y-3 font-mono text-sm">
                <div className="text-purple-400">const developer = </div>
                <div className="ml-4 text-vercel-text">name: <span className="text-green-400">'Amoni Kevin'</span>,</div>
                <div className="ml-4 text-vercel-text">skills: [<span className="text-blue-400">'React', 'Node.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Stripe', 'Figma'</span>],</div>
                <div className="ml-4 text-vercel-text">experience: <span className="text-orange-400">5</span>,</div>
                <div className="text-purple-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero