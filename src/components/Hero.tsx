"use client";

import content from "@/lib/content";
import Image from "next/image";

export default function Hero() {
  const { hero } = content;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F0F4F8] via-[#D9E4E0] to-[#A5C8D6] px-4 py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A5C8D6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D9E4E0]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Name with enhanced styling */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-[#1B2631] leading-tight tracking-tight">
              {hero.name}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-[#3F4E4F] to-[#A5C8D6] mx-auto rounded-full"></div>
          </div>

          <h2 className="text-xl md:text-3xl font-medium text-[#3F4E4F] font-body tracking-wide">
            {hero.title}
          </h2>

          <p className="text-lg md:text-xl text-[#3F4E4F]/90 max-w-3xl mx-auto font-body leading-relaxed px-4">
            {hero.tagline}
          </p>

          {/* Hero Image with enhanced styling */}
          <div className="flex justify-center py-12">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-[#A5C8D6] to-[#D9E4E0] blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A5C8D6]/20 to-[#D9E4E0]/20 z-10"></div>
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  className="object-cover filter brightness-110 contrast-105"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero-placeholder.svg";
                  }}
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons with new design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-10 py-4 bg-gradient-to-r from-[#1B2631] to-[#3F4E4F] text-white font-semibold rounded-full hover:from-[#3F4E4F] hover:to-[#1B2631] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl min-w-[200px]"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-4 border-2 border-[#3F4E4F] text-[#3F4E4F] font-semibold rounded-full hover:bg-[#3F4E4F] hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[200px]"
            >
              Get In Touch
            </button>
          </div>

          {/* Social links preview */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href={content.contact.github}
              className="text-[#3F4E4F]/70 hover:text-[#1B2631] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={content.contact.linkedin}
              className="text-[#3F4E4F]/70 hover:text-[#1B2631] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={content.contact.youtube}
              className="text-[#3F4E4F]/70 hover:text-[#1B2631] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#3F4E4F]/50 rounded-full flex justify-center bg-white/80 backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-[#1B2631] to-[#3F4E4F] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
