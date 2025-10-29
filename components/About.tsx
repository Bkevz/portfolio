const About = () => {
  const technologies = [
    { name: 'React', icon: 'R', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', icon: '▲', gradient: 'from-black to-gray-800' },
    { name: 'TypeScript', icon: 'TS', gradient: 'from-blue-600 to-blue-800' },
    { name: 'FastAPI', icon: 'FA', gradient: 'from-teal-500 to-green-600' },
    { name: 'Python', icon: 'Py', gradient: 'from-yellow-400 to-blue-500' },
    { name: 'PostgreSQL', icon: 'PG', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Prisma', icon: 'PR', gradient: 'from-gray-700 to-gray-900' },
    { name: 'Redis', icon: 'RD', gradient: 'from-red-500 to-red-700' },
    { name: 'Docker', icon: 'D', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Nginx', icon: 'N', gradient: 'from-green-600 to-green-800' },
    { name: 'Prometheus', icon: 'P', gradient: 'from-orange-500 to-red-600' },
    { name: 'Grafana', icon: 'G', gradient: 'from-orange-400 to-red-500' },
  ]

  return (
    <section id="about" className="py-20 border-t border-vercel-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-vercel-text leading-relaxed">
              <p>
                I'm a full-stack developer and entrepreneur with over 5 years of experience building production-ready applications that scale.
              </p>
              <p>
                Co-founder of multiple tech startups including Agiza (restaurant management), Shop4me (e-commerce delivery), and MKiba (financial services). I specialize in React/Typescript, Next.js, FastAPI, and building robust systems with modern DevOps practices.
              </p>
              <p>
                Passionate about creating solutions that solve real-world problems using cutting-edge technologies and AI integration.
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