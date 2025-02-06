import React, { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  const prod = [
    {
      _id: 1,
      title: "sweater",
      description: "this is a woolen sweater",
      price: 1000,
      instock: 10,
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
  const [product, setProduct] = useState(prod);
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });
  const allProduct = async () => {
    const response = await fetch(
      "http://localhost:3000/api/product/getallproduct", //dummy api
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  const editProduct = async (selectedProduct, updateData) => {
    console.log("edit product", selectedProduct);
    const { title, description, price, instock } = updateData;
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/updateproduct/${selectedProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description, price, instock }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      throw new Error("fail to update");
    }
  };

  return (
    <productContext.Provider
      value={{ product, state, dispatch, allProduct, editProduct }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
