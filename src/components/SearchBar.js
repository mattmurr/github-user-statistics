import React from "react";

const SearchBar = (props) => {
  return (
    <div className="w-64 mt-6">
      <div className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center h-full pl-2">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-500 fill-current"
          >
            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
          </svg>
        </span>
        <input
          value={props.searchTerm}
          placeholder="Search"
          className="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 bg-white border border-b border-gray-400 rounded appearance-none focus:outline-none"
          onChange={(e) => {
            props.setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
