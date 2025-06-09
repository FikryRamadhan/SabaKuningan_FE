import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFooter(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`bg-amber-100 text-gray-700 py-10 px-6 transform transition-transform duration-700 ease-out ${
        showFooter ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Logo dan deskripsi */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-2xl font-bold text-black">//</div>
            <span className="font-semibold text-lg text-amber-400">SabaKuningan</span>
          </div>
          <p className="text-gray-950 leading-relaxed">
            Menjelajahi keindahan Kuningan dengan berbagai destinasi wisata,
            kuliner, dan budaya yang memukau. Mari bersama-sama nikmati pesona alam dan budaya lokal.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-black">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-3 text-black">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-950 hover:underline hover:text-amber-500">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold mb-3 text-black">Connect With Us</h4>
          <div className="flex space-x-4 text-amber-400 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-500 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-amber-500 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-amber-500 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="mt-4 text-gray-950 text-xs">
            Follow kami di media sosial untuk update terbaru dan inspirasi wisata Kuningan.
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-950" />
      <p className="text-center text-xs font-bold text-black">©2025 SabaKuningan Company.</p>
    </footer>
  );
};

export default Footer;
