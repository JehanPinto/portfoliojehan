import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be longer than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be longer than 500 characters']
  },
  technologies: [{
    type: String,
    required: true
  }],
  imageUrl: {
    type: String,
    default: null
  },
  demoUrl: {
    type: String,
    default: null
  },
  githubUrl: {
    type: String,
    default: null
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

ProjectSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
