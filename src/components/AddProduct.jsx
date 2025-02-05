import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    instock: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    console.log("add product");
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("instock", product.instock);
    if (product.image) {
      formData.append("myfile", product.image);
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        formData,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      //assignment add react tostify package in this project

      setProduct({
        title: "",
        description: "",
        price: "",
        instock: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    // console.log("handle change");
    if (e.target.type == "file") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
      console.log(e.target.files[0]);
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div className="container mt-4">
      <h4>Add your product here !!</h4>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="exampleInputEmail1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Instock</label>
          <input
            type="number"
            name="instock"
            value={product.instock}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            multiple
            onChange={handleChange}
            className="form-control"
            id="image"
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
{
  /* <div className="flex">
  {[...Array(5)].map((_, index) => (
    <FaStar
      size={20}
      key={index}
      color={index < parseInt(review.rating) ? "#ffc107" : "#e4e5e9"}
    />
  ))}
</div>; */
}
