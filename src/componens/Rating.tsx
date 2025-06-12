import React from 'react';

const rating = [
  {
    name: 'Warga Kuningan',
    rating: '★★★★★',
    text: 'Website SabaKuningan sangat bermanfaat. Saya jadi tahu banyak tempat menarik di daerah sendiri. Informasinya lengkap dan tampilannya enak dilihat.',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sarah',
  },
  {
    name: 'Pengguna Lokal',
    rating: '★★★★★',
    text: 'Saya sering bingung mau jalan-jalan ke mana di akhir pekan. Setelah kenal SabaKuningan, semua jadi lebih mudah. Banyak rekomendasi tempat dan makanannya juga menggoda.',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Michael',
  },
  {
    name: 'Warga Setempat',
    rating: '★★★★★',
    text: 'Terima kasih sudah membuat website seperti ini. Sebagai warga Kuningan, saya merasa terbantu. Apalagi sekarang banyak info lowongan kerja dan budaya lokal juga ditampilkan.',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Emma',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-10">Rating about SabaKuningan</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {rating.map((item, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center mb-3 space-x-3">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <div className="text-yellow-500 text-sm">{item.rating}</div>
              </div>
            </div>
            <p className="text-gray-950 text-sm">"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
