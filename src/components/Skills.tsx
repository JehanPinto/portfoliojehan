'use client'

import content from '@/lib/content'

export default function Skills() {
  const { skills } = content

  const skillCategories = [
    { 
      title: 'Frontend', 
      skills: skills.frontend, 
      icon: '🎨', 
      color: 'from-[#A5C8D6]/30 to-[#A5C8D6]/10',
      border: 'border-[#A5C8D6]',
      iconBg: 'bg-[#A5C8D6]/20'
    },
    { 
      title: 'Backend', 
      skills: skills.backend, 
      icon: '⚙️', 
      color: 'from-[#D9E4E0]/40 to-[#D9E4E0]/20',
      border: 'border-[#D9E4E0]',
      iconBg: 'bg-[#D9E4E0]/30'
    },
    { 
      title: 'Tools', 
      skills: skills.tools, 
      icon: '🛠️', 
      // Changed color to a different gradient
      color: 'from-[#A5C8D6]/10 to-[#F0F4F8]/80',
      border: 'border-[#A5C8D6]/30',
      iconBg: 'bg-[#A5C8D6]/10'
    },
    { 
      title: 'Soft Skills', 
      skills: skills.soft, 
      icon: '🤝', 
      color: 'from-[#3F4E4F]/10 to-[#3F4E4F]/5',
      border: 'border-[#3F4E4F]/20',
      iconBg: 'bg-[#3F4E4F]/10'
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#F0F4F8]/50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3F4E4F] to-[#A5C8D6] mx-auto rounded-full mb-6"></div>
          <p className="text-[#3F4E4F]/80 max-w-2xl mx-auto font-body">
            Here's my toolkit for building amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group hover:scale-105 transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 h-full border ${category.border} shadow-sm hover:shadow-xl transition-all duration-300`}>
                {/* Category Header with modified styling to bring title forward */}
                <div className="text-center mb-8 relative">
                  {/* Floating icon with background */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center border border-white shadow-md bg-white group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-12 h-12 ${category.iconBg} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                  </div>
                  
                  {/* Title with z-index to bring it forward */}
                  <h3 className="text-xl font-bold text-[#1B2631] mt-8 group-hover:text-[#3F4E4F] transition-colors duration-300 relative z-10">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with enhanced styling */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium text-[#3F4E4F] border border-white shadow-sm hover:shadow-md hover:bg-white hover:border-[#A5C8D6]/30 transition-all duration-300 flex items-center justify-between group/skill"
                    >
                      <span>{skill}</span>
                      <span className="w-2 h-2 bg-[#A5C8D6] rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#F0F4F8] via-[#D9E4E0]/30 to-[#A5C8D6]/20 rounded-2xl p-8 shadow-sm border border-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#A5C8D6]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-[#D9E4E0]/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#1B2631] mb-4 flex items-center justify-center">
                <span className="w-2 h-2 bg-[#A5C8D6] rounded-full mr-3 animate-pulse"></span>
                Always Learning
                <span className="w-2 h-2 bg-[#A5C8D6] rounded-full ml-3 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </h3>
              
              <p className="text-[#3F4E4F]/80 font-body max-w-2xl mx-auto text-center">
                I'm constantly exploring new technologies and improving my skills. 
                Currently diving deeper into system design, cloud architecture, and AI/ML integration.
              </p>
            </div>
            
            {/* Learning Path Visualization */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 items-center">
                  <span className="w-3 h-3 bg-[#1B2631] rounded-full"></span>
                  <span className="w-16 h-0.5 bg-gradient-to-r from-[#1B2631] to-[#3F4E4F]"></span>
                </div>
                <div className="flex space-x-1 items-center">
                  <span className="w-3 h-3 bg-[#3F4E4F] rounded-full"></span>
                  <span className="w-16 h-0.5 bg-gradient-to-r from-[#3F4E4F] to-[#A5C8D6]"></span>
                </div>
                <div className="flex space-x-1 items-center">
                  <span className="w-3 h-3 bg-[#A5C8D6] rounded-full"></span>
                  <span className="w-16 h-0.5 bg-gradient-to-r from-[#A5C8D6] to-[#D9E4E0]"></span>
                </div>
                <div className="flex space-x-1 items-center">
                  <span className="w-3 h-3 bg-[#D9E4E0] rounded-full"></span>
                  <span className="w-16 h-0.5 bg-gradient-to-r from-[#D9E4E0] to-[#F0F4F8]"></span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-[#F0F4F8] rounded-full flex items-center justify-center border border-[#D9E4E0]">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}