export default function Values() {
  const values = [
    { title: 'Integritas', desc: 'Membangun karakter jujur dan bertanggung jawab.' },
    { title: 'Kreativitas', desc: 'Menumbuhkan imajinasi melalui proyek dan karya.' },
    { title: 'Kolaborasi', desc: 'Belajar bersama, saling menghargai, saling menguatkan.' },
    { title: 'Keunggulan', desc: 'Berprestasi di akademik, seni, dan olahraga.' },
  ]

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Nilai Inti</h2>
          <p className="mt-3 text-gray-600">Pondasi budaya belajar yang kami pegang teguh.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-6 border">
              <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
