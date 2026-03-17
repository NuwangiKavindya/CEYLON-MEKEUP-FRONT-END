import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// 🛒 import CartProvider
import { CartProvider } from "./contexts/CartContext";
import Payment from "./pages/Payment";


import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';

import UpdateProduct from './pages/updateProduct';
import ManageProduct from './pages/manageProduct';
import UpdateCategory from './pages/updateCategory';
import ManageCategory from './pages/manageCategory';
import AddCategory from './pages/addCategory';
import Profile from './pages/profile';
import EditProfile from './pages/editProfile';

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

import CustomerDashboard from "./pages/CustomerDashboard";
// import StateCard from "./component/StateCard";

import Navbar from './component/navbar';
import Footer from './component/footer';
import Example from './pages/Example';
import DashboardLayout from './pages/DashboardLayout';

import AdminOverview from './pages/AdminOverview';

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" replace />;
};

const DashboardRoutes = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const role = userData.role || "user";

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={role === "admin" ? <AdminOverview /> : <CustomerDashboard />} />
        <Route path="profile" element={<Profile />} />
        {/* Admin only routes */}
        {role === "admin" && (
          <>
            <Route path="addCategory" element={<AddCategory />} />
            <Route path="manageCategory" element={<ManageCategory />} />
            <Route path="addMakeupProduct" element={<AddMakeupProduct />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="updateProduct" element={<UpdateProduct />} />
            <Route path="updateCategory/:idm" element={<UpdateCategory />} />
          </>
        )}
      </Routes>
    </DashboardLayout>
  );
};

function App() {
  return (
    <Router>
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

              {/* Holistic Dashboard Routing */}
              <Route path='/dashboard/*' element={<ProtectedRoute element={<DashboardRoutes />} />} />

              <Route path='/sensitiveSkin' element={<SensitiveSkin />} />
              <Route path="/oilySkin" element={<OilySkinCard />} />
              <Route path="/normalSkin" element={<NormalSkin />} />
              <Route path="/drySkin" element={<DrySkin />} />
              <Route path="/combinationSkin" element={<CombinationSkin />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/cartPage" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/payment" element={<ProtectedRoute element={<Payment />} />} />
            </Routes>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
