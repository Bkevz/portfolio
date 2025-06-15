const About = () => {
  const technologies = [
    { name: 'React', icon: 'R', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: 'N', gradient: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', icon: 'TS', gradient: 'from-blue-600 to-blue-800' },
    { name: 'Amazon Web Services', icon: 'AWS', gradient: 'from-orange-500 to-red-500' },
    { name: 'Next.js', icon: '▲', gradient: 'from-black to-gray-800' },
    { name: 'Python', icon: 'P', gradient: 'from-purple-500 to-pink-500' },
    { name: 'PostgreSQL', icon: 'PG', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Docker', icon: 'D', gradient: 'from-cyan-500 to-blue-500' },
  ]

  return (
    <section id="about" className="py-20 border-t border-vercel-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-vercel-text leading-relaxed">
              <p>
                I'm a full-stack developer with over 5 years of experience building web applications that scale.
              </p>
              <p>
                I specialize in React, Node.js, and cloud architecture, working with startups and established companies.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-xs">{tech.icon}</span>
                  </div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About