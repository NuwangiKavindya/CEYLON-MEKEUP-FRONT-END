import React from 'react';
import './App.css';

import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/dashboard';
import UserDashboard from './pages/userDashboard';
import UpdateProduct from './pages/updateProduct';
import ManageProduct from './pages/manageProduct';
import UpdateCategory from './pages/updateCategory';
import ManageCategory from './pages/manageCategory';
import AddCategory from './pages/addCategory';
import Profile from './pages/profile';
import EditProfile from './pages/editProfile';
import Sidebar from './pages/sideBar';
import SensitiveSkin from './pages/sensitiveSkin';
import OilySkinCard from './pages/oilySkin';
import NormalSkin from './pages/normalSkin';
import DrySkin from './pages/drySkin';
import CombinationSkin from './pages/combinationSkin';
import SearchResults from './pages/searchResults';
import AddMakeupProduct from './pages/addMakeupProduct';
import CartPage from "./pages/cartPage";
import { WishlistProvider } from "./contexts/WishlistContext";  // ✅ WishlistProvider import එක
import WishlistPage from "./pages/WishlistPage"; // ✅ correct import
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";


import Navbar from './component/navbar';
import Footer from './component/footer';
import Example from './pages/Example';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🛒 import CartProvider
import { CartProvider } from "./contexts/CartContext";
import Payment from "./pages/Payment";

function App() {
    const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Router>
      {/* Wrap whole app with CartProvider + WishlistProvider */}
      <CartProvider>
        <WishlistProvider>
          <div>
            <Navbar />
            
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/product' element={<Product />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/userDashboard' element={<UserDashboard />} />
              <Route path='/examp/:page' element={<Example />} />
              <Route path='/updateProduct' element={<UpdateProduct />} />
              <Route path="/manageProduct" element={<ManageProduct />} />
              <Route path="/updateCategory/:idm" element={<UpdateCategory />} />
              <Route path="/manageCategory" element={<ManageCategory />} />
              <Route path="/addCategory" element={<AddCategory />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/editProfile' element={<EditProfile />} />
              <Route path='/sideBar' element={<Sidebar />} />
              <Route path='/sensitiveSkin' element={<SensitiveSkin />} />
              <Route path="/oilySkin" element={<OilySkinCard />} />
              <Route path="/normalSkin" element={<NormalSkin />} />
              <Route path="/drySkin" element={<DrySkin />} />
              <Route path="/combinationSkin" element={<CombinationSkin />} />
              <Route path="/searchResults" element={<SearchResults />} />
              <Route path='/addmakeupProduct' element={<AddMakeupProduct />} />
              <Route path="/cartPage" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} /> 
              

              <Route path="/dashboard/*" element={<Sidebar />} />
              <Route path="/dashboard/:page" element={<Sidebar />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
    

            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
