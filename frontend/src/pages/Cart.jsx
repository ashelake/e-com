import { Text, Stack, Box, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQty } from "../redux/AppReducer/Action";
import { useNavigate } from "react-router-dom"
const Cart = () => {
  let user = useSelector((state) => state.AuthReducer.user);
  let product = useSelector((state) => state.AppReducer.products);
  const dispatch = useDispatch();
  console.log(product);
  const userCarObj = user?.cart;
  console.log(userCarObj);
  const navigate=useNavigate()
  let cart = product?.filter((el) => userCarObj[el._id] != null);
  console.log(cart);
  // userId, productId, price
  const handleReduce = (el) => {
    let payload = {
      userId: user._id,
      productId: el._id,
      price: el.price,
    };
  };
  const handleAdd = (el) => {
    let payload = {
      userId: user._id,
      productId: el._id,
      price: el.price,
    };
    dispatch(addQty(payload));
  };
  const handleCheck=()=>{
navigate("/checkout")
  }
  useEffect(() => {}, [handleAdd]);
  return (
    <Stack>
      <Box>
        {cart?.map((el) => (
          <Box display="flex" gap="1rem">
            <Text>Name: {el.name}</Text>
            <Text>Price: {el.price}</Text>
            <Button onClick={() => handleReduce(el)}>-</Button>
            <Text>{userCarObj[el._id]}</Text>
            <Button onClick={() => handleAdd(el)}>+</Button>
            <Text>{el.price * userCarObj[el._id]}</Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Heading>Total {userCarObj.total}</Heading>
      </Box>
      <Button onClick={()=>handleCheck()}>Checkout</Button>
    </Stack>
  );
};

export default Cart;
