import React from "react";

const AddProduct = () => {
  const handleSubmit = () => {
    console.log("add product");
  };
  const handleChange = (e) => {
    console.log("handle change");
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
            // value={Product.title}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            // value={Product.title}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            // value={Product.title}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Instock</label>
          <input
            type="number"
            name="instock"
            // value={Product.title}
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
            // value={Product.title}
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
