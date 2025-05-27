import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icon hamburger & close

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full border-b shadow-sm bg-amber-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-black">//</div>
          <span className="text-sm font-medium text-amber-400">SabaKuningan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-black font-medium relative">
          <a href="#" className="hover:text-amber-500">Home</a>
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-amber-500"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              List
            </button>
            {isDropdownOpen && (
              <div className="absolute top-6 left-0 mt-2 w-40 bg-amber-100 shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:bg-amber-400">CoffeShop</a>
                <a href="#" className="block px-4 py-2 hover:bg-amber-400">Jobs</a>
                <a href="#" className="block px-4 py-2 hover:bg-amber-400">Report</a>
              </div>
            )}
          </div>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="text-sm px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-400">
            Sign In
          </button>
          <button className="text-sm px-4 py-1 bg-amber-400 text-white rounded-full hover:bg-amber-500">
            Register
          </button>
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
          <a href="#" className="block hover:text-amber-500 font-extrabold">Home</a>
          <details className="group">
            <summary className="cursor-pointer hover:text-amber-500">List</summary>
            <div className="pl-4 mt-1 space-y-1">
              <a href="#" className="block hover:text-amber-500">CoffeShop</a>
              <a href="#" className="block hover:text-amber-500">Jobs</a>
              <a href="#" className="block hover:text-amber-500">Report</a>
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
