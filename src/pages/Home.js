import React from "react";
import Category from "./../component/category";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Sparkles, ShieldCheck } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide" style={{ backgroundImage: 'url("./assets/images/carousel/carousel_hero_1.png")' }}>
                <div className="hero-overlay">
                  <div className="hero-content">
                    <span className="hero-subtitle">New Collection 2026</span>
                    <h1 className="hero-title">Reveal Your <span className="text-pink-500">Natural</span> Glow</h1>
                    <p className="hero-description">Discover premium makeup and skincare curated for your unique beauty. Experience the Muse difference.</p>
                    <button onClick={() => navigate("/product")} className="hero-btn">
                      Shop Now <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide" style={{ backgroundImage: 'url("./assets/images/carousel/carousel_hero_2.png")' }}>
                <div className="hero-overlay">
                  <div className="hero-content text-center mx-auto">
                    <span className="hero-subtitle">Bestsellers</span>
                    <h1 className="hero-title">Timeless Elegance</h1>
                    <p className="hero-description">Luxury essentials designed to enhance, not hide. Your skin, but better.</p>
                    <button onClick={() => navigate("/product")} className="hero-btn mx-auto">
                      Explore Bestsellers <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide" style={{ backgroundImage: 'url("./assets/images/carousel/carousel_hero_3.png")' }}>
                <div className="hero-overlay">
                  <div className="hero-content text-right ml-auto">
                    <span className="hero-subtitle">Ethereal Beauty</span>
                    <h1 className="hero-title">Flawless & <span className="text-pink-300">Airy</span></h1>
                    <p className="hero-description">Embrace the soft, delicate tones of our new floral collection. Light as a petal.</p>
                    <button onClick={() => navigate("/product")} className="hero-btn ml-auto">
                      Discover More <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-soft-cream py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 justify-center">
            <Star className="text-pink-500" size={32} />
            <div>
              <h4 className="font-bold mb-0">Premium Quality</h4>
              <p className="text-sm text-gray-500 mb-0">Dermatologically tested products</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Sparkles className="text-pink-500" size={32} />
            <div>
              <h4 className="font-bold mb-0">Natural Glow</h4>
              <p className="text-sm text-gray-500 mb-0">Formulated for radiance</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <ShieldCheck className="text-pink-500" size={32} />
            <div>
              <h4 className="font-bold mb-0">Cruelty Free</h4>
              <p className="text-sm text-gray-500 mb-0">100% ethical sourcing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 playfair">Curated Collections</h2>
            <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
          </div>
          <Category />
        </div>
      </section>

      {/* Featured Banner */}
      <section className="featured-banner">
        <div className="banner-bg" style={{ backgroundImage: 'url("./assets/images/nature-flower-plant-summer.jpg")' }}></div>
        <div className="banner-content">
          <h2 className="banner-heading">Say Hello To Your New Glow</h2>
          <div className="featured-grid">
            <div className="featured-card group" onClick={() => navigate("/product")}>
              <img src="./assets/images/home/70d6f42938ea6d1ed7e6822f67fbd888.jpg" alt="Hair Care" />
              <div className="featured-card-overlay">
                <span>Salon-Soft Hair</span>
                <p>In Just One Use</p>
              </div>
            </div>
            <div className="featured-card group" onClick={() => navigate("/product")}>
              <img src="./assets/images/home/c184b7894c0040fca45b6da397ef0f6a.jpg" alt="Skincare" />
              <div className="featured-card-overlay">
                <span>Radiant Skin</span>
                <p>Morning Rituals</p>
              </div>
            </div>
            <div className="featured-card group" onClick={() => navigate("/product")}>
              <img src="./assets/images/category/KJC_GLK_25_CP_486_V2_WS.webp" alt="Beauty" />
              <div className="featured-card-overlay">
                <span>Essential Beauty</span>
                <p>Daily Favorites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Type Section */}
      <section className="py-24 bg-white px-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Personalized Care</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 playfair text-gray-900">Discover Your Perfect Match</h2>
            <p className="text-gray-500 text-lg">Bespoke skincare solutions tailored precisely to your skin's unique journey. Embrace the glow that's uniquely yours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { name: "Sensitive & Delicate", subtitle: "Calming Relief", img: "sensitive_skin_premium.png", path: "/sensitiveSkin" },
              { name: "Oily & Acne-Prone", subtitle: "Clear & Matte", img: "oily_skin_premium.png", path: "/oilySkin" },
              { name: "Balanced", subtitle: "Everyday Glow", img: "balanced_skin_premium.png", path: "/normalSkin" },
              { name: "Dry & Dehydrated", subtitle: "Deep Hydration", img: "dry_skin_premium.png", path: "/drySkin" },
              { name: "Combination", subtitle: "Targeted Care", img: "combo_skin_premium.png", path: "/combinationSkin" },
            ].map((skin) => (
              <div
                key={skin.name}
                onClick={() => navigate(skin.path)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-4 shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* elegant dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* image */}
                  <img 
                    src={`./assets/images/${skin.img}`} 
                    alt={skin.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    onError={(e) => {
                      // Fallback to original images
                      const fallbacks = {
                        "Sensitive & Delicate": "Sensitive_Skin.webp",
                        "Oily & Acne-Prone": "Oily_Skin.webp",
                        "Balanced": "Normal_Skin.webp",
                        "Dry & Dehydrated": "Dry_Skin.webp",
                        "Combination": "Combination_Skin (1).webp"
                      };
                      if (!e.target.src.includes(fallbacks[skin.name])) {
                        e.target.src = `./assets/images/${fallbacks[skin.name]}`;
                      }
                    }}
                  />
                  
                  {/* text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="text-pink-300 text-xs font-bold uppercase tracking-[0.15em] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{skin.subtitle}</span>
                    <h4 className="text-white font-playfair text-xl md:text-2xl font-bold leading-tight">{skin.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
