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
import AddProduct from './pages/addProduct';
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









import Navbar from './component/navbar';
import Footer from './component/footer';

import Example from './pages/Example';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
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
          <Route path="/addProduct" element={<AddProduct />} />
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




          <Route path="/dashboard/*" element={
            <Sidebar />
          }
          />

          <Route path="/dashboard/:page" element={
            <Sidebar />
          }
          />

      

          




          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
