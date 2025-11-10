import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">SMA Labschool Surabaya</p>
            <p className="text-xs text-gray-500">Belajar. Berkarya. Berkarakter.</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#programs" className="hover:text-indigo-600 transition">Program</a>
          <a href="#values" className="hover:text-indigo-600 transition">Nilai</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Kontak</a>
          <a href="#apply" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-indigo-700 transition">Daftar</a>
        </nav>
        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border text-gray-700">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
