import React, { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../api/data";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    dateofbirth: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetchUserProfile();
        const { firstname, secondname, dateofbirth } = response.data;
        setFormData({
          firstname: firstname || "",
          secondname: secondname || "",
          dateofbirth: dateofbirth ? new Date(dateofbirth).toISOString().split('T')[0] : "",
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };
    getProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);
      alert("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Update error:", error);
      setMessage("Failed to update profile.");
    }
  };

  if (loading) return <div className="text-center p-20 text-pink-700">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">
          Edit Profile
        </h2>

        {message && (
          <div className="alert alert-danger mb-4 text-red-500">{message}</div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Second Name</label>
            <input
              type="text"
              name="secondname"
              value={formData.secondname}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your second name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-pink-400"
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
