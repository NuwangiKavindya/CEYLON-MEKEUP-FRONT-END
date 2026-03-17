// src/pages/AboutUs.jsx
import React from 'react';


function AboutUs() {
  return (
    <div className="min-h-screen bg-soft-cream py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[40px] shadow-sm border border-pink-100">
        <div className="text-center mb-12">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl font-bold playfair mb-6 text-gray-900">About GlowMuse</h1>
          <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
          <p>
            Welcome to <span className="text-pink-600 font-bold">GlowMuse</span>. We are passionate about redefining beauty through quality software and high-end cosmetic solutions that empower individuals to reveal their natural radiance.
          </p>
          <p>
            Our team is a collective of visionary creators, tech-enthusiasts, and beauty experts who believe that luxury should be accessible, ethical, and intelligent. Whether we're formulating a new product or crafting a digital experience, we always aim for absolute excellence.
          </p>
          <p>
            Thank you for being part of our journey. We look forward to helping you find your unique glow and reaching your beauty goals with confidence.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-pink-50 text-center">
          <p className="text-pink-400 italic">"Empowering beauty, one glow at a time."</p>
        </div>
      </div>
    </div>
  );
}


export default AboutUs;
