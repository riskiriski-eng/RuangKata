const express = require('express')
const { supabase } = require('../config/supabase')
const { authMiddleware } = require('../middleware/auth')
const router = express.Router()

// Create kata-kata
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content, spotify_track_id, visibility } = req.body
    const userId = req.user.id

    const { data, error } = await supabase
      .from('kata_kata')
      .insert([{ user_id: userId, title, content, spotify_track_id, visibility }])
      .select()

    if (error) throw error
    res.json(data[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get all public kata-kata
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('kata_kata')
      .select('*,users(username,avatar_url)')
      .eq('visibility', 'public')
      .order('created_at', { ascending: false })

    if (error) throw error
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single kata
router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('kata_kata')
      .select('*,users(username,avatar_url)')
      .eq('id', req.params.id)
      .single()

    if (error) throw error
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update kata
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, content, visibility } = req.body
    const userId = req.user.id

    const { data, error } = await supabase
      .from('kata_kata')
      .update({ title, content, visibility })
      .eq('id', req.params.id)
      .eq('user_id', userId)
      .select()

    if (error) throw error
    res.json(data[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete kata
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id

    const { error } = await supabase
      .from('kata_kata')
      .delete()
      .eq('id', req.params.id)
      .eq('user_id', userId)

    if (error) throw error
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
