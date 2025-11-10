export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <div className="absolute -top-40 -right-20 h-[480px] w-[480px] rounded-full bg-indigo-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-10 h-[480px] w-[480px] rounded-full bg-cyan-200 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">Sekolah Menengah Atas</p>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              SMA Labschool Surabaya
            </h1>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Ruang belajar yang modern, kreatif, dan berkarakter. Terinspirasi oleh motif batik Nusantara, kami merajut ilmu, seni, dan teknologi untuk melahirkan generasi unggul.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#apply" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 hover:bg-indigo-700 transition">Daftar Sekarang</a>
              <a href="#programs" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 border hover:bg-gray-50 transition">Jelajahi Program</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full aspect-square max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-white shadow-xl border overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 200 200" className="h-full w-full text-gray-900">
                    <defs>
                      <pattern id="batik" x="0" y="0" width="0.2" height="0.2">
                        <circle cx="10" cy="10" r="3" fill="currentColor" />
                        <path d="M0 10 H20" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                        <path d="M10 0 V20" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#batik)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <p className="text-sm tracking-widest text-gray-500">Motif</p>
                    <p className="text-2xl font-semibold text-gray-900">Batik Kontemporer</p>
                    <p className="mt-2 text-gray-500">Artsy • Minimal • Putih</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
