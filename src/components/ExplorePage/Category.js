import React from "react";

function Category(props) {
  return (
    <div className="zoom d-flex flex-column align-items-center mx-1 mx-md-2 ">
      <div className="image-container">
        <img
          className="img-fluid img-thumbnail category-image"
          src={props.img}
          alt={props.name}
        ></img>
      </div>
      <div className="">{props.name}</div>
    </div>
  );
}

export default Category;
