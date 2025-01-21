import React, { useContext, useEffect } from "react";
import productContext from "../context/ProductContext";
import s1 from "../assets/cat.jpg";

const About = () => {
  const context = useContext(productContext);
  const { product, article, fetchData } = context;
  console.log("this is my first product ", product);
  console.log("articles", article);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="title">
          <h4>My News Articles</h4>
        </div>
        {article &&
          article.map((p) => {
            return (
              <div className="col-md-3">
                <div key={p.author}>
                  <div className="card">
                    <img
                      src={p.urlToImage || s1}
                      className="card-img-top"
                      alt="card image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.title || "title"}</h5>
                      <p className="card-text">
                        {p.description || "follow me for more news updates"}
                      </p>
                      <a
                        href={p.url}
                        target="blank"
                        className="btn btn-primary"
                      >
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
