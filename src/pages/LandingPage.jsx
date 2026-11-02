export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-slate-800 text-white">
      <nav className="p-6 flex justify-between">
        <h1 className="text-2xl font-bold">🎵 RuangKata</h1>
        <a href="/auth" className="bg-accent px-6 py-2 rounded-lg font-semibold">Mulai</a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">Bagikan Kata-kata Indah dengan Musik</h2>
        <p className="text-xl text-slate-300 mb-8">Ciptakan momen spesial dengan memadukan kata-kata dan musik favorit Spotify</p>
        <a href="/auth" className="bg-accent text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-pink-600">Buat Sekarang</a>
      </div>
    </div>
  )
}
