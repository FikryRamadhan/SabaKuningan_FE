import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo dan deskripsi */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
          <div className="text-xl font-bold text-black">//</div>
            <span className="font-semibold text-lg text-amber-400">SabaKuningan</span>
          </div>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quo modi! Dolor sequi officiis repudiandae porro perferendis facere fugit architecto. Nostrum quae tempora distinctio praesentium sint ratione sit similique maxime?</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
          <ul className="space-y-1 ">
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">About Us</a></li>
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">Destinations</a></li>
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">Contact</a></li>
            {/* <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">kontak</a></li> */}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">FAQ</a></li>
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">Privacy Policy</a></li>
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">Terms of Service</a></li>
            <li><a href="#" className=" text-gray-950 hover:underline hover:text-amber-500">Support Center</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Connect With Us</h4>
          <p>nnti di isi pake logo sosmet</p>
        </div>
      </div>

      <hr className="my-6 border-gray-950" />
      <p className="text-center text-xs font-bold text-black">©2025 SabaKuningan Company. </p>
    </footer>
  );
};
  
export default Footer;
