// src/pages/ManageProducts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    stock: '',
    image: null,
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

const fetchProducts = async () => {
  try {
    const res = await axios.get('/api/products'); // No localhost here
    setProducts(res.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};


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
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      if (editingId) {
        await axios.put(`/api/products/${editingId}`, data);
      } else {
        await axios.post('/api/products', data);
      }

      fetchProducts();
      setFormData({
        name: '',
        brand: '',
        price: '',
        description: '',
        stock: '',
        image: null,
      });
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      brand: product.brand,
      price: product.price,
      description: product.description,
      stock: product.stock,
      image: null, // image will not be pre-filled
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Makeup Products</h2>

      <form onSubmit={handleSubmit} className="mt-4 mb-5">
        <div className="row g-3">
          <div className="col-md-6">
            <input className="form-control" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input className="form-control" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input className="form-control" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input className="form-control" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
          </div>
          <div className="col-md-12">
            <textarea className="form-control" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="col-md-12">
            <input className="form-control" type="file" name="image" onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary" type="submit">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </div>
      </form>

      <h4>Product List</h4>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>{p.description}</td>
              <td>
                {p.image && (
                  <img src={`/uploads/${p.image}`} alt="product" width="50" height="50" />
                )}
              </td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(p)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageProducts;
 