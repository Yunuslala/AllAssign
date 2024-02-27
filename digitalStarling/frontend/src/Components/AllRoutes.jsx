import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import Landing from './Landing';
import Login from './Login';
import Edit from './Edit';
import Cart from './Cart';
import ProductPage from './ProductPage';


const AllRoutes = () => {
  const [clickFor,setclickFor]=useState(false);

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default AllRoutes;
