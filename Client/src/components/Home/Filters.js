import React from "react";

const Filters = ({
  searchQuery,
  handleSearchQueryChange,
  collegeQuery,
  handleCollegeQueryChange,
  collegeOptions,
  sortBy,
  handleSortChange,
  priceRange,
  handlePriceRangeChange,
  categoryFilter,
  handleCategoryFilterChange,
}) => {
  const filteredCollegeOptions = collegeOptions.filter((college) =>
    college.toLowerCase().includes(collegeQuery.toLowerCase())
  );

  return (
    <div className="w-1/4 p-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="text-gray-600 block mb-2">Search:</label>
        <input
          type="text"
          className="bg-gray-800 text-white p-2 w-full border-2 border-transparent focus:border-white"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-600 block mb-2">College:</label>
        <input
          type="text"
          className="bg-gray-800 text-white p-2 w-full border-2 border-transparent focus:border-white"
          placeholder="Search College..."
          value={collegeQuery}
          onChange={handleCollegeQueryChange}
        />
        <select
          value={collegeQuery}
          onChange={handleCollegeQueryChange}
          className="p-2 rounded bg-gray-800 text-white w-full mt-2"
        >
          {filteredCollegeOptions.map((college) => (
            <option key={college} value={college}>
              {college}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="text-gray-600 block mb-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="p-2 rounded bg-gray-800 text-white w-full"
        >
          <option value="latest">Latest</option>
          <option value="lowestPrice">Lowest Price</option>
          <option value="highestPrice">Highest Price</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-gray-600 block mb-2">Category:</label>
        <select
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
          className="p-2 rounded bg-gray-800 text-white w-full"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="mattress">Mattress</option>
          <option value="air cooler">Air Cooler</option>
          <option value="cycles">Cycles</option>
          <option value="books">Books</option>
          {/* Add more options for different categories */}
        </select>
      </div>
      <div className="mb-4">
        <label className="text-gray-600 block mb-2">Price Range:</label>
        <input
          type="range"
          min={0}
          max={10000}
          value={priceRange[0]}
          onChange={(e) =>
            handlePriceRangeChange(+e.target.value, priceRange[1])
          }
          className="mr-2 w-full bg-gray-900"
        />
        <input
          type="range"
          min={0}
          max={10000}
          value={priceRange[1]}
          onChange={(e) =>
            handlePriceRangeChange(priceRange[0], +e.target.value)
          }
          className="ml-2 w-full bg-gray-900"
        />
        <div className="flex justify-between">
          <span className="text-gray-600">{priceRange[0]}</span>
          <span className="text-gray-600">{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
