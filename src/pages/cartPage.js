import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const getImageUrl = (image) => {
    if (!image) return "assets/images/makeup-cosmetics.webp";
    if (image.startsWith("http")) return image;
    return `${API_BASE_URL}/uploads/${image}`;
  };

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <div className="mb-6">
          <svg className="mx-auto h-24 w-24 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/"
          className="btn btn-primary bg-pink-600 border-none hover:bg-pink-700 px-8 py-3 rounded-full text-lg font-semibold transition"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10 max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">My Shopping Cart</h2>
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="divide-y">
          {cart.map((item) => (
            <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50 transition">
              <img
                src={getImageUrl(item.image)}
                alt={item.name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-sm"
              />
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h4>
                <div className="text-pink-600 font-bold text-lg">Rs. {item.price.toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-lg">
                <button
                  onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                  className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:text-pink-600"
                >
                  -
                </button>
                <span className="font-bold text-gray-800 min-w-[20px] text-center">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:text-pink-600"
                >
                  +
                </button>
              </div>
              <div className="text-xl font-bold text-gray-800 sm:w-32 text-center sm:text-right">
                Rs. {(item.price * item.qty).toLocaleString()}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 transition p-2"
                title="Remove item"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={clearCart}
          className="text-gray-500 hover:text-red-600 font-medium transition flex items-center gap-2"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear Shopping Cart
        </button>
        <div className="bg-white p-8 rounded-xl border shadow-sm w-full sm:w-auto text-right min-w-[300px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium text-lg">Subtotal</span>
            <span className="text-2xl font-bold text-gray-800">Rs. {total.toLocaleString()}</span>
          </div>
          <p className="text-gray-400 text-sm mb-6 Italics">Shipping and taxes calculated at checkout</p>
          <button
            className="w-full btn btn-primary bg-pink-600 border-none hover:bg-pink-700 py-4 rounded-xl text-xl font-bold transition shadow-lg shadow-pink-200"
            onClick={() => navigate("/payment", { state: { amount: total } })}
          >
            Checkout with Card
          </button>
        </div>
      </div>
    </div>
  );
}
