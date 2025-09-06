import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  // handle search submit
  const handleSearch = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await axios.get(`http://localhost:5000/api/products/search?query=${searchTerm}`);
      console.log("Search results:", res.data); 
      // 👉 මෙතනදි results state එකකට save කරලා SearchResults page එකකට redirect කරන්නත් පුළුවන්
      alert(`Found ${res.data.length} results for "${searchTerm}"`);
    } catch (err) {
      console.error(err);
      alert("Error fetching search results");
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a
            className="navbar-brand d-flex align-items-center"
            href="#"
            style={{ gap: '10px', marginLeft: '20px' }}
          >
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
            <span className="nav-link-logo">GlowMuse</span>
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Search Bar */}
          <form
            className="d-flex"
            role="search"
            style={{ flex: 1, maxWidth: "500px", margin: "0 auto" }}
            onSubmit={handleSearch}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: "1px solid #ffb6c1",   // Light pink border
                backgroundColor: "#ffe4ec",    // Very light pink bg
                color: "#cc3366",              // Dark pink text
              }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "#ffb6c1", // Light pink bg
                borderColor: "#ffb6c1",     // Light pink border
                color: "white",             // White text
              }}
            >
              Search
            </button>
          </form>

          {/* Login */}
          <a className="login-icon" href="/login">
            <div className="nav-icon">
              <svg
                style={{ color: 'black', opacity: '70%' }}
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
              </svg>
            </div>
          </a>

          {/* Cart */}
          <div className="nav-icon">
            <svg
              style={{ color: 'black', opacity: '70%' }}
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
