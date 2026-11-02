import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {
  const [kataList, setKataList] = useState([])
  const [userKata, setUserKata] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all public kata
        const { data } = await axios.get('http://localhost:3000/api/kata')
        setKataList(data)
        setLoading(false)
      } catch (error) {
        console.error('Fetch error:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-primary text-white p-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold">🎵 RuangKata</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/create')}
            className="bg-accent px-6 py-2 rounded-lg font-semibold hover:bg-pink-600"
          >
            + Buat Kata-kata
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token')
              navigate('/')
            }}
            className="px-6 py-2 rounded-lg border-2 border-white hover:bg-slate-700"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-primary mb-8">🌟 Trending Kata-kata</h2>
        
        {loading ? (
          <p className="text-center text-slate-500">Loading...</p>
        ) : kataList.length === 0 ? (
          <p className="text-center text-slate-500">Belum ada kata-kata. Mulai buat!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kataList.map((kata) => (
              <div key={kata.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-primary mb-2">{kata.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{kata.content}</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>👤 {kata.users?.username || 'Anonymous'}</span>
                  <span>👁️ {kata.view_count}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
