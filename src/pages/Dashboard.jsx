export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-primary text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎵 RuangKata</h1>
        <a href="/create" className="bg-accent px-6 py-2 rounded-lg font-semibold">+ Buat Kata-kata</a>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-primary mb-8">Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-2">Kata-kata Trending</h3>
            <p className="text-slate-500">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
