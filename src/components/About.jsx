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
                <div key={item.id}>
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
                      {cart && cart.some((p) => p.id === item.id) ? (
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
// important status code

// 2xx: Success
// 200 OK: The request succeeded (e.g., data fetched successfully).
// 201 Created: Used when a resource is successfully created (e.g., a new product or user).
// 204 No Content: The request succeeded but there is no content to send in the response (e.g., after a successful delete operation).
// 3xx: Redirection
// Rarely used in API-based MERN apps. You may encounter:
// 301 Moved Permanently: If a resource URL changes.
// 307 Temporary Redirect: If a resource is temporarily located elsewhere.
// 4xx: Client Errors
// 400 Bad Request: The request is invalid (e.g., missing required fields in the request body).
// 401 Unauthorized: Authentication is required or invalid (e.g., token missing or expired).
// 403 Forbidden: The client does not have permission to access the resource (e.g., trying to delete someone else's data).
// 404 Not Found: The requested resource does not exist (e.g., invalid product ID).
// 422 Unprocessable Entity: Validation error on input data.
// 5xx: Server Errors
// 500 Internal Server Error: A generic error indicating something went wrong on the server.
// 503 Service Unavailable: The server is temporarily unable to handle the request (e.g., maintenance mode).
