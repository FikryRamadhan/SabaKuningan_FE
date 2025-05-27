import React from 'react';

const Header = () => {
  return (
    <header
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      </div>

      {/* Konten Tengah */}
      <div className="relative z-10 text-center text-gray-950 mt-20">
        <h1 className="text-3xl md:text-5xl font-extrabold  ">Saba Kuningan</h1>
        <p className="mt-2 text-lg font-bold font-serif">Butuh Healing?Kuningan ada dengan 100 wisata indahnya</p>
      </div>
    </header>
  );
};

export default Header;
