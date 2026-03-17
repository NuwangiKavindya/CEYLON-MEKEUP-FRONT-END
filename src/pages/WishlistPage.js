import React from "react";
import { useWishlist } from "../contexts/WishlistContext";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingCart, Heart, ArrowLeft } from "lucide-react";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const getImageUrl = (image) => {
    if (!image) return "assets/images/makeup-cosmetics.webp";
    if (image.startsWith("http")) return image;
    return `${API_BASE_URL}/uploads/${image}`;
  };

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-pink-600 hover:text-pink-700 font-medium mb-2 transition-colors"
            >
              <ArrowLeft size={18} className="mr-1" /> Back
            </button>
            <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
              My Wishlist <Heart className="text-pink-500 fill-pink-500" size={32} />
            </h1>
            <p className="text-gray-500 mt-2">Saved items you love and want to shop later.</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-pink-100">
            <span className="text-gray-600 font-medium">Total Items: </span>
            <span className="text-pink-600 font-bold text-xl">{wishlist.length}</span>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-16 text-center">
            <div className="bg-pink-100 size-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-pink-500" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Explore our collection and save your favorite products here to find them easily later.
            </p>
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-pink-200 hover:scale-105"
              onClick={() => navigate("/")}
            >
              Start Exploring
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "assets/images/makeup-cosmetics.webp";
                    }}
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-md"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-pink-600 font-extrabold text-xl mb-6">
                    Rs. {item.price.toLocaleString()}
                  </p>

                  <div className="mt-auto space-y-3">
                    <button
                      className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                      onClick={() => navigate("/cartPage")}
                    >
                      <ShoppingCart size={20} /> Add to Cart
                    </button>
                    <button
                      onClick={() => navigate(`/product`)} // Navigating to products is usually better if specific view isn't ready
                      className="w-full text-pink-600 font-semibold py-2 hover:bg-pink-50 rounded-xl transition-colors text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm italic">
            "Beauty begins the moment you decide to be yourself." — Coco Chanel
          </p>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
