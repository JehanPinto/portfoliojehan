export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Hello, I'm Jehan!</h2>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating scalable, user-friendly applications that solve real-world problems.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-blue-400">Frontend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-blue-400">Backend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-blue-400">Full-Stack Developer</h4>
                  <p className="text-gray-400">2022 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Developing modern web applications using React, Next.js, and TypeScript.
                    Working with databases like MongoDB and implementing RESTful APIs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-blue-400">Frontend Developer</h4>
                  <p className="text-gray-400">2021 - 2022</p>
                  <p className="text-gray-300 mt-2">
                    Focused on creating responsive and interactive user interfaces 
                    using React and modern CSS frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
