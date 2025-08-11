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
          <Route path="/updateCategory" element={<UpdateCategory />} />


          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
