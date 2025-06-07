import React, { useState } from 'react';

const categories = ['All', 'Wisata', 'Restorant', 'Jobs', 'Report'];

const allItems = [
  {
    category: 'Wisata',
    name: 'Palutungan Kuningan',
    location: 'Kuningan, Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    category: 'Wisata',
    name: 'Sukageri View',
    location: 'Kuningan, Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    category: 'Restorant',
    name: 'Hotel Kuningan Indah',
    location: 'Kuningan Kota',
    rating: '4.5/5 (1rb Review)',
    originalPrice: 'Rp 350.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Hotel nyaman dengan fasilitas lengkap.'
  },
  {
    category: 'Jobs',
    name: 'Tiket Promo Jakarta-Bali',
    location: 'Garuda Indonesia',
    rating: '4.7/5 (870 Review)',
    originalPrice: 'Rp 750.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Penerbangan langsung dari Jakarta ke Bali.'
  },
  {
    category: 'Report',
    name: 'Konser Musik Kuningan',
    location: 'Stadion Mashud',
    rating: '5/5 (500 Review)',
    originalPrice: 'Rp 120.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Event musik terbesar tahun ini.'
  },
  {
    category: 'Report',
    name: 'Konser Musik Kuningan',
    location: 'Stadion Mashud',
    rating: '5/5 (500 Review)',
    originalPrice: 'Rp 120.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Event musik terbesar tahun ini.'
  },
  {
    category: 'Report',
    name: 'Konser Musik Kuningan',
    location: 'Stadion Mashud',
    rating: '5/5 (500 Review)',
    originalPrice: 'Rp 120.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Event musik terbesar tahun ini.'
  },
  {
    category: 'Report',
    name: 'Konser Musik Kuningan',
    location: 'Stadion Mashud',
    rating: '5/5 (500 Review)',
    originalPrice: 'Rp 120.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Event musik terbesar tahun ini.'
  },
  {
    category: 'Report',
    name: 'Konser Musik Kuningan',
    location: 'Stadion Mashud',
    rating: '5/5 (500 Review)',
    originalPrice: 'Rp 120.000',
    image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Event musik terbesar tahun ini.'
  }
];

const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filteredItems =
    selectedCategory === 'All'
      ? allItems
      : allItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Judul */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Lorem
        </h2>

        {/* Tabs */}
        <div className="flex space-x-3 mb-6 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border font-medium whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white'
                  : 'bg-amber-100 text-gray-800 border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Kartu scroll horizontal */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-2">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white border rounded-xl shadow hover:shadow-md transition cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-700">{item.location}</p>
                <p className="text-xs text-gray-700">{item.rating}</p>
                <p className="text-sm font-bold text-amber-500 mt-1">{item.originalPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Detail Panel */}
      {selected && (
        <div className="fixed inset-0 z-40 flex">
          <div className="ml-auto w-full max-w-md backdrop-blur-md bg-amber-100/90 h-full p-6 overflow-y-auto shadow-xl animate-slideInRight relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img src={selected.image} alt={selected.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h2 className="text-lg font-bold text-black">{selected.name}</h2>
            <p className="text-sm text-gray-800">{selected.location}</p>
            <p className="text-sm text-gray-800">{selected.rating}</p>
            <p className="text-sm text-gray-800 mt-2">{selected.description}</p>
            <p className="mt-2 text-amber-500 font-bold">{selected.originalPrice}</p>
          </div>
        </div>
      )}

      {/* Animasi slide-in */}
      <style jsx>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Card;
