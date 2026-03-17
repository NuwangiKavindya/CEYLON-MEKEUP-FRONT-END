import React, { useState, useEffect } from "react";
import "./category.css";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../api/data";

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  if (loading) return <div className="text-center p-10 text-pink-300">Loading categories...</div>;
  if (error) return null;

  return (
    <div className="category-section">
      <div className="category-scroll-container">
        {categories.map((category) => (
          <div
            key={category._id || category.id}
            className="category-pill group"
            onClick={() => navigate(`/product?category=${category.name}`)}
          >
            <div className="pill-content">
              <span className="pill-name">{category.name}</span>
              <div className="pill-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;