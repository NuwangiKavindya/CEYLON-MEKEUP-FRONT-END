import React from "react";

function CombinationSkin() {
  const products = [
    {
      id: 1,
      name: "Balancing Foaming Cleanser",
      img: "./assets/images/combination/cleanser.jpg",
      desc: "Gently removes excess oil from T-zone while keeping cheeks hydrated."
    },
    {
      id: 2,
      name: "Oil-Free Hydrating Gel",
      img: "./assets/images/combination/moisturizer.jpg",
      desc: "Lightweight moisturizer that balances hydration without greasiness."
    },
    {
      id: 3,
      name: "Clay & Hydrating Mask Duo",
      img: "./assets/images/combination/mask.jpg",
      desc: "Clay mask for oily zones + hydrating mask for dry areas."
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./assets/images/combination-banner.jpg')" }}
      >
        <div className="bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-green-700">Combination Skin Care</h1>
          <p className="mt-3 text-lg">
            Balance is the key – hydrate dry areas and control shine on oily zones.
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Tips for Combination Skin</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use a gentle foaming cleanser that doesn’t strip the skin</li>
          <li>Apply lightweight gel moisturizers on oily zones</li>
          <li>Use richer creams on dry areas (like cheeks)</li>
          <li>Multi-mask: clay on T-zone, hydrating mask on cheeks</li>
          <li>Avoid harsh scrubs that irritate both dry and oily areas</li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Recommended Products</h2>
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
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CombinationSkin;
