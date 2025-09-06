import React from "react";

function DrySkin() {
  const products = [
    {
      id: 1,
      name: "Creamy Hydrating Cleanser",
      img: "./assets/images/dry/cleanser.jpg",
      desc: "Rich, creamy cleanser that removes dirt without stripping skin moisture."
    },
    {
      id: 2,
      name: "Intense Moisturizing Cream",
      img: "./assets/images/dry/moisturizer.jpg",
      desc: "Deeply hydrating moisturizer for long-lasting softness."
    },
    {
      id: 3,
      name: "Hydrating Face Serum",
      img: "./assets/images/dry/serum.jpg",
      desc: "Lightweight serum with hyaluronic acid to lock in moisture."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./assets/images/dry-banner.jpg')" }}
      >
        <div className="bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-pink-700">Dry Skin Care</h1>
          <p className="mt-3 text-lg">
            Pamper your skin with deeply hydrating and nourishing care.
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Tips for Dry Skin</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use gentle, creamy cleansers instead of foaming ones</li>
          <li>Apply moisturizer right after showering</li>
          <li>Look for ingredients like Hyaluronic Acid, Shea Butter, and Ceramides</li>
          <li>Avoid hot showers as they strip natural oils</li>
          <li>Use a humidifier in dry climates</li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-6">Recommended Products</h2>
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
              <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrySkin;
