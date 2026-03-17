import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import './Home.css'; // Reusing Home.css for grid styles

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const getImageUrl = (image) => {
    if (!image) return "assets/images/logo.png";
    if (image.startsWith("http")) return image;
    return `${API_BASE_URL}/uploads/${image}`;
  };

  const [results, setResults] = useState(location.state?.results || []);
  const [loading, setLoading] = useState(!location.state?.results && query);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If results are not in state (e.g. page refresh), fetch them
    if (!location.state?.results && query) {
      const fetchResults = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`http://localhost:5000/api/products/search?query=${query}`);
          setResults(res.data);
          setError(null);
        } catch (err) {
          console.error("Error fetching search results:", err);
          setError("Failed to fetch search results. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      fetchResults();
    } else if (location.state?.results) {
      setResults(location.state.results);
      setLoading(false);
    }
  }, [query, location.state]);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4" style={{ textAlign: "center", color: "#cc3366" }}>
        Search Results for: <span style={{ fontStyle: "italic" }}>"{query}"</span>
      </h2>

      {loading && (
        <div className="text-center mt-5">
          <div className="spinner-border text-pink" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Searching for products...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && results.length === 0 && (
        <div className="text-center mt-5">
          <h3>No products found matching "{query}"</h3>
          <p className="text-muted">Try using different keywords or check your spelling.</p>
          <button className="btn btn-outline-danger mt-3" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
          {results.map((product) => (
            <div className="col" key={product._id || product.id}>
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: "12px", overflow: "hidden" }}>
                <img
                  className="card-img-top w-full object-cover"
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  style={{ height: "300px", cursor: "pointer" }}
                  onClick={() => navigate(`/product/${product._id || product.id}`)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/logo.png";
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate" title={product.name}>{product.name}</h5>
                  <p className="card-text text-muted small flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.description || "No description available."}
                  </p>
                  <p className="fw-bold fs-5 text-pink mb-2">Rs. {product.price}</p>
                  <div className="d-flex align-items-center gap-3">
                    <FaShoppingCart
                      style={{ cursor: "pointer", fontSize: "22px", color: "#333" }}
                      onClick={() => {
                        addToCart({
                          id: product._id || product.id,
                          name: product.name,
                          image: product.image,
                          price: product.price
                        });
                        navigate("/cartPage");
                      }}
                      title="Add to Cart"
                    />
                    <FaHeart
                      style={{ cursor: "pointer", fontSize: "22px", color: "red" }}
                      onClick={() => {
                        addToWishlist({
                          id: product._id || product.id,
                          name: product.name,
                          image: product.image,
                          price: product.price
                        });
                        navigate("/wishlist");
                      }}
                      title="Add to Wishlist"
                    />
                    <button
                      className="btn btn-sm btn-link p-0 text-decoration-none ms-auto fw-semibold"
                      style={{ color: "#cc3366" }}
                      onClick={() => navigate(`/product/${product._id || product.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
