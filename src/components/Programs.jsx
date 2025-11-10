export default function Programs() {
  const items = [
    {
      title: 'Sains & Teknologi',
      desc: 'Laboratorium modern, robotika, dan inovasi digital.',
    },
    {
      title: 'Seni & Desain',
      desc: 'Studio kreatif, fotografi, dan desain batik modern.',
    },
    {
      title: 'Bahasa & Humaniora',
      desc: 'Debat, jurnalistik, dan literasi global.',
    },
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Program Unggulan</h2>
          <p className="mt-3 text-gray-600">Jalur pembelajaran yang dirancang untuk mengasah minat dan potensi.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border bg-white/60 p-6 shadow-sm hover:shadow transition">
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
              <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
