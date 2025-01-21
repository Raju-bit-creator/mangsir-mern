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
  const [article, setArticle] = useState([]);

  // useEffect=(()=>{

  // },[])
  // setTimeout(() => {
  //   setProduct({
  //     name: "apple",
  //     price: 200,
  //   });
  // }, 3000);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
      );
      if (!response.ok) {
        throw new error("api not working");
      }
      const data = await response.json();
      setArticle(data.articles);
      console.log("this is my response", data);
    } catch (error) {
      throw new error("internal server error");
    }
  };
  return (
    <productContext.Provider value={{ product, article, fetchData }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
