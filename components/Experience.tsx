const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      period: '2022 — Present',
      description: 'Leading development of scalable web applications. Built microservices architecture reducing load times by 40%.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      period: '2020 — 2021',
      description: 'Developed e-commerce platforms handling millions in transactions with modern JavaScript frameworks.'
    }
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100K+', label: 'Users Served' },
    { value: '24/7', label: 'Uptime Maintained' }
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