import React from "react";

function Product(props) {
  return (
    <div className="zoom d-flex flex-column align-items-center col-6 col-md-4 col-lg-3  my-3">
      <div className="product-image">
        <img
          className="img-fluid img-thumbnail"
          src={props.img}
          alt="Alt text"
        ></img>
      </div>
      <div>uploaded by - {props.name}</div>
      <div>{props.price}</div>
    </div>
  );
}

export default Product;
