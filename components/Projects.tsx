const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Scalable platform handling 100K+ users with real-time inventory and payment processing.',
      tech: ['React', 'Node.js', 'AWS'],
      gradient: 'from-blue-500/20 to-purple-500/20',
      category: 'E-commerce Platform',
      stack: 'Next.js + Stripe'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time dashboard for SaaS companies with comprehensive business insights.',
      tech: ['Next.js', 'TypeScript', 'D3.js'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      category: 'Analytics Dashboard',
      stack: 'React + D3.js'
    },
    {
      title: 'API Management Tool',
      description: 'Developer tool for API documentation with automatic generation and testing.',
      tech: ['React', 'Express', 'MongoDB'],
      gradient: 'from-orange-500/20 to-red-500/20',
      category: 'API Management',
      stack: 'Express + MongoDB'
    },
    {
      title: 'Turkana County Public Service Board',
      description: 'Collaborative applicantions management app with real-time updates and notifications.',
      tech: ['NextJs', 'Node.js', 'Twillio'],
      gradient: 'from-pink-500/20 to-fuchsia-500/20',
      category: 'Task Management',
      stack: 'Next.js + Node.js + Twillio'
    },
    {
      title: 'Innobid Procurement',
      description: 'E-procurement system',
      tech: ['NextJs', 'Node.js', 'CrewAI'],
      gradient: 'from-pink-500/20 to-fuchsia-500/20',
      category: 'Task Management',
      stack: 'Next.js + Node.js + CrewAI'
    },
    {
      title: 'Biashara Pro',
      description: 'AutoBooks AI',
      tech: ['NextJs', 'Node.js', 'FastAPI'],
      gradient: 'from-pink-500/20 to-fuchsia-500/20',
      category: 'Business Automation',
      stack: 'Next.js + Node.js + FastApi'
    }
  ]

  return (
    <section id="work" className="py-20 border-t border-vercel-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-vercel-card border border-vercel-border rounded-xl overflow-hidden hover:border-vercel-accent transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-vercel-bg/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-vercel-text">{project.category}</div>
                      <div className="text-sm font-medium">{project.stack}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-vercel-text text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-vercel-bg text-xs rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects