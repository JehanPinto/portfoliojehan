export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: string
  name: string
  email: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: Date
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: Date
  endDate?: Date
  current: boolean
  description: string
  technologies: string[]
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  level: 1 | 2 | 3 | 4 | 5
  icon?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
