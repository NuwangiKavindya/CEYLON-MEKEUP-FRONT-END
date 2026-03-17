// ManageCategory.js
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./manageCategory.css";


function ManageCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("categories");
      if (Array.isArray(res.data) && res.data.length > 0) {
        setCategories(res.data);
      } else {
        setCategories([
          { _id: "1", name: "Makeup", image: "uploads/sample1.jpg" },
          { _id: "2", name: "Skincare", image: "uploads/sample2.jpg" }
        ]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([
        { _id: "1", name: "Makeup", image: "uploads/sample1.jpg" },
        { _id: "2", name: "Skincare", image: "uploads/sample2.jpg" }
      ]);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axiosInstance.delete(`categories/${id}`);
        setCategories(categories.filter((cat) => cat._id !== id));
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/dashboard/updateCategory/${id}`);
  };

  return (
    <div className="category-container">
      <h2>Manage Categories</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <div key={cat._id} className="category-card">
            <div className="img-wrapper">
              <img
                src={`${process.env.REACT_APP_API_URL}${cat.image}`}
                alt={cat.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
              />
            </div>
            <h3>{cat.name}</h3>
            <div className="category-actions">
              <button onClick={() => handleUpdate(cat._id)}>Update</button>
              <button className="delete" onClick={() => handleDelete(cat._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCategory;
