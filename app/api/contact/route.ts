import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Connect to database
    const { db } = await connectToDatabase()
    
    // Save contact form submission
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
      status: 'new'
    })

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      id: result.insertedId
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
