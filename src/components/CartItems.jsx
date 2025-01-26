import React, { useContext } from "react";
import hero from "../assets/cat.jpg";
import productContext from "../context/ProductContext";

const CartItems = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  return (
    <div className="container cart-page mt-5">
      <div className="productcontainer-cart">
        <ul className="product-list">
          {cart &&
            cart.map((item) => (
              <li key={item._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={hero}
                      style={{ height: "80px", width: "80px" }}
                      alt="hero image"
                    />
                  </div>
                  <div className="col-md-2">
                    <h6>Name:{item.title}</h6>
                  </div>
                  <div className="col-md-2">
                    <h6>Rs. {item.price}</h6>
                  </div>
                  <div className="col-md-2">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_CART_ITEM",
                          payload: { id: item._id, qty: e.target.value },
                        })
                      }
                      className="form_control"
                    >
                      {[...Array(item.instock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CartItems;
