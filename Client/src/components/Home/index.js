import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [collegeQuery, setCollegeQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [categoryFilter, setCategoryFilter] = useState("");

  const collegeOptions = [
    "All",
    "IIIT K",
    "IIIT A",
    "IIIT B",
    "IIIT C",
    "IIIT D",
    "IIIT E",
    "IIIT F",
    "IIIT G",
    "IIIT H",
    "NIT A",
    "NIT B",
    "NIT C",
    "NIT D",
    "NIT E",
    "NIT F",
  ];

  // Handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle college query change
  const handleCollegeQueryChange = (e) => {
    setCollegeQuery(e.target.value);
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle price range change
  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
  };

  // Handle category filter change
  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products/");
        if (response.ok) {
          const products = await response.json();
          console.log(products);
          // Filter products based on the search query, price range, and category
          const filtered = products
            .filter((product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter((product) =>
              product.uploadedBy.college
                .toLowerCase()
                .includes(collegeQuery.toLowerCase())
            )
            .filter(
              (product) =>
                product.price.$numberDecimal >= priceRange[0] &&
                product.price.$numberDecimal <= priceRange[1]
            )
            .filter((product) =>
              product.category
                .toLowerCase()
                .includes(categoryFilter.toLowerCase())
            )
            .filter((product) => {
              if (searchQuery.trim() === "") {
                return true; // If search query is empty, include all products
              }
              // Use a case-insensitive regex to match the search query against product name or description
              const regex = new RegExp(searchQuery, "i");
              return (
                regex.test(product.name) || regex.test(product.description)
              );
            })
            .sort((a, b) => {
              if (sortBy === "lowestPrice") {
                return (
                  parseFloat(a.price.$numberDecimal) -
                  parseFloat(b.price.$numberDecimal)
                );
              } else if (sortBy === "highestPrice") {
                return (
                  parseFloat(b.price.$numberDecimal) -
                  parseFloat(a.price.$numberDecimal)
                );
              } else if (sortBy === "latest") {
                // You can add a timestamp property to your product data for sorting by latest
                // Example: product.timestamp = Date.now();
                // Then, sort by product.timestamp
                return 0; // Placeholder
              }
              return 0;
            });
          setFilteredProducts(filtered);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [searchQuery, priceRange, categoryFilter, sortBy, collegeQuery]);

  const productsPerPage = 15;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-4/5 mx-auto py-4">
      <h1 className="text-3xl font-semibold mb-4">All Products</h1>
      <div className="w-full md:flex">
        <Filters
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
          collegeQuery={collegeQuery}
          handleCollegeQueryChange={handleCollegeQueryChange}
          collegeOptions={collegeOptions}
          sortBy={sortBy}
          handleSortChange={handleSortChange}
          priceRange={priceRange}
          handlePriceRangeChange={handlePriceRangeChange}
          categoryFilter={categoryFilter}
          handleCategoryFilterChange={handleCategoryFilterChange}
        />
        <ProductList currentProducts={currentProducts} />
      </div>
      <Pagination
        filteredProducts={filteredProducts}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsList;
