let { Schema, model, models } = require("mongoose");

let ProductSchema = Schema(
  {
    productImage: { type: Array, required: true },
    productName: { type: String, required: true },
    productDescription: { type: Array, required: true },
    category: {
      type: String,
      enum: [
        "Living Room",
        "Bedroom",
        "Home Office",
        "Lighting",
        "Home Decoration",
        "Dinning Room",
      ],
      required: true,
    },
    productPrice: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export let productModel =
  models.productAdd || model("productAdd", ProductSchema);
