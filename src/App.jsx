import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Values from './components/Values'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Values />
        <Contact />
      </main>
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SMA Labschool Surabaya</p>
          <p>Terinspirasi motif batik: putih, sederhana, artsy.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
