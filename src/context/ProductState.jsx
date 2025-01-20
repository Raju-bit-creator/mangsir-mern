import React, { useEffect, useState } from "react";
import productContext from "./ProductContext";

const ProductState = (props) => {
  const p1 = {
    name: "orange",
    price: 100,
  };
  const products = [
    {
      id: 1,
      title: "sweater",
      description: "this is a woolen sweater",
      price: 1000,
      instock: 5,
    },
    {
      id: 1,
      title: "jeans",
      description: "blue jeans",
      price: 500,
      instock: 5,
    },
    {
      id: 1,
      title: "tshirt ",
      description: "summer shirt",
      price: 400,
      instock: 5,
    },
    {
      id: 1,
      title: "cap ",
      description: "summer cap",
      price: 400,
      instock: 5,
    },
  ];
  const [product, setProduct] = useState(products);

  // useEffect=(()=>{

  // },[])
  // setTimeout(() => {
  //   setProduct({
  //     name: "apple",
  //     price: 200,
  //   });
  // }, 3000);

  return (
    <productContext.Provider value={{ product }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
