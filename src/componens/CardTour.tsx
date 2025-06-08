import React, { useEffect, useState } from "react";
import axios from "axios";

interface Tour {
  name: string;
  description: string;
  location: string;
  latitude: string;
  longitude: string;
  category: string;
  price: number;
  start_time?: string;
  end_time?: string;
  image?: string;
}

const CardTour: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tour")
      .then((res) => {
        console.log("Data dari API:", res.data);

        setTours(res.data.tours); // ✅ ambil field 'tours' yang berisi array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data tour:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center py-4">Loading data wisata...</p>;

  return (
    <>
      return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {Array.isArray(tours) &&
          tours.map((tour, index) => {
            // console.log("URL gambar:", tour.image); // ✅ Tambahkan log di sini

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                {tour.image && (
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-bold">{tour.name}</h2>
                  <p className="text-sm text-gray-600 mb-1">
                    {tour.location} | {tour.category}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-3 mb-2">
                    {tour.description}
                  </p>
                  <p className="text-green-600 font-semibold">
                    Rp {Number(tour.price).toLocaleString()}
                  </p>
                  {tour.start_time && tour.end_time && (
                    <p className="text-xs text-gray-500 mt-1">
                      Jam Operasional: {tour.start_time} - {tour.end_time}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      );
    </>
  );
};

export default CardTour;
