import { Heading, Stack, Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtocart, getSingleProducts } from "../redux/AppReducer/Action";

const Product = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let SingleProduct = useSelector((state) => state.AppReducer.single);
  let user = useSelector((state) => state.AuthReducer.user);
  console.log(user);
  const navigate = useNavigate();
  console.log(SingleProduct);
  const handleAddToCart = () => {
    let payload = {
      userId: user._id,
      productId: id,
      price: SingleProduct?.price,
    };
    dispatch(addtocart(payload));
    navigate("/cart");
  };
  useEffect(() => {
    dispatch(getSingleProducts(id));
  }, []);
  return (
    <Stack>
      <Heading>Product</Heading>
      <Box>
        <Stack>
          <Heading>{SingleProduct?.name}</Heading>
          <Text>{SingleProduct?.price}</Text>
          <Button width="40%" onClick={() => handleAddToCart()}>
            Add To Cart
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Product;
