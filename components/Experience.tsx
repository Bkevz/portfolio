const Experience = () => {
  const experiences = [
    {
      title: 'Co-Founder & Lead Developer',
      company: 'Agiza, Shop4me, Innobid & MKiba',
      period: '2022 — Present',
      description: 'Building and scaling multiple SaaS platforms: restaurant management (Agiza), e-commerce delivery (Shop4me), AI procurement (Innobid), and financial services (MKiba). Leading full-stack development with Next.js, FastAPI, and implementing DevOps with Docker, Prometheus, and Grafana.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Tech Ventures',
      period: '2020 — 2022',
      description: 'Developed scalable web applications using React, TypeScript, and Python. Built microservices architecture and implemented CI/CD pipelines. Worked on e-commerce platforms handling high-volume transactions.'
    }
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '4', label: 'Startups Co-Founded' },
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime Maintained' }
  ]

  return (
    <section className="py-20 border-t border-vercel-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-vercel-card border border-vercel-border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <div className="text-vercel-accent">{exp.company}</div>
                    </div>
                    <div className="text-sm text-vercel-text">{exp.period}</div>
                  </div>
                  <p className="text-vercel-text text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-vercel-card border border-vercel-border rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-vercel-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-vercel-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience