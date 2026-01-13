import React from "react";
import { useWishlist } from "../contexts/WishlistContext";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                width: "300px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
