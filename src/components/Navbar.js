import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Logo</a>
        </div>
        <div className="hidden md:flex space-x-4">
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
          <a
            href="/login"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Login
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
