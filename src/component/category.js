import React from "react";

import "./category.css";

function Category () {
    return(
      <div>
        <h1 class="heading"> Chosen For You</h1>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
          <a href="/product">

           <div class="card" style={{width:"250px"}}>
                <img class="card-img-top" img src="assets/images/perfume/parfum1.webp" alt="Card image" style={{width:"100%" ,height:"200px"}} />
            <div class="card-body">
              <p class="card-text"><center>Perfumes</center></p>
            </div>
          </div>
          </a>
          
          
         <a href="/product">

          <div class="card" style={{width:"250px"}}>
            <img class="card-img-top" img src="./assets/images/makeup-cosmetics.webp" alt="Card image" style={{width:"100%" ,height:"200px"}} />
            <div class="card-body">
              <p class="card-text"><center>Makeup</center></p>
              </div>
            </div>
         </a>
          
          <a href="/product">
            <div class="card" style={{width:"250px"}}>
              <img class="card-img-top" src="./assets/images/caro2.webp" alt="Card image" style={{width:"100%" ,height:"200px"}} />
              <div class="card-body">
                <p class="card-text"><center>Face</center></p>
                </div>
              </div>
          </a>

          
          <a href="/product">
            <div class="card" style={{width:"250px"}}>
            <img class="card-img-top" src="./assets/images/category/cat1.jpg" alt="Card image" style={{width:"100%" ,height:"200px"}} />
            <div class="card-body">
              <p class="card-text"><center>Bath and Body</center></p>
              </div>
            </div>
            </a>
          
         <a href="/product">
         <div class="card" style={{width:"250px"}}>
          <img class="card-img-top" src="./assets/images/category/cat2.webp" alt="Card image" style={{width:"100%" ,height:"200px"}} />
          <div class="card-body">
            <p class="card-text"><center>Men</center></p>
            </div>
          </div>
         </a>
          
          <a href="/product">
            <div class="card" style={{width:"250px"}}>
            <img class="card-img-top" src="./assets/images/category/cat3.jpg" alt="Card image" style={{width:"100%" ,height:"200px"}} />
            <div class="card-body">
              <p class="card-text"><center> Accessoires</center></p>
              </div>
          </div>
          
          </a>

          <a href="/product">
          <div class="card" style={{width:"250px"}}>
          <img class="card-img-top" src="./assets/images/category/cat4.jpg" alt="Card image" style={{width:"100%" ,height:"200px"}} />
          <div class="card-body">
            <p class="card-text"><center>Health & Care</center></p>
            </div>
          </div>
          
          </a>

           <a href="/product">
          <div class="card" style={{width:"250px"}}>
          <img class="card-img-top" src="./assets/images/category/Beauty_gadgets.jpg" alt="Card image" style={{width:"100%" ,height:"200px"}} />
          <div class="card-body">
            <p class="card-text"><center>Tools and Device</center></p>
            </div>
          </div>
          
          </a>

             <a href="/product">
          <div class="card" style={{width:"250px"}}>
          <img class="card-img-top" src="./assets/images/category/foot-care.jpg" alt="Card image" style={{width:"100%" ,height:"200px"}} />
          <div class="card-body">
            <p class="card-text"><center>Foot Care</center></p>
            </div>
          </div>
          
          </a>


             <a href="/product">
          <div class="card" style={{width:"250px"}}>
          <img class="card-img-top" src="./assets/images/category/GettyImages-182175749-5b26db815a2449b29b1b4e4f1c76a0b7.jpg" alt="Card image" style={{width:"100%" ,height:"200px"}} />
          <div class="card-body">
            <p class="card-text"><center>Sunscreen (SPF)</center></p>
            </div>
          </div>
          
          </a>
          
        </div>
      </div>
    );

}
export default Category;