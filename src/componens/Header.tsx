import React from "react";

const Header = () => {
  return (
    <header
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay gelap untuk teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Container untuk konten atas, bisa untuk navbar atau lainnya */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Kosong, bisa kamu isi nanti jika mau navbar atau tombol */}
      </div>

      {/* Konten tengah: judul dan deskripsi */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-24 text-grey-950">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Saba Kuningan
        </h1>
        <p className="mt-4 text-lg md:text-xl font-serif font-semibold">
          Butuh Healing? Kuningan ada dengan 100 wisata indahnya
        </p>
      </div>
    </header>
  );
};

export default Header;
