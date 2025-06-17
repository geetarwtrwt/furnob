"use client";
import React, { useState } from "react";
import { AppContext } from "@/app/AppContext";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Product({ e }) {
  let { navigate, cartItem, addToCart, removeFromCart } = AppContext();
  let [hover, setHover] = useState(false);
  return (
    <div
      className="cursor-pointer flex flex-col px-4 py-6 space-y-0 rounded-md shadow-md w-[100%] flex-wrap gap-4 sm:w-[30%] lg:w-[20%]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate.push(`/single-product/${e.category}/${e._id}`)}
    >
      <div className="w-full hoverBtnBox">
        {console.log(e.productImage)}
        <Image
          src={`/${
            e.productImage?.length > 1 && hover
              ? e.productImage[1]
              : e.productImage[0]
          }`}
          alt="category img"
          width={200}
          height={200}
          className={`w-[200px] h-[200px]`}
        />
        <div className="bg-main text-white py-2.5 font-bold w-full text-center">
          {!cartItem?.[e._id] ? (
            <button
              className="cursor-pointer"
              onClick={(event) => {
                event.stopPropagation();
                addToCart(e._id);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <div className="w-full flex justify-center gap-4">
              <button
                className="cursor-pointer outline-none"
                onClick={(event) => {
                  event.stopPropagation();
                  removeFromCart(e._id);
                }}
              >
                <FaMinus />
              </button>
              <p>{cartItem[e._id]}</p>
              <button
                className="cursor-pointer outline-none"
                onClick={(event) => {
                  event.stopPropagation();
                  addToCart(e._id);
                }}
              >
                <FaPlus />
              </button>
            </div>
          )}
        </div>

        {/* <button
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="cursor-pointer hoverBtn absolute text-main py-1.5 font-bold w-full border-main border"
        >
          Add to cart
        </button> */}
      </div>
      <div className="space-y-1">
        <h4 className="text-sm">{e.productName}</h4>
        <div className="space-x-2">
          <span className="font-bold">${e.offerPrice}</span>
          <span className="line-through text-gray-500">${e.price}</span>
        </div>

        <div className="flex gap-1">
          <Rating name="read-only" value={e.star} readOnly size="small" />
          <p className="text-sm font-semibold">{e.star} Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
