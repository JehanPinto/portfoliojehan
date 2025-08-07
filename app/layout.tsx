import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'M Jehan Hirusha Pinto - Full Stack Developer',
  description: 'Full-stack developer passionate about creating impactful digital experiences with Next.js, React, and modern web technologies',
  keywords: ['Jehan Pinto', 'Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'M Jehan Hirusha Pinto' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans bg-background text-dark antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
