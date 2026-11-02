const express = require('express')
const axios = require('axios')
const router = express.Router()

// Search Spotify tracks
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query

    if (!q) {
      return res.status(400).json({ error: 'Query required' })
    }

    // TODO: Get Spotify token from Spotify API
    // For now, return mock data
    res.json({
      tracks: [
        { id: '1', name: 'Song Name', artist: 'Artist', preview_url: 'https://...' }
      ]
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
