import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fungsi scroll dan klik tombol kategori
  const scrollToKategori = (kategori: string) => {
    const section = document.getElementById("kategori");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const buttons = section.querySelectorAll("button");
        buttons.forEach((btn) => {
          if (
            btn.textContent?.trim().toLowerCase() === kategori.toLowerCase()
          ) {
            (btn as HTMLButtonElement).click();
          }
        });
      }, 500);
    }
  };

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tampilkan/sembunyikan navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full border-b bg-amber-100 fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="w-full flex items-center justify-between px-10 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-black">//</div>
          <span className="text-sm font-medium text-amber-400">SabaKuningan</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6 text-sm text-black font-medium relative flex-grow justify-center"
          ref={dropdownRef}
        >
          <a href="#" className="hover:text-amber-500">
            Home
          </a>
          <div className="relative">
            <button
              className="hover:text-amber-500"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              Explore
            </button>
            {isDropdownOpen && (
              <div className="absolute top-6 left-0 mt-2 w-40 bg-amber-100 shadow-lg rounded-md z-10">
                <button onClick={() => scrollToKategori("wisata")} className="block w-full text-left px-4 py-2 hover:bg-amber-400">Wisata</button>
                <button onClick={() => scrollToKategori("restorant")} className="block w-full text-left px-4 py-2 hover:bg-amber-400">Restorant</button>
                <button onClick={() => scrollToKategori("jobs")} className="block w-full text-left px-4 py-2 hover:bg-amber-400">Jobs</button>
                <button onClick={() => scrollToKategori("report")} className="block w-full text-left px-4 py-2 hover:bg-amber-400">Report</button>
                <button onClick={() => scrollToKategori("culture")} className="block w-full text-left px-4 py-2 hover:bg-amber-400">Culture</button>
              </div>
            )}
          </div>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3 ml-auto">
          <a
            href="/login"
            className="text-sm px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-400"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="text-sm px-4 py-1 bg-amber-400 text-white rounded-full hover:bg-amber-500"
          >
            Register
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-amber-100 text-sm text-black font-medium">
          <a href="#" className="block hover:text-amber-500">
            Home
          </a>
          <details className="group">
            <summary className="cursor-pointer hover:text-amber-500">Explore</summary>
            <div className="pl-4 mt-1 space-y-1">
              <button onClick={() => scrollToKategori("wisata")} className="block w-full text-left hover:text-amber-500">Wisata</button>
              <button onClick={() => scrollToKategori("restorant")} className="block w-full text-left hover:text-amber-500">Restorant</button>
              <button onClick={() => scrollToKategori("jobs")} className="block w-full text-left hover:text-amber-500">Jobs</button>
              <button onClick={() => scrollToKategori("report")} className="block w-full text-left hover:text-amber-500">Report</button>
              <button onClick={() => scrollToKategori("culture")} className="block w-full text-left hover:text-amber-500">Culture</button>
            </div>
          </details>
          <div className="flex gap-2 pt-2">
            <button className="text-sm px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-400">
              Sign In
            </button>
            <button className="text-sm px-4 py-1 bg-amber-400 text-white rounded-full hover:bg-amber-500">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
