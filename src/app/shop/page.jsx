"use client";
import React from "react";
import { UseAppContext } from "../AuthContext";
import CategoryCarousel from "@/app/component/CategoryCarousel";
import FeaturedProduct from "@/app/component/FeaturedProduct";

function page() {
  let { pathName } = UseAppContext();
  console.log(pathName.replace("/", ""));

  return (
    <>
      <section>
        <div
          className="w-full h-70 flex items-center justify-center"
          style={{ backgroundImage: `url("/banner/shop-header.jpg")` }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold  text-background capitalize">
            {pathName.replace("/", "")}
          </h1>
        </div>

        <CategoryCarousel />
        <FeaturedProduct />
      </section>
    </>
  );
}

export default page;
