import React from "react";
import { Routes, Route } from "react-router-dom";
import Singup from "./pages/Singup";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import MyStore from "./pages/MyStore";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const AllRoutes = () => {
  let token = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        <Route path="/sign" element={<Singup />} />
        <Route path="/" element={<Login />} />

        {token && <Route path="/prod" element={<Product />} />}
        {token && <Route path="/home" element={<Home />} />}

        {token && <Route path="/cat" element={<Category />} />}
        {token && <Route path="/cart" element={<Cart />} />}
        {token && <Route path="/profile" element={<Profile />} />}
        {token && <Route path="/store" element={<MyStore />} />}
        <Route path="*" element={<h1>Not Foound</h1>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
