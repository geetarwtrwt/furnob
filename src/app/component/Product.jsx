"use client";
import React, { useState } from "react";
import { AppContext } from "@/app/AppContext";
import Image from "next/image";
import Rating from "@mui/material/Rating";

function Product({ e }) {
  let { navigate } = AppContext();
  let [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col px-4 py-6 space-y-0 rounded-md shadow-md w-[100%] flex-wrap gap-4 sm:w-[30%] lg:w-[20%]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate.push(`/single-product/${e.category}/${e._id}`)}
    >
      <div className="w-full relative hoverBtnBox">
        <Image
          src={hover ? e.image[1] : e.image[0]}
          alt="category img"
          width={200}
          height={200}
          className={`w-full`}
        />
        <button
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="cursor-pointer hoverBtn absolute text-main py-1.5 font-bold w-full"
        >
          Add to cart
        </button>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm">{e.name}</h4>
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
