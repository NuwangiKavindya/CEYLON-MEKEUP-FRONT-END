import React from "react";

function SensitiveSkin() {
  const products = [
    {
      id: 1,
      name: "Gentle Hydrating Cleanser",
      img: "./assets/images/index.webp",
      desc: "Mild, soap-free cleanser that calms redness and irritation."
    },
    {
      id: 2,
      name: "Soothing Aloe Vera Gel",
      img: "./assets/images/c4c4913fa8957bccbdcc3bac276fd3db.jpg",
      desc: "Lightweight gel enriched with aloe vera for instant relief."
    },
    {
      id: 3,
      name: "Fragrance-Free Moisturizer",
      img: "./assets/images/sensitive/moisturizer.webp",
      desc: "Keeps skin hydrated without clogging pores or irritation."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 pb-24">
      
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./assets/images/sensitive-banner.jpg')" }}
      >
        <div className="bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-pink-700">Sensitive Skin Care</h1>
          <p className="mt-3 text-lg">
            Discover gentle, soothing products designed for delicate skin.
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Tips for Sensitive Skin</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use fragrance-free products</li>
          <li>Look for calming ingredients like Aloe Vera or Chamomile</li>
          <li>Always patch test new skincare</li>
          <li>Avoid harsh exfoliants or alcohol-based formulas</li>
          <li>Wear sunscreen daily</li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-6">Recommended Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-lg" />
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

export default SensitiveSkin;
