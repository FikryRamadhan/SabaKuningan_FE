import React, { useState, useEffect } from "react";
import Navbar from "../componens/Navbar";
import Footer from "../componens/Footer";
import Rating from "../componens/Rating";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [detailData, setDetailData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // Contoh: fetch data kategori wisata, ambil item pertama sebagai detail
        const res = await axios.get(
          "http://localhost:8000/api/content?category=wisata"
        );
        const data = res.data.data || [];
        if (data.length > 0) {
          setDetailData(data[0]);
        }
      } catch (error) {
        console.error("Gagal fetch detail data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Detail Section */}
      <section className="max-w-screen-md mx-auto p-6 bg-amber-50 rounded-lg shadow-md my-6">
        {loading ? (
          <p>Loading detail...</p>
        ) : detailData ? (
          <>
            <img
              src={detailData.image}
              alt={detailData.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">{detailData.name}</h1>
            <p className="text-gray-700 mb-2">{detailData.location}</p>
            <p className="text-gray-800 mb-4">{detailData.description}</p>
            <p className="text-amber-600 font-bold text-lg">
              Rp {Number(detailData.price).toLocaleString()}
            </p>
          </>
        ) : (
          <p>Detail data tidak ditemukan.</p>
        )}
      </section>

      {/* Testimoni */}
      <Rating />

      {/* Summary Button Fixed (Contoh sesuai detail Trans Snow World) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-end sm:px-10 z-10">
        <Link
          to="/"
          className="bg-yellow-400 text-white px-6 py-3 rounded-lg text-lg font-bold w-full sm:w-auto text-center"
        >
          Kembali
        </Link>
        <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg text-lg font-bold w-full sm:w-auto">
          Pesan Sekarang
        </button>
      </div>

      {/* Footer */}
      <div className="pb-20 sm:pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
