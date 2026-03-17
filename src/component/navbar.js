import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import './navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    try {
      const res = await axios.get(`http://localhost:5001/api/products/search?query=${searchTerm}`);
      navigate(`/search?query=${searchTerm}`, { state: { results: res.data, query: searchTerm } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="navbar-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <div className="relative">
              <img
                src="/assets/images/logo.png"
                alt="GlowMuse Logo"
                className="h-12 w-12 object-contain transition-transform group-hover:rotate-12"
              />
              <div className="absolute -inset-1 bg-pink-200 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-pink-600 transition-colors playfair">
              GlowMuse
            </span>
          </Link>

          {/* Search Bar - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full group">
              <input
                type="text"
                className="w-full bg-white/50 border border-pink-100 rounded-2xl py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-sm placeholder:text-gray-400"
                placeholder="Search beauty essentials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
            </form>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-6">
            <Link to="/login" className="text-gray-600 hover:text-pink-600 transition-colors p-2 rounded-xl hover:bg-pink-50" title="Profile">
              <User size={24} strokeWidth={1.5} />
            </Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-red-500 transition-colors p-2 rounded-xl hover:bg-red-50 relative group" title="Wishlist">
              <Heart size={24} strokeWidth={1.5} className="group-hover:fill-current" />
            </Link>
            <button
              onClick={() => navigate("/cartPage")}
              className="text-gray-600 hover:text-pink-600 transition-colors p-2 rounded-xl hover:bg-pink-50"
              title="Shopping Bag"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-50 px-4 pt-2 pb-6 space-y-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              className="w-full bg-pink-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-pink-400"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </form>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/product" className="py-3 px-4 bg-pink-50 rounded-xl text-center font-medium text-pink-700">Shop All</Link>
            <Link to="/about" className="py-3 px-4 bg-gray-50 rounded-xl text-center font-medium text-gray-700">About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

