import React, { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  const products = [
    {
      _id: 1,
      title: "sweater",
      description: "this is a woolen sweater",
      price: 1000,
      instock: 5,
    },
    {
      _id: 2,
      title: "jeans",
      description: "blue jeans",
      price: 500,
      instock: 5,
    },
    {
      _id: 3,
      title: "tshirt ",
      description: "summer shirt",
      price: 400,
      instock: 5,
    },
    {
      _id: 4,
      title: "cap ",
      description: "summer cap",
      price: 400,
      instock: 5,
    },
  ];
  const [product, setProduct] = useState(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });
  return (
    <productContext.Provider value={{ product, state, dispatch }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
