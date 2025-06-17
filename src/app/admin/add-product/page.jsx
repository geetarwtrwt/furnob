"use client";
import React, { useState } from "react";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

export default function Page() {
  let [productImage, setProductImage] = useState([false, false, false, false]);

  let handleProductImg = (e, index) => {
    let productSrc = [...productImage];
    productSrc[index] = e.target.files[0];
    setProductImage(productSrc);
  };

  let [input, setInput] = useState({
    productName: "",
    productDes: "",
    category: "",
    productPrice: "",
    offerPrice: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();

      for (let key in productImage) {
        if (productImage[key]) {
          formData.append("productImage", productImage[key]);
        }
      }

      for (let key in input) {
        formData.append(key, input[key]);
      }

      let res = await axios.post("/api/product/add-product", formData);
      if (res.data.success === true) {
        toast.success("Product added");
        setInput({
          productName: "",
          productDes: "",
          category: "",
          productPrice: "",
          offerPrice: "",
        });
        setProductImage([false, false, false, false]);
      } else {
        res.data.error.split(",").map((e) => {
          toast.error(e);
        });
      }
    } catch (err) {
      toast.error(err.data.error);
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="ps-12 py-12 w-1/2 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p>Product Image</p>
            <div className="flex justify-between">
              {productImage.map((img, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={`image${index}`} className="cursor-pointer">
                      <Image
                        src={
                          !img ? assets.upload_area : URL.createObjectURL(img)
                        }
                        alt="upload product img"
                        width={100}
                        height={100}
                        className="w-[100px]"
                      />
                    </label>
                    <input
                      type="file"
                      id={`image${index}`}
                      onChange={(e) => handleProductImg(e, index)}
                      hidden
                    />
                  </div>
                );
              })}
              {/* 
            <div>
              <label htmlFor="image1">
                <Image
                  src={
                    !productImage1
                      ? assets.logo
                      : URL.createObjectURL(productImage1)
                  }
                  alt="upload img"
                  width={80}
                  height={80}
                  className="w-[80px] "
                />
              </label>
              <input
                type="file"
                className=""
                id="image1"
                hidden
                onChange={(e) => setProductImage1(e.target.files[0])}
              />
            </div>
 */}
            </div>
          </div>

          <div>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={input.productName}
              onChange={handleChange}
              placeholder="Type here..."
              required
              className="border w-full py-2 ps-2 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="productDes">Product Description</label>
            <textarea
              id="productDes"
              name="productDes"
              value={input.productDes}
              onChange={handleChange}
              placeholder="Type here..."
              required
              rows="4"
              className="border w-full py-2 ps-2 rounded mt-1"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={input.category}
              onChange={handleChange}
              required
              className="border w-full py-2 ps-2 rounded mt-1"
            >
              <option value="">-- Select Category --</option>
              <option value="Living Room">Living Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Home Office">Home Office</option>
              <option value="Lighting">Lighting</option>
              <option value="Home Decoration">Home Decoration</option>
              <option value="Dinning Room">Dinning Room</option>
            </select>
          </div>

          <div className="flex gap-6">
            <div>
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                value={input.productPrice}
                onChange={handleChange}
                placeholder="0"
                required
                className="border w-full py-2 ps-2 rounded mt-1"
              />
            </div>

            <div>
              <label htmlFor="offerPrice">Offer Price</label>
              <input
                type="number"
                id="offerPrice"
                name="offerPrice"
                value={input.offerPrice}
                onChange={handleChange}
                placeholder="0"
                className="border w-full py-2 ps-2 rounded mt-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-main text-white py-2 px-10 rounded font-bold cursor-pointer"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
