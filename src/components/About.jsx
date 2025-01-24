import React, { useContext, useEffect } from "react";
import productContext from "../context/ProductContext";
import s1 from "../assets/cat.jpg";

const About = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
  } = context;
  console.log("this is my first product ", product);
  // console.log("articles", article);
  console.log("cart items", cart);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="title">
          <h4>My products</h4>
        </div>
        {product &&
          product.map((item) => {
            return (
              <div className="col-md-3">
                <div key={item._id}>
                  <div className="card">
                    <img
                      src={item.urlToImage || s1}
                      className="card-img-top"
                      alt="card image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title || "title"}</h5>
                      <p className="card-text">
                        {item.description || "follow me for more news updates"}
                      </p>
                      <p className="card-text">
                        Rs. {item.price || "follow me for more news updates"}
                      </p>
                      {/* something?():() */}
                      {cart && cart.some((p) => p._id === item._id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            });
                          }}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            });
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default About;
