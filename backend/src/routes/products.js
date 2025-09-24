import express from 'express'
const router = express.Router()
import { query } from '../db.js'

// GET all products
router.get('/', async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT id, name, description, price, image_filename FROM products ORDER BY id'
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'internal' })
  }
})

// GET product by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const { rows } = await query('SELECT * FROM products WHERE id=$1', [id])
    if (!rows[0]) return res.status(404).json({ error: 'not found' })
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'internal' })
  }
})

export default router
