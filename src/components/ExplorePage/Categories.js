import React from "react";
import Category from "./Category";

function Categories(props) {
  const categories = [
    {
      id: "0",
      name: "Mattress",
      img: "https://www.shutterstock.com/image-illustration/mattresses-stacked-isolated-on-white-260nw-1486986278.jpg",
    },
    {
      id: "1",
      name: "Cycle",
      img: "https://www.shutterstock.com/image-photo/new-blue-bicycle-isolated-on-260nw-361135133.jpg",
    },
    {
      id: "2",
      name: "Cooler",
      img: "https://www.shutterstock.com/image-vector/white-air-cooler-isolated-on-260nw-1687742719.jpg",
    },
    {
      id: "3",
      name: "Calculator",
      img: "https://www.shutterstock.com/image-photo/bangkok-thailand-march-13-casio-260nw-1044699274.jpg",
    },
    {
      id: "4",
      name: "Question Papers",
      img: "https://www.shutterstock.com/image-photo/stack-paper-on-blackboard-260nw-174443597.jpg",
    },
  ];

  const categoryList = categories.map((category) => (
    <Category id={category.id} name={category.name} img={category.img} />
  ));

  return (
    <div>
      <div className="justify-content-center my-3 d-none d-md-flex">
        {categoryList}
      </div>
    </div>
  );
}

export default Categories;
