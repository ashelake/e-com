import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/AppReducer/Action";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.AppReducer.products);
  const navigate = useNavigate();
  // console.log(product);

  const handleView = (id) => {
    console.log(id);
    navigate(`/${id}`);
  };
  useEffect(() => {
    
    dispatch(getProducts());
  }, []);
  return (
    <Stack>
      <Heading>Products</Heading>
      <Box display="flex" flexFlow="wrap" gap="1rem">
        {product?.map((el) => (
          <Stack key={el._id}>
            <Text>{el.name}</Text>
            <Button onClick={(e) => handleView(el._id)}>View</Button>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default Homepage;
