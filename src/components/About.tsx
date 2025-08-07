'use client'

import content from '@/lib/content'

export default function About() {
  const { about } = content

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F0F4F8] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3F4E4F] to-[#A5C8D6] mx-auto rounded-full"></div>
          <p className="text-[#3F4E4F]/80 mt-6 max-w-2xl mx-auto font-body">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="relative">
              <p className="text-lg text-[#3F4E4F]/90 leading-relaxed font-body">
                {about.description}
              </p>
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 text-4xl text-[#A5C8D6]/30 font-serif">"</div>
            </div>
            
            <div className="space-y-6">
              <div className="relative bg-gradient-to-r from-[#F0F4F8] to-[#D9E4E0]/50 rounded-xl p-6 border-l-4 border-[#A5C8D6] shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#1B2631] mb-3 flex items-center">
                  <span className="w-2 h-2 bg-[#A5C8D6] rounded-full mr-3"></span>
                  Current Focus
                </h3>
                <p className="text-[#3F4E4F] font-body leading-relaxed"> <span className="text-[#1B2631] font-extrabold" >Full-stack development </span> (Next.js, Tailwind, MongoDB), system design, and DevOps basics</p>
              </div>
              
              <div className="relative bg-gradient-to-r from-[#D9E4E0]/50 to-[#F0F4F8] rounded-xl p-6 border-l-4 border-[#3F4E4F] shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#1B2631] mb-3 flex items-center">
                  <span className="w-2 h-2 bg-[#3F4E4F] rounded-full mr-3"></span>
                  My Goal
                </h3>                <p className="text-[#3F4E4F] font-body leading-relaxed"> {about.goal}</p>

              </div>
            </div>

            {/* Skills preview teaser */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#D9E4E0] shadow-sm">
              <h4 className="text-lg font-semibold text-[#1B2631] mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                What I Bring to the Table
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#A5C8D6]/20 text-[#3F4E4F] rounded-full text-sm font-medium">Leadership</span>
                <span className="px-3 py-1 bg-[#D9E4E0]/30 text-[#3F4E4F] rounded-full text-sm font-medium">Full-Stack Dev</span>
                <span className="px-3 py-1 bg-[#F0F4F8] text-[#3F4E4F] rounded-full text-sm font-medium border border-[#A5C8D6]/20">Problem Solving</span>
                <span className="px-3 py-1 bg-[#A5C8D6]/20 text-[#3F4E4F] rounded-full text-sm font-medium">Team Player</span>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-80 bg-gradient-to-br from-[#F0F4F8] via-[#D9E4E0] to-[#A5C8D6] rounded-3xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-500 border border-white/50">
                <div className="text-center space-y-6 p-8">
                  <div className="text-6xl mb-4 animate-pulse">🚀</div>
                  <h3 className="text-2xl font-bold text-[#1B2631] mb-2">Building the Future</h3>
                  <p className="text-[#3F4E4F] px-4 font-body leading-relaxed">
                    One line of code at a time
                  </p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-[#1B2631] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#3F4E4F] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#A5C8D6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#A5C8D6] to-[#D9E4E0] rounded-full flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#D9E4E0] to-[#F0F4F8] rounded-full flex items-center justify-center shadow-lg transform hover:-rotate-12 transition-transform duration-300">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-[#F0F4F8] to-[#A5C8D6] rounded-full flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300">
                <span className="text-lg">✨</span>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 w-80 h-80 rounded-3xl bg-gradient-to-br from-[#A5C8D6]/10 to-[#D9E4E0]/10 blur-2xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-[#D9E4E0]/50">
            <div className="w-3 h-3 bg-[#A5C8D6] rounded-full animate-pulse"></div>
            <span className="text-[#3F4E4F] font-medium">Ready to collaborate</span>
            <div className="w-3 h-3 bg-[#D9E4E0] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}