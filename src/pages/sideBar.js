import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import MakeupUserProfile from "./profile";
import ManageCategory from "./manageCategory";

import ManageProducts from "./manageProduct";
import AddCategory from "./addCategory";
import AddMakeupProduct from "./addMakeupProduct";

export default function Sidebar() {
  const navigate = useNavigate();
  const { page } = useParams();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/"); 
  };

  const renderContent = () => {
    switch (page) {
      case "profile":
        return <MakeupUserProfile />;
      case "addCategory":
        return <AddCategory />;
      case "manageCategory":
        return <ManageCategory />;
      case "addMakeupProduct":
        return <AddMakeupProduct />;
      case "manageProduct":
        return <ManageProducts />;
      default:
        return <MakeupUserProfile />;
    }
  };

  return (
    // 👇 Parent container as flex row
    <div className="flex h-screen">
      
      {/* Sidebar on the left */}
      <div className="w-64 bg-pink-100 shadow-lg flex flex-col p-4">
        <h2 className="text-2xl font-bold text-pink-700 mb-6">GlowMuse</h2>
      
        <nav className="flex-1 space-y-2">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-pink-600 text-white" : "hover:bg-pink-200 text-pink-700"
              }`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/dashboard/addCategory"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-pink-600 text-white" : "hover:bg-pink-200 text-pink-700"
              }`
            }
          >
            Add Category
          </NavLink>

          <NavLink
            to="/dashboard/manageCategory"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-pink-600 text-white" : "hover:bg-pink-200 text-pink-700"
              }`
            }
          >
            Manage Category
          </NavLink>

          <NavLink
            to="/dashboard/addMakeupProduct"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-pink-600 text-white" : "hover:bg-pink-200 text-pink-700"
              }`
            }
          >
            Add Product
          </NavLink>

          <NavLink
            to="/dashboard/manageProduct"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-pink-600 text-white" : "hover:bg-pink-200 text-pink-700"
              }`
            }
          >
            Manage Product
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
        >
          Logout
        </button>
      </div>

      {/* Main content on the right */}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
