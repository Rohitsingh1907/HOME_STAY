import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Centered Navigation Links */}
        <div className="lg:flex-grow xl:flex-grow xl:flex lg:flex lg:justify-center xl:justify-center space-x-4 hidden lg:block xl:block">
          <a
            href="/flats"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Flats
          </a>
          <a
            href="/pgs"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            PGs
          </a>
          <a
            href="/homestays"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            HomeStays
          </a>
        </div>

        {/* Login Button on the right */}
        <div className="text-white">
          <a href="/login" className="bg-gray-700 px-3 py-2 rounded">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
