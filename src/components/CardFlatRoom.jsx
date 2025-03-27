import React from 'react'

const CardFlatRoom = () => {
  return (
    <>
      <div className="max-w-lg border rounded-2xl shadow-xl overflow-hidden bg-white transition-transform transform hover:scale-105 duration-300">
      <img
        src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        alt="Apartment"
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500">25 m² apartment • 4 guests • 1 bedroom</p>
        <h3 className="text-xl font-semibold mt-1 text-gray-800">
          Apartment | City view | Good for workation
        </h3>
        <p className="text-sm text-gray-500">3.2 km to center • Mullick Bazar, Park Street area</p>
        <div className="flex items-center mt-3 space-x-2">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.18a1 1 0 00.95.69h4.392c.969 0 1.371 1.24.588 1.81l-3.562 2.586a1 1 0 00-.364 1.118l1.357 4.18c.3.921-.755 1.688-1.54 1.118l-3.562-2.586a1 1 0 00-1.176 0l-3.562 2.586c-.785.57-1.84-.197-1.54-1.118l1.357-4.18a1 1 0 00-.364-1.118L2.064 9.607c-.783-.57-.38-1.81.588-1.81h4.392a1 1 0 00.95-.69l1.357-4.18z" />
          </svg>
          <span className="text-blue-600 font-semibold text-lg">4.7</span>
          <span className="text-gray-500 text-sm">(15 reviews)</span>
        </div>
        <p className="text-2xl font-bold mt-4 text-gray-800">CA$55 <span className="text-sm font-normal text-gray-500">for 1 night</span></p>
        <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300">
          View deal
        </button>
      </div>
    </div>
    </>
  )
}

export default CardFlatRoom