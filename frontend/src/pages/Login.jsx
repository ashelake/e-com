import React from "react";

import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/AuthReducer/Action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    let payload = { email, password };
    dispatch(LoginUser(payload)).then((res) => {
      navigate("/");
    });
  };
  return (
    <Stack width="40%" m="auto" mt="3rem">
      <Input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Button onClick={(e) => handleLogin(e)}>Login</Button>
    </Stack>
  );
};

export default Login;
