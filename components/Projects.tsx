const Projects = () => {
  const projects = [
    {
      title: 'Agiza',
      description: 'A comprehensive restaurant management system with real-time order processing, inventory tracking, and analytics.',
      tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL'],
      gradient: 'from-blue-500/20 to-purple-500/20',
      category: 'Restaurant Management',
      stack: 'React + FastAPI + PostgreSQL',
      link: 'https://agiza-blond.vercel.app/'
    },
    {
      title: 'Shop4me',
      description: 'Shopping and delivery application for users who prefer not to visit markets. Features real-time order tracking and delivery management.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      category: 'E-commerce & Delivery',
      stack: 'Next.js Fullstack + Prisma',
      link: 'https://shop4me-lilac.vercel.app/'
    },
    {
      title: 'Innobid',
      description: 'AI-powered procurement streamlining platform that automates and optimizes the procurement process with intelligent insights.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AI'],
      gradient: 'from-orange-500/20 to-red-500/20',
      category: 'AI Procurement',
      stack: 'Next.js Fullstack + AI',
      link: 'https://innobid.net/'
    },
    {
      title: 'MKiba',
      description: 'Comprehensive financial services platform with integrated monitoring and observability. Features real-time metrics, visualization dashboards, and complete financial management.',
      tech: ['FastAPI', 'Next.js', 'TypeScript', 'SQLAlchemy', 'Prometheus', 'Grafana', 'Docker'],
      gradient: 'from-pink-500/20 to-fuchsia-500/20',
      category: 'Financial Services',
      stack: 'FastAPI + Next.js + Prometheus',
      link: '#'
    }
  ]

  return (
    <section id="work" className="py-20 border-t border-vercel-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target={project.link !== '#' ? '_blank' : '_self'}
                rel={project.link !== '#' ? 'noopener noreferrer' : ''}
                className="group bg-vercel-card border border-vercel-border rounded-xl overflow-hidden hover:border-vercel-accent transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
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
                  <h3 className="text-lg font-semibold group-hover:text-vercel-accent transition-colors">{project.title}</h3>
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects