const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    imageUrl: "/placeholder-project.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    imageUrl: "/placeholder-project.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities using external weather APIs.",
    technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
    imageUrl: "/placeholder-project.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    featured: false
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">My Projects</h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different aspects 
            of my development skills and experience with various technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 text-sm rounded-md transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
