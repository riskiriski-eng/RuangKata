const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { supabase } = require('../config/supabase')
const router = express.Router()

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { email, password, username } = req.body

    if (!email || !password || !username) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password_hash: hashedPassword, username }])
      .select()

    if (error) throw error

    const token = jwt.sign({ id: data[0].id, email }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({ token, user: data[0] })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)

    if (error || !users[0]) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const passwordMatch = await bcrypt.compare(password, users[0].password_hash)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: users[0].id, email }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({ token, user: users[0] })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
