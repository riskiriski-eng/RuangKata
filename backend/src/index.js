require('dotenv').config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const kataRoutes = require('./routes/kata')
const spotifyRoutes = require('./routes/spotify')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/kata', kataRoutes)
app.use('/api/spotify', spotifyRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 RuangKata backend running on port ${PORT}`)
})
