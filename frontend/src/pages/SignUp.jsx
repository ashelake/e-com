import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Signup } from "../redux/AuthReducer/Action";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSignup = (e) => {
    let payload = { name, email, password };
    dispatch(Signup(payload));
  };
  return (
    <Stack width="40%" m="auto" mt="3rem">
      <Input
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Button onClick={(e) => handleSignup(e)}>Sign Up</Button>
    </Stack>
  );
};

export default SignUp;
