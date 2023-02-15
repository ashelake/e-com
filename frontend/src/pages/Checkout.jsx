import { Button, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  let user = useSelector((state) => state.AuthReducer.user);
  const [address, setAddress] = useState();
  const userCarObj = user?.cart;

  const handleOrder = () => {
    let payload = {
      userId: user._id,
      cart: userCarObj,
      country: "India",
      address: address,
    };
    axios.post("http://localhost:8080/order", payload).then((res) => {
      console.log(res);
    });
  };
  return (
    <Stack>
      <Input
        placeholder="Enter Address"
        onChange={(e) => setAddress(e.target.value)}
      ></Input>
      <Button onClick={() => handleOrder()}>Place Order</Button>
    </Stack>
  );
};

export default Checkout;
