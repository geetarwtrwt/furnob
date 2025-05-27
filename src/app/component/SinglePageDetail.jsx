"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "@mui/material/Rating";

export default function SinglePageDetail({ data }) {
  let [bigImg, setBigImg] = useState(data?.image[0]?.src);

  return (
    <>
      <div key={data._id} className="flex">
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-gray-400 space-x-1 text-sm font-bold">
            <Link href="/">Home /</Link>
            <Link href="/">{data.category} /</Link>
            <Link href="/" className="text-black">
              {data.name}
            </Link>
          </p>
          <div>
            <div>
              <Image
                src={bigImg}
                alt="product img"
                width={400}
                height={400}
                className="w-[500px] h-[400px]"
              />
            </div>
            <div className="flex gap-12 mt-4">
              {data.image.map((img, index) => {
                return (
                  <Image
                    src={img}
                    onClick={() => setBigImg(img)}
                    alt="product small img"
                    width={90}
                    key={index}
                    className="border border-gray-400 p-2 rounded-md w-[90px] h-[90px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{data.name}</h2>
          <div className="flex items-center gap-2">
            <Rating name="read-only" value={data.star} readOnly size="small" />
            <p className="text-sm font-semibold">{data.star} Rating</p>
            <div className="bg-green-100 text-green-600 font-bold px-4 py-1.5 rounded text-sm">
              {data.inStock ? "In Stock" : "Out of Stock"}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no
            quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus
            integre, vide viderer eleifend ex mea. His at soluta regione
            diceret, cum et atqui placerat petentium.
          </p>
        </div>
      </div>
    </>
  );
}
