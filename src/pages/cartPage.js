import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);



  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <Link to="/" className="underline">Continue shopping</Link>
      </div>
    );
  }

  console.log("🛒 Cart data =>", cart); 

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border p-4 rounded">
            <img src={item.image} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={item.qty}
                min={1}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                className="w-16 px-2 py-1 border rounded"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 border rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button onClick={clearCart} className="px-3 py-2 border rounded">
          Clear cart
        </button>
        <div className="text-right">
          <div className="text-gray-600">Total</div>
          <div className="text-2xl font-bold">${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
