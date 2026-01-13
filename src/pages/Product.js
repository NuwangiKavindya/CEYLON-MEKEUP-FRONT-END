import React from "react";
import Footer from "../component/footer";
import { useCart } from "../contexts/CartContext";  
import { FaShoppingCart, FaHeart } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom"; 
import { useWishlist } from "../contexts/WishlistContext";

import './Home.css';

function Product (){
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();

  return (
    <div>
      <div>
        <h1 className="heading" style={{textAlign:"center"}}>Perfumes</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">

          {/* Product 1 */}
          <div className="card" style={{ width: "350px" }}>
            <img 
              className="w-full h-48 object-cover" 
              src="assets/images/perfume/parfum1.webp"  
              alt="Card image"  
              style={{width:"100%" ,height:"400px"}} 
            />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">
                Some example text some example text. John Doe is an architect and engineer
              </p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 1,
                    name: "Innocence",
                    image: "assets/images/perfume/parfum1.webp",
                    price: 100
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="font-bold text-xl mb-2">See Profile</a>
            </div>
          </div>

          {/* Product 2 */}
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/perfume/parfume2.webp" alt="Card image"  style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 2,
                    name: "Innocence",
                    image: "assets/images/perfume/parfume2.webp",
                    price: 120
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="font-bold text-xl mb-2">See Profile</a>
            </div>
          </div>

          {/* Product 3 */}
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/perfume/parfume3.webp" alt="Card image" style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 3,
                    name: "Innocence",
                    image: "assets/images/perfume/parfume3.webp",
                    price: 130
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>

          {/* Product 4 */}
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/perfume/parfume4.jpg" alt="Card image" style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 4,
                    name: "Innocence",
                    image: "assets/images/perfume/parfume4.jpg",
                    price: 140
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>

          {/* Product 5 */}
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/perfume/parfum5.webp" alt="Card image" style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 5,
                    name: "Innocence",
                    image: "assets/images/perfume/parfum5.webp",
                    price: 150
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>

          {/* Product 6 */}
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/perfume/parfum6.jpg" alt="Card image" style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 6,
                    name: "Innocence",
                    image: "assets/images/perfume/parfum6.jpg",
                    price: 160
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>

          {/* Product 7 */}
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/perfume/parfume7.webp" alt="Card image" style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 7,
                    name: "Innocence",
                    image: "assets/images/perfume/parfume7.webp",
                    price: 170
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="heading-lipstic" style={{textAlign:"center"}}>Lipstic</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
          <div className="card" style={{width:"350px"}}>
            <img src="assets/images/lipstic/61n9bUmgqaL.jpg" alt="Card image" style={{width:"100%" ,height:"400px"}} />
            <div className="card-body">
              <h4 className="card-title">Innocence</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <FaShoppingCart 
                style={{cursor:"pointer", fontSize:"24px", color:"#333", marginRight:"10px"}} 
                onClick={() => navigate("/cartPage")} 
              />
              <FaHeart 
                style={{cursor:"pointer", fontSize:"24px", color:"red"}} 
                onClick={() => {
                  addToWishlist({
                    id: 8,
                    name: "Innocence",
                    image: "assets/images/lipstic/61n9bUmgqaL.jpg",
                    price: 180
                  });
                  navigate("/wishlist");
                }}
              />
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>

          {/* Other Lipstick cards can be updated same way with FaHeart */}
        </div>
      </div>
    </div>
  );
}

export default Product;
