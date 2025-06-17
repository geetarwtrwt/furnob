"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { FaMinus, FaPlus, FaHeart } from "react-icons/fa6";
import { AppContext } from "../AppContext";

export default function SinglePageDetail({ data }) {
  let { cartItem, addToCart, removeFromCart } = AppContext();
  let [bigImg, setBigImg] = useState(data?.productImage[0]);

  return (
    <>
      <div key={data._id} className="flex gap-8 flex-col md:flex-row md:flex-0">
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-gray-400 space-x-1 text-sm font-bold">
            <Link href="/">Home /</Link>
            <Link href="/">{data.category} /</Link>
            <Link href="/" className="text-black">
              {data.productName}
            </Link>
          </p>
          <div>
            <div>
              <Image
                src={`/${bigImg}`}
                alt="product img"
                width={400}
                height={400}
                className="w-[400px] h-auto"
              />
            </div>
            <div className="flex gap-12 mt-4">
              {data.productImage.map((img, index) => {
                return (
                  <Image
                    src={`/${img}`}
                    onClick={() => setBigImg(img)}
                    alt="product small img"
                    width={90}
                    height={90}
                    key={index}
                    className="border border-gray-400 p-2 rounded-md w-[90px] h-[90px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{data.productName}</h2>
          <div className="flex items-center gap-2">
            <Rating name="read-only" value={data.star} readOnly size="small" />
            <p className="text-sm font-semibold">{data.star} Rating</p>
            <div className="bg-green-100 text-green-600 font-bold px-4 py-1.5 rounded text-sm">
              {data.inStock ? "In Stock" : "Out of Stock"}
            </div>
          </div>
          <p className="border-b pb-4 text-gray-500">
            Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no
            quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus
            integre, vide viderer eleifend ex mea. His at soluta regione
            diceret, cum et atqui placerat petentium.
          </p>
          <p className="flex items-center gap-2">
            <span className="text-4xl text-main font-semibold">
              ${data.offerPrice}
            </span>
            <span className="text-2xl text-gray-500 line-through">
              ${data.productPrice}
            </span>
          </p>

          <div className="flex gap-4">
            {!cartItem[data._id] ? (
              <p
                className="bg-main text-white font-bold w-fit py-2.5 px-6"
                onClick={() => {
                  addToCart(data._id);
                }}
              >
                Add to Cart
              </p>
            ) : (
              <div className="flex gap-4 bg-main text-white font-bold w-fit py-2.5 px-6">
                <button onClick={() => removeFromCart(data._id)}>
                  <FaMinus />
                </button>
                <p>{cartItem[data._id]}</p>
                <button
                  onClick={() => {
                    addToCart(data._id);
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            )}
            <button className="flex items-center gap-2 border border-main px-6 font-bold text-main hover:bg-main hover:text-white transition duration-500">
              <FaHeart />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="py-10 ">
        <h4 className="text-2xl border-b border-gray-500 pb-4">Description</h4>
        <p className="pt-4">
          Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
          vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
          viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
          iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc,
          in pellentesque lorem mattis quis. Cras imperdiet est in nunc
          tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
          Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
          eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
          Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
          Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies
          cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus
          blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
          Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis
          quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat
          mauris, sed egestas purus commodo vel.
        </p>
      </div>
    </>
  );
}
