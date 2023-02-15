import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <>
      {isAuth == true ? (
        <Box
          backgroundColor="gray"
          display="flex"
          justifyContent="space-between"
          height="4rem"
          fontSize="2xl"
        >
          <Link to="/AddProduct">Create Product</Link>
          <Link to="/">Homepage</Link> <Link to="/cart">Cart Page</Link>{" "}
          <Link to="/orderdetails">Order Details</Link>
        </Box>
      ) : (
        <Box
          backgroundColor="gray"
          display="flex"
          justifyContent="space-between"
          height="4rem"
          fontSize="2xl"
        >
          <Link to="/">Homepage</Link> <Link to="/cart">Cart Page</Link>{" "}
          <Link to="/signup">Signup</Link> <Link to="/login">Login</Link>
        </Box>
      )}
    </>
  );
};

export default Nav;
