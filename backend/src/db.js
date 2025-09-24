import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export async function query(text, params) {
  return pool.query(text, params)
}

export default pool
