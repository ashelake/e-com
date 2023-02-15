import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import OrderDetails from "../pages/OrderDetails";
import Product from "../pages/Product";
import SignUp from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/:id" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>

      <Route
        path="/addproduct"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="/orderdetails"
        element={
          <PrivateRoute>
            <OrderDetails />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
