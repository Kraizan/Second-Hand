import React from "react";
import Product from "./Product";

function ProductFeed() {
  const products = [
    {
      id: "0",
      name: "prod-1",
      img: "https://picsum.photos/300/200",
      price: 2000,
    },
    {
      id: "1",
      name: "prod-2",
      img: "https://picsum.photos/300/200",
      price: 1000,
    },
    {
      id: "2",
      name: "prod-3",
      img: "https://picsum.photos/300/200",
      price: 1500,
    },
    {
      id: "0",
      name: "prod-1",
      img: "https://picsum.photos/300/200",
      price: 2000,
    },
    {
      id: "1",
      name: "prod-2",
      img: "https://picsum.photos/300/200",
      price: 1000,
    },
    {
      id: "2",
      name: "prod-3",
      img: "https://picsum.photos/300/200",
      price: 1500,
    },
    {
      id: "0",
      name: "prod-1",
      img: "https://picsum.photos/300/200",
      price: 2000,
    },
    {
      id: "1",
      name: "prod-2",
      img: "https://picsum.photos/300/200",
      price: 1000,
    },
    {
      id: "2",
      name: "prod-3",
      img: "https://picsum.photos/300/200",
      price: 1500,
    },
    {
      id: "0",
      name: "prod-1",
      img: "https://picsum.photos/300/200",
      price: 2000,
    },
    {
      id: "1",
      name: "prod-2",
      img: "https://picsum.photos/300/200",
      price: 1000,
    },
    {
      id: "2",
      name: "prod-3",
      img: "https://picsum.photos/300/200",
      price: 1500,
    },
  ];

  const productList = products.map((product) => (
    <Product
      id={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
    />
  ));
  return <div className="row mx-auto">{productList}</div>;
}

export default ProductFeed;
