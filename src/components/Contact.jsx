export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Kontak & Pendaftaran</h2>
            <p className="mt-3 text-gray-600">Tertarik bergabung? Sampaikan pertanyaan atau langsung daftar.</p>
            <div className="mt-8 rounded-2xl border p-6 bg-gray-50">
              <dl className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-gray-500">Alamat</dt>
                  <dd className="font-medium text-gray-900">SMA Labschool Surabaya</dd>
                  <dd className="text-gray-600">Jl. Pendidikan No. 1, Surabaya</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Email</dt>
                  <dd className="font-medium text-gray-900">info@labschool-sby.sch.id</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Telepon</dt>
                  <dd className="font-medium text-gray-900">(031) 123-4567</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Jam Layanan</dt>
                  <dd className="font-medium text-gray-900">Senin - Jumat, 08.00 - 15.00</dd>
                </div>
              </dl>
            </div>
          </div>
          <form id="apply" className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Nama Lengkap</label>
                <input type="text" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="email@contoh.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-600">Pesan</label>
                <textarea className="mt-1 w-full rounded-md border px-3 py-2" rows={4} placeholder="Ceritakan minat Anda"></textarea>
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 hover:bg-indigo-700 transition">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  )
}
