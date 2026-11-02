import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import CreateKata from './pages/CreateKata'

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'))
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={token ? <Navigate to="/dashboard" /> : <AuthPage />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/auth" />} />
        <Route path="/create" element={token ? <CreateKata /> : <Navigate to="/auth" />} />
      </Routes>
    </Router>
  )
}
