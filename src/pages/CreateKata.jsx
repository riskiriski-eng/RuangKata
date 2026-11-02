import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreateKata() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [visibility, setVisibility] = useState('public')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const searchSpotify = async (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    try {
      const { data } = await axios.get('http://localhost:3000/api/spotify/search', {
        params: { q: query }
      })
      setSearchResults(data.tracks || [])
    } catch (error) {
      console.error('Search error:', error)
    }
  }

  const handlePublish = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem('token')
      await axios.post(
        'http://localhost:3000/api/kata',
        {
          title,
          content,
          spotify_track_id: selectedTrack?.id,
          visibility
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      navigate('/dashboard')
    } catch (error) {
      console.error('Publish error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">🎵 Buat Kata-kata Baru</h1>
        
        <form onSubmit={handlePublish} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Judul</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul kata-kata mu..."
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Konten</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tulis kata-kata indah mu..."
              rows={8}
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Pilih Musik (Spotify)</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                searchSpotify(e.target.value)
              }}
              placeholder="Search musik..."
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent mb-3"
            />
            
            {searchResults.length > 0 && (
              <div className="border-2 border-secondary rounded-lg p-3 max-h-48 overflow-y-auto space-y-2">
                {searchResults.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => {
                      setSelectedTrack(track)
                      setSearchResults([])
                      setSearchQuery('')
                    }}
                    className="p-3 bg-slate-50 rounded cursor-pointer hover:bg-slate-100"
                  >
                    <p className="font-semibold">{track.name}</p>
                    <p className="text-sm text-slate-500">{track.artist}</p>
                  </div>
                ))}
              </div>
            )}

            {selectedTrack && (
              <div className="mt-3 p-3 bg-green-50 rounded border-2 border-green-200">
                <p className="font-semibold text-green-900">✓ Selected: {selectedTrack.name}</p>
                <p className="text-sm text-green-700">{selectedTrack.artist}</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Visibility</label>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-pink-600 disabled:opacity-50"
          >
            {loading ? 'Publishing...' : 'Publikasikan'}
          </button>
        </form>
      </div>
    </div>
  )
}
