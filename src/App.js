import React from 'react';
import './App.css';

// 🛒 import CartProvider
import { CartProvider } from "./contexts/CartContext";
import Payment from "./pages/Payment";


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
import CustomerDashboard from "./pages/CustomerDashboard";
// import StateCard from "./component/StateCard";

import Navbar from './component/navbar';
import Footer from './component/footer';
import Example from './pages/Example';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" replace />;
};


function App() {



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
              <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
              <Route path='/userDashboard' element={<ProtectedRoute element={<UserDashboard />} />} />
              <Route path='/examp/:page' element={<Example />} />
              <Route path='/updateProduct' element={<ProtectedRoute element={<UpdateProduct />} />} />
              <Route path="/manageProduct" element={<ProtectedRoute element={<ManageProduct />} />} />
              <Route path="/updateCategory/:idm" element={<ProtectedRoute element={<UpdateCategory />} />} />
              <Route path="/manageCategory" element={<ProtectedRoute element={<ManageCategory />} />} />
              <Route path="/addCategory" element={<ProtectedRoute element={<AddCategory />} />} />
              <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
              <Route path='/editProfile' element={<ProtectedRoute element={<EditProfile />} />} />
              <Route path='/sideBar' element={<ProtectedRoute element={<Sidebar />} />} />
              <Route path='/sensitiveSkin' element={<SensitiveSkin />} />
              <Route path="/oilySkin" element={<OilySkinCard />} />
              <Route path="/normalSkin" element={<NormalSkin />} />
              <Route path="/drySkin" element={<DrySkin />} />
              <Route path="/combinationSkin" element={<CombinationSkin />} />
              <Route path="/searchResults" element={<SearchResults />} />
              <Route path='/addmakeupProduct' element={<ProtectedRoute element={<AddMakeupProduct />} />} />
              <Route path="/cartPage" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />


              <Route path="/dashboard/*" element={<ProtectedRoute element={<Dashboard />} />} />
              <Route path="/dashboard/:page" element={<ProtectedRoute element={<Sidebar />} />} />
              <Route path="/payment" element={<ProtectedRoute element={<Payment />} />} />
              <Route path="/dashboard" element={<CustomerDashboard />} />


            </Routes>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
