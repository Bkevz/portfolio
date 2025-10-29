const About = () => {
  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', gradient: 'from-black to-gray-800' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', gradient: 'from-blue-600 to-blue-800' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', gradient: 'from-teal-500 to-green-600' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', gradient: 'from-yellow-400 to-blue-500' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', gradient: 'from-gray-700 to-gray-900' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', gradient: 'from-red-500 to-red-700' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', gradient: 'from-green-600 to-green-800' },
    { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', gradient: 'from-orange-500 to-red-600' },
    { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', gradient: 'from-orange-400 to-red-500' },
  ]

  return (
    <section id="about" className="py-20 border-t border-vercel-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-vercel-text leading-relaxed">
              <p>
                I'm Amoni Kevin, a builder at heart — not just of software, but of ideas that refuse to die quietly. I've co-founded and built systems that started as conversations and became products changing how people live and work.
              </p>
              <p>
                I built <span className="text-white font-medium">Agiza</span>, helping restaurants kill the wait-time chaos with QR-based ordering and real-time tracking. Then came <span className="text-white font-medium">Shop4Me</span>, bringing the market to people's phones; <span className="text-white font-medium">Innobid</span>, where AI makes procurement less political and more intelligent; and <span className="text-white font-medium">MKiba</span>, a financial platform that sees every transaction through the lens of transparency and trust.
              </p>
              <p>
                What ties them together isn't the stack — though I breathe FastAPI, React, TypeScript, PostgreSQL, Docker, Prometheus, Grafana — it's a belief: <span className="text-vercel-accent font-medium">you don't need money to build, you need conviction, clarity, and the courage to start.</span>
              </p>
              <p>
                I build with founders who have that fire — people obsessed with solving something real. For me, code is just the instrument; impact is the song.
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
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform p-2`}>
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
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