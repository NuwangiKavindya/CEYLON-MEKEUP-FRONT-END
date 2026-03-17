import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import { fetchProducts } from "../api/data";
import { Star, ShoppingBag, Heart, Loader2, Sparkles } from "lucide-react";
import './ProductPage.css';

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const getImageUrl = (image) => {
    if (!image) return "assets/images/makeup-cosmetics.webp";
    if (image.startsWith("http")) return image;
    return `${API_BASE_URL}/uploads/${image}`;
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts(selectedCategory);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [selectedCategory]);

  return (
    <div className="product-page-container">
      {/* Page Header */}
      <div className="page-header px-4">
        <div className="max-w-7xl mx-auto py-16 text-center">
          <h1 className="text-5xl font-bold playfair mb-4 capitalize">
            {selectedCategory ? `${selectedCategory} Collection` : "Our Bestsellers"}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our curated collection of premium beauty products designed for every skin type and need.
          </p>
          <div className="w-24 h-1 bg-pink-200 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
            <Loader2 className="animate-spin text-pink-500 mb-4" size={48} />
            <p className="text-lg font-medium tracking-widest uppercase">Curating Excellence...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
            <p className="text-red-500 text-xl font-medium">{error}</p>
            <button onClick={() => window.location.reload()} className="mt-4 text-pink-600 font-bold hover:underline">Try Again</button>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-pink-50 rounded-3xl border border-pink-100">
            <Sparkles className="mx-auto mb-4 text-pink-300" size={48} />
            <p className="text-gray-500 text-xl font-medium">No products found in this collection.</p>
            <button onClick={() => navigate("/product")} className="mt-4 text-pink-600 font-bold hover:underline">View All Products</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => (
              <div className="product-card group" key={product._id || product.id}>
                {/* Image Area */}
                <div className="product-image-wrapper relative overflow-hidden rounded-3xl bg-gray-50 shadow-sm border border-gray-100 aspect-[4/5]">
                  <img
                    className="product-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "assets/images/makeup-cosmetics.webp";
                    }}
                  />

                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => addToWishlist(product)}
                      className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-md active:scale-95"
                    >
                      <Heart size={20} />
                    </button>
                    <button
                      onClick={() => {
                        addToCart({
                          id: product._id || product.id,
                          name: product.name,
                          image: product.image,
                          price: product.price
                        });
                        navigate("/cartPage");
                      }}
                      className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-md active:scale-95"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="py-6 px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">{product.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold transform -translate-y-px">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">High-performance beauty essential for professional results.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold text-pink-600">Rs. {product.price.toLocaleString()}</span>
                    <button
                      onClick={() => navigate(`/product?id=${product._id || product.id}`)}
                      className="text-sm font-bold text-gray-400 hover:text-pink-600 transition-colors uppercase tracking-widest border-b border-transparent hover:border-pink-200 pb-1"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
