// src/pages/AddMakeupProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import './addMakeupProduct.css'; // Optional: Add custom styles

function AddMakeupProduct() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post('http://localhost:5001/api/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Makeup product added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="add-makeup-container">
      <h2>Add Makeup Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="makeup-form">
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
        <input type="text" name="brand" placeholder="Brand" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category (e.g., Lipstick)" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddMakeupProduct;
