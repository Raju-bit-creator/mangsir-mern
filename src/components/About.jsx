import React, { useContext } from "react";
import productContext from "../context/ProductContext";
import s1 from "../assets/form.jpg";

const About = () => {
  const context = useContext(productContext);
  const { product } = context;
  console.log("this is my first product ", product);

  return (
    <div className="container mt-4">
      <div className="row">
        {product.map((p) => {
          return (
            <div className="col-md-3">
              <div key={p.id}>
                <div class="card">
                  <img src={s1} class="card-img-top" alt="card image" />
                  <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
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
