import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = ["All", "Wisata", "Restorant", "Jobs", "Report"];

const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [data, setData] = useState<Record<string, any[]>>({});
  const [selected, setSelected] = useState<any>(null);

  // Fungsi fetch berdasarkan kategori
  const fetchByCategory = async (category: string) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/content?category=${category.toLowerCase()}`
      );
      return res.data.data || [];
    } catch (err) {
      console.error("Gagal fetch kategori:", category, err);
      return [];
    }
  };

  // Fetch semua data kategori (kecuali "All")
  useEffect(() => {
    const fetchAll = async () => {
      const result: Record<string, any[]> = {};
      for (let cat of categories.filter((c) => c !== "All")) {
        result[cat] = await fetchByCategory(cat);
      }
      setData(result);
    };

    fetchAll();
  }, []);


  // Filter berdasarkan kategori
  const filteredItems =
    selectedCategory === "All"
      ? Object.values(data).flat()
      : data[selectedCategory] || [];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Judul */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Eksplor Kategori
        </h2>

        {/* Tabs */}
        <div className="flex space-x-3 mb-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border font-medium whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 text-gray-800 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Kartu */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-2">
          {filteredItems.map((item, index) => {


            return (
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
                  <h3 className="font-semibold text-sm text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-700">{item.location}</p>
                  <p className="text-sm font-bold text-amber-500 mt-1">
                    Rp {Number(item.price).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Panel Detail */}
      {selected && (
        <div className="fixed inset-0 z-40 flex">
          <div className="ml-auto w-full max-w-md backdrop-blur-md bg-amber-100/90 h-full p-6 overflow-y-auto shadow-xl animate-slideInRight relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold text-black">{selected.name}</h2>
            <p className="text-sm text-gray-800">{selected.location}</p>
            <p className="text-sm text-gray-800 mt-2">{selected.description}</p>
            <p className="mt-2 text-amber-500 font-bold">
              Rp {Number(selected.price).toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Animasi */}
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
