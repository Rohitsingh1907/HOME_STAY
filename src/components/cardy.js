// src/Card.js
import React from "react";

const Card = ({ title, urlImg }) => {
  return (
    <div className="relative group w-64 h-40 overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
        style={{ backgroundImage: `url(${urlImg})` }}
      ></div>

      {/* Overlay with Heading */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
