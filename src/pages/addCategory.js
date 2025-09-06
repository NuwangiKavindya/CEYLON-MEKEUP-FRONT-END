import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addCategory.css";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const onFileSelect = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    onFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeImage = () => {
    setImageFile(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Enter a category name.");
      return;
    }
    if (!imageFile) {
      alert("Please select an image for this category.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("image", imageFile);

      const res = await axios.post(
        "http://localhost:5001/api/categories/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // success
      alert("Category added successfully!");
      setName("");
      removeImage();
      // optionally refresh/manage page
      navigate("/manageCategory");
    } catch (err) {
      console.error("Add category error:", err);
      alert(
        err?.response?.data?.message || "Failed to add category. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addcat-page">
      <div className="addcat-card">
        <div className="addcat-left">
          <h2 className="brand">Ceylon Makeup</h2>
          <p className="subtitle">Add a new category — make it beautiful ✨</p>

          <form className="addcat-form" onSubmit={handleSubmit}>
            <label className="label">Category name</label>
            <input
              className="input"
              type="text"
              placeholder="e.g. Bridal Makeup"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={60}
            />

            <label className="label">Category image</label>

            <div
              className={`dropzone ${preview ? "has-preview" : ""}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              {!preview && (
                <div className="drop-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="upload-icon"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 5 17 10" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                  </svg>
                  <div className="drop-text">
                    Drag & drop an image here, or click to choose
                  </div>
                </div>
              )}

              {preview && (
                <div className="preview-wrap">
                  <img src={preview} alt="preview" className="preview-img" />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="file-input"
                onChange={handleImageChange}
              />
            </div>

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Category"}
            </button>
          </form>
        </div>


      </div>
    </div>
  );
}
