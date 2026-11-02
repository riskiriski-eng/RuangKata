import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AuthPage() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup'
      const payload = mode === 'login' 
        ? { email, password }
        : { email, password, username }

      const { data } = await axios.post(`http://localhost:3000${endpoint}`, payload)
      
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-slate-800 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">🎵 RuangKata</h1>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 rounded font-semibold transition ${mode === 'login' ? 'bg-primary text-white' : 'bg-slate-100 text-primary'}`}
          >
            Login
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 rounded font-semibold transition ${mode === 'signup' ? 'bg-primary text-white' : 'bg-slate-100 text-primary'}`}
          >
            Signup
          </button>
        </div>

        {error && <div className="bg-red-100 text-error p-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-pink-600 disabled:opacity-50"
          >
            {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  )
}
