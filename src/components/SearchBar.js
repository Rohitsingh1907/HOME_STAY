import { LocationMarkerIcon } from "@heroicons/react/solid";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 my-4 mx-2">
      <LocationMarkerIcon className="h-5 w-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search for a location..."
        className="flex-grow outline-none p-2"
      />
    </div>
  );
};

export default SearchBar;
