import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './updateCategory.css'; // CSS for gradient, shadow, etc.

function UpdateCategory({ categoryId }) {
  const [formData, setFormData] = useState({
    name: '',
    details: '',
    image: null,
  });

  const { idm } = useParams();
  console.log("Category ID:", idm);

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setPreviewImage(URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('details', formData.details);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await axios.put(`http://localhost:5000/api/category/update/${categoryId}`, data);
      alert('✅ Category updated successfully!');
    } catch (err) {
      console.error(err);
      alert('❌ Failed to update category');
    }
  };

  return (
    <div className="update-category-container">
      <div className="form-card shadow">
        <h2 className="title">💖 Update Category</h2>

        <form onSubmit={handleSubmit}>

          <label className="form-label">Category Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="e.g., Skincare, Lipsticks"
            onChange={handleChange}
            required
          />

          <label className="form-label">Category Details</label>
          <textarea
            name="details"
            className="form-textarea"
            rows="3"
            placeholder="Enter category details..."
            onChange={handleChange}
          ></textarea>

          <label className="form-label">Category Image</label>
          <input
            type="file"
            name="image"
            className="form-input"
            onChange={handleChange}
          />

          {previewImage && (
            <div className="preview-container">
              <p className="preview-label">Image Preview:</p>
              <img src={previewImage} alt="Preview" className="preview-img" />
            </div>
          )}

          <button type="submit" className="submit-btn">
            💾 Update Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCategory;
