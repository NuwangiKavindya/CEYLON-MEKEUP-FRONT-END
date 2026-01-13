// Payment.jsx
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      "::placeholder": { color: "#a0aec0" },
    },
    invalid: { color: "#e53e3e" },
  },
};

function CheckoutForm({ amount, onCancel }) {
  const stripe = useStripe();
  const elements = useElements();

  const [cardHolderName, setCardHolderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    try {
      // 1️⃣ Create PaymentIntent on backend
      const res = await fetch("http://localhost:5001/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await res.json();

      // 2️⃣ Confirm Card Payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: { name: cardHolderName },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        setSucceeded(true);
      }
    } catch (err) {
      console.error(err);
      setError("Payment failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#6772e5", marginBottom: "25px" }}>
          💳 Complete Payment
        </h2>

        {succeeded ? (
          <p style={{ color: "green", textAlign: "center", fontWeight: "600" }}>
            ✅ Payment Successful!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {/* Card Holder Name */}
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccd0d5",
                fontSize: "16px",
              }}
            />

            {/* Card Number */}
            <label style={{ fontWeight: "600" }}>Card Number</label>
            <CardNumberElement options={CARD_OPTIONS} style={{ padding: "12px" }} />

            {/* Expiry Date */}
            <label style={{ fontWeight: "600" }}>Expiry Date</label>
            <CardExpiryElement options={CARD_OPTIONS} style={{ padding: "12px" }} />

            {/* CVC */}
            <label style={{ fontWeight: "600" }}>CVC</label>
            <CardCvcElement options={CARD_OPTIONS} style={{ padding: "12px" }} />

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button
                type="submit"
                disabled={!stripe || loading}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#6772e5",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {loading ? "Processing…" : `Confirm $${((amount || 0) / 100).toFixed(2)}`}
              </button>

              <button
                type="button"
                onClick={onCancel}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#e53e3e",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default function Payment({ amount, onCancel }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onCancel={onCancel} />
    </Elements>
  );
}
