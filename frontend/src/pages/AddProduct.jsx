import { Button, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  // name, description, price, category, images: pictures
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCat] = useState("");
  const [pictures, setImg] = useState("");
  const handlePost = (e) => {
    e.preventDefault();
    let payload = {
      name,
      description,
      price,
      category,
      pictures,
    };

    axios.post("http://localhost:8080/products/create", payload).then((res) => {
      console.log(res);
    });
  };
  return (
    <Stack>
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
      ></Input>
      <Input
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      ></Input>
      <Input
        placeholder="category"
        onChange={(e) => setCat(e.target.value)}
      ></Input>
      <Input
        placeholder="Image"
        onChange={(e) => setImg(e.target.value)}
      ></Input>
      <Button onClick={(e) => handlePost(e)}>Submit</Button>
    </Stack>
  );
};

export default AddProduct;
