import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setformData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    instock: product.instock,
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="modal-show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-header">
          <h5 className="modal-title"> Edit Product</h5>
          <button type="button" className="button-close" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-6">
              <label htmlFor="title" className="form-label">
                title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="title" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="title" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="title" className="form-label">
                Instock
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.instock}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
