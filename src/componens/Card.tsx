import React, { useState } from 'react';

const wisataList = [
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Sukageri View',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
  {
    name: 'Palutungan Kuningan',
    location: 'Kuningan Jawa Barat',
    rating: '5/5 (3rb Review)',
    originalPrice: 'Rp 25.000',
    // image: 'https://i.ibb.co/jZ9pMsp/snow.jpg',
    description: 'Tempat wisata alam dengan udara sejuk dan pemandangan indah.'
  },
];

const Card = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-10 px-4 bg-white relative">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {wisataList.map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-white border rounded-xl shadow hover:shadow-md transition cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm text-gray-950">{item.name}</h3>
              <p className="text-xs text-gray-950">{item.location}</p>
              <p className="text-xs text-gray-950 mb-1">{item.rating}</p>
              {item.originalPrice && (
                <p className="text-sm font-bold text-amber-400">{item.originalPrice}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Slide Panel */}
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
            <p className="text-sm text-gray-950">{selected.location}</p>
            <p className="text-sm text-gray-950">{selected.rating}</p>
            <p className="text-sm text-gray-950 mt-2">{selected.description}</p>
            <p className="mt-2 text-amber-500 font-bold">{selected.originalPrice}</p>
          </div>
        </div>
      )}

      {/* animasi */}
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
