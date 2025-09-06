import React from "react";

function NormalSkin() {
  const products = [
    {
      id: 1,
      name: "Gentle Daily Cleanser",
      img: "/assets/images/normal/cleanser.webp",
      desc: "Maintains skin’s natural balance without stripping moisture."
    },
    {
      id: 2,
      name: "Lightweight Hydrating Cream",
      img: "/assets/images/normal/moisturizer.jpg",
      desc: "Keeps skin soft, smooth, and naturally radiant."
    },
    {
      id: 3,
      name: "Sunscreen SPF 30",
      img: "/assets/images/normal/sunscreen.webp",
      desc: "Protects skin from harmful UV rays while keeping it healthy."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/normal-banner.jpg')" }}
      >
        <div className="bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-blue-700">Normal Skin Care</h1>
          <p className="mt-3 text-lg">
            Keep your skin naturally healthy and balanced with the right care.
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tips for Normal Skin</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain a consistent skincare routine</li>
          <li>Use a gentle cleanser and lightweight moisturizer</li>
          <li>Exfoliate once or twice a week</li>
          <li>Stay hydrated and eat a balanced diet</li>
          <li>Always apply sunscreen during the day</li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Recommended Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NormalSkin;
