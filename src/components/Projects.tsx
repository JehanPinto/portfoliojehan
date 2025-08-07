'use client'

import content from '@/lib/content'
import { useState } from 'react'

export default function Projects() {
  const { projects } = content
  const [activeTab, setActiveTab] = useState('all')

  // Get unique tech categories
  const allTechs = Array.from(new Set(projects.flatMap(project => project.tech)))
  
  // Filter projects by tech if needed
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.tech.includes(activeTab))

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-[#F0F4F8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3F4E4F] to-[#A5C8D6] mx-auto rounded-full mb-6"></div>
          <p className="text-[#3F4E4F]/80 max-w-2xl mx-auto font-body">
            Explore my portfolio of projects that showcase my skills and passion for development.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => setActiveTab('all')} 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'all' 
                ? 'bg-[#1B2631] text-white shadow-md' 
                : 'bg-white text-[#3F4E4F] hover:bg-[#A5C8D6]/20'
            }`}
          >
            All Projects
          </button>
          
          {allTechs.slice(0, 5).map(tech => (
            <button 
              key={tech}
              onClick={() => setActiveTab(tech)} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tech 
                  ? 'bg-[#1B2631] text-white shadow-md' 
                  : 'bg-white text-[#3F4E4F] hover:bg-[#A5C8D6]/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                       transform hover:-translate-y-2 overflow-hidden group relative
                       border border-[#F0F4F8] hover:border-[#A5C8D6]"
            >
              {/* Featured Badge (for first project) */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-30 bg-[#1B2631] text-white px-3 py-1 
                             rounded-full text-xs font-semibold shadow-lg">
                  Featured
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2631]/80 to-transparent z-10"></div>
                
                {/* Project Image */}
                <img 
                  src={`/images/project-${index + 1}.svg`} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `/images/project-placeholder-${(index % 3) + 1}.svg`
                  }}
                />
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#A5C8D6] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#F0F4F8] text-[#3F4E4F] text-sm rounded-full 
                                font-medium hover:bg-[#A5C8D6]/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-[#F0F4F8] text-[#3F4E4F] text-sm rounded-full font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Short Description */}
                <p className="text-[#3F4E4F]/80 mb-6 font-body line-clamp-3">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#1B2631] to-[#3F4E4F] text-white rounded-lg 
                              hover:from-[#3F4E4F] hover:to-[#1B2631] transition-all duration-300 text-center 
                              text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 border-2 border-[#3F4E4F] text-[#3F4E4F] rounded-lg 
                              hover:bg-[#3F4E4F] hover:text-white transition-colors text-center 
                              text-sm font-semibold transform hover:-translate-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                
                {/* Hover overlay with full description (on larger screens) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2631]/95 to-[#1B2631]/80 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                             flex items-center justify-center z-20 p-8 pointer-events-none md:pointer-events-auto
                             translate-y-8 group-hover:translate-y-0">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6 font-body">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3">
                      <a 
                        href={project.demo}
                        className="px-6 py-2 bg-white text-[#1B2631] rounded-full hover:bg-[#A5C8D6] 
                                 transition-colors duration-300 text-sm font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.github}
                        className="px-6 py-2 bg-white/20 text-white backdrop-blur-sm rounded-full 
                                 hover:bg-white/40 transition-colors duration-300 text-sm font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <a 
            href={content.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white border border-[#D9E4E0] rounded-full 
                     text-[#3F4E4F] hover:bg-[#1B2631] hover:text-white transition-colors 
                     duration-300 shadow-md hover:shadow-lg group"
          >
            <span>View More Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}