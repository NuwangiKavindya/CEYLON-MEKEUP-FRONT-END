import React, { useState } from "react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null,
    photoPreview: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
        photoPreview: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);

    // 👉 Later you can send this data to your backend
    // const data = new FormData();
    // data.append("name", formData.name);
    // data.append("email", formData.email);
    // data.append("phone", formData.phone);
    // data.append("photo", formData.photo);

    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">
          Edit Profile
        </h2>

        {/* Profile Photo Preview */}
        <div className="flex justify-center mb-4">
          <label htmlFor="photo-upload" className="cursor-pointer">
            {formData.photoPreview ? (
              <img
                src={formData.photoPreview}
                alt="Profile Preview"
                className="w-28 h-28 rounded-full object-cover border-4 border-pink-300"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-sm border-2 border-dashed border-pink-300">
                Upload Photo
              </div>
            )}
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-xl shadow-md hover:bg-pink-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
