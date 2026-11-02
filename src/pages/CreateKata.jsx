import { useState } from 'react'

export default function CreateKata() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedTrack, setSelectedTrack] = useState(null)

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Buat Kata-kata Baru</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Judul</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul kata-kata mu..."
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Konten</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tulis kata-kata indah mu..."
              rows={6}
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Pilih Musik (Spotify)</label>
            <div className="border-2 border-secondary rounded-lg p-4">
              <p className="text-slate-500">Search musik dari Spotify...</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-pink-600"
          >
            Publikasikan
          </button>
        </form>
      </div>
    </div>
  )
}
