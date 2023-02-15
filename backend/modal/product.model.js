const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: {
      type: String,
      required: [true, "can't be blank"],
    },
    price: {
      type: String,
      required: [true, "can't be blank"],
    },
    category: {
      type: String,
      required: [true, "can't be blank"],
    },
    pictures: {
      type: Array,
      required: true,
    },
  },
  { minimize: false }
);

const ProductData = mongoose.model("product", ProductSchema);

module.exports = ProductData;
