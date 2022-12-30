import React from "react";
import Header from "../../Layouts/Header/Header.js";
import Footer from "../../Layouts/Footer/Footer.js";
import Categories from "../../components/ExplorePage/Categories";
import ProductFeed from "../../components/ExplorePage/ProductFeed";

function Explore() {
  return (
    <div>
      <Header />
      <Categories />
      <ProductFeed />
      <Footer />
    </div>
  );
}

export default Explore;
