import React, { useState } from 'react';
import './updateProduct.css'; // Optional: for custom styling

function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    stock: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Example: console.log or POST
    console.log('Submitting:', formData);
    // axios.post('/api/products', data)
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Update / Add Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <div className="upload-section">
          <label htmlFor="image-upload" className="file-label">
            📁 Choose Product Image
          </label>
          <input
            id="image-upload"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="file-input"
          />
        </div>


        <label>Product Brand:</label>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <label>Stock Quantity:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />


        <label>Product Category:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />

        <button type="submit" className="submit-btn">Submit Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
