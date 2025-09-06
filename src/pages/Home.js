import React from "react";
import Footer from "../component/footer";
import Product from "./Product";
import Categry from "./../component/category";
import './Home.css';
import { useNavigate } from "react-router-dom";







function Home() {
  const navigate = useNavigate(); 
  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Video Section */}
      <div
        id="demo"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          
      
        }}
      >

    
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Video Section - Fullscreen */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100vh",
                  overflow: "hidden",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // ensures video fills without distortion
                  }}
                >
                  <source src="assets/videos/9698152-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

          </div>
        </div>
      </div>

      <div style={{ marginTop: '35px' }}></div>

      {/* Category Section */}
      <Categry />

      <div style={{ marginTop: '30px' }}></div>



      {/* Glow Section with Blurred Background */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '40px 0',
        }}
      >
        {/* Blurred background image */}
        <div
          style={{
            backgroundImage: 'url("./assets/images/nature-flower-plant-summer.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        ></div>

        





        {/* Foreground content */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ marginTop: '35px' }}>
            <p className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
              Say Hello To Your New Glow
            </p>
          </div>

          <div style={{ marginTop: '35px' }}></div>

          <div className="card-container">
            <div className="card-style">
              <img
                src="./assets/images/home/70d6f42938ea6d1ed7e6822f67fbd888.jpg"
                className="card-image"
                alt="Card 1"
              />
              <div className="card-content txt-align-left left-20px">
                FRIZZ-FREE, SALON-SOFT HAIR<br />
                IN JUST ONE USE?
              </div>
            </div>

            <div className="card-style">
              <img
                src="./assets/images/home/c184b7894c0040fca45b6da397ef0f6a.jpg"
                className="card-image"
                alt="Card 2"
              />
              <div className="card-content text-align-right right-20px">
                FRIZZ-FREE, SALON-SOFT HAIR<br />
                IN JUST ONE USE?
              </div>
            </div>
          </div>

          <div style={{ marginTop: '35px' }}></div>

          <div className="card-style">
            <img
              src="./assets/images/category/KJC_GLK_25_CP_486_V2_WS.webp"
              className="card-image"
              alt="Card 3"
            />
            <div className="card-content text-align-left left-20px" style={{ marginTop: '355px' }}>
              FRIZZ-FREE, SALON-SOFT HAIR<br />
              IN JUST ONE USE?
            </div>
          </div>
        </div>
      </div>

      {/* Skin Care Concern Section */}
      <div>
        <p className="text-5xl md:text-3xl font-semibold text-center mt-10 mb-5 pt-6 text-gray-800 tracking-wide">
           Shop by Skin Type and Concern

        </p>
             <div style={{ marginTop: '10px' }}></div>


        <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',   // space between cards
    padding: '20px',
  }}
>
  {/* Card 1 */}
  <div

  onClick={() => navigate("/sensitiveSkin")}
    
    style={{

      width: '250px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}
  >
    <img
      src="./assets/images/Sensitive_Skin.webp"
      alt="Sensitive Skin"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
    <div
      style={{
        padding: '12px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
        borderTop: '1px solid #eee',
      }}
    >
      Sensitive Skin
    </div>
  </div>

  {/* Card 2 */}
  <div
  onClick={() => navigate("/oilySkin")}
    style={{
      width: '250px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}
  >
    <img
      src="./assets/images/Oily_Skin.webp"
      alt="Oily Skin"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
    <div
      style={{
        padding: '12px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
        borderTop: '1px solid #eee',
      }}
    >
      Oily Skin
    </div>
  </div>

  {/* Card 3 */}
  <div
  onClick={() => navigate("/normalSkin")}
    style={{
      width: '250px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}
  >
    <img
      src="./assets/images/Normal_Skin.webp"
      alt="Normal Skin"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
    <div
      style={{
        padding: '12px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
        borderTop: '1px solid #eee',
      }}
    >
      Normal Skin
    </div>
  </div>

  {/* Card 4 */}
  <div
  onClick={() => navigate("/drySkin")}
    style={{
      width: '250px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}
  >
    <img
      src="./assets/images/Dry_Skin.webp"
      alt="Dry Skin"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
    <div
      style={{
        padding: '12px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
        borderTop: '1px solid #eee',
      }}
    >
      Dry Skin
    </div>
  </div>

  {/* Card 5 */}
  <div
  onClick={() => navigate("/combinationSkin")}
    style={{
      width: '250px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}
  >
    <img
src="./assets/images/Combination_Skin (1).webp"
      alt="Combination Skin"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
    <div
      style={{
        padding: '12px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
        borderTop: '1px solid #eee',
      }}
    >
      Combination Skin
    </div>
  </div>
</div>

        
      </div>

    </div>
  );
}

export default Home;
