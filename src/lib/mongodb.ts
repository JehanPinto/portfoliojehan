import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB || 'portfolio-jehan'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

interface MongoConnection {
  client: MongoClient
  db: Db
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoConnection: MongoConnection | undefined
}

let cachedConnection: MongoConnection

export async function connectToDatabase(): Promise<MongoConnection> {
  if (cachedConnection) {
    return cachedConnection
  }

  if (global._mongoConnection) {
    cachedConnection = global._mongoConnection
    return cachedConnection
  }

  try {
    const client = new MongoClient(MONGODB_URI as string)
    await client.connect()
    
    const db = client.db(MONGODB_DB)
    
    const connection = { client, db }
    
    global._mongoConnection = connection
    cachedConnection = connection
    
    return connection
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw error
  }
}

export async function disconnectFromDatabase(): Promise<void> {
  if (cachedConnection) {
    await cachedConnection.client.close()
    cachedConnection = null as any
    global._mongoConnection = undefined
  }
}
