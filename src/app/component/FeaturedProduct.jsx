"use client";
import React from "react";
import { AppContext } from "@/app/AppContext";
import Product from "@/app/component/Product";

export default function FeaturedProduct() {
  let { fetauredProduct } = AppContext();

  let arr = [];

  fetauredProduct.map((e) => {
    let exists = arr.find((f) => f.category === e.category);
    if (!exists) {
      arr.push(e);
    }
  });
  return (
    <>
      <section className="">
        <div className="containerbox py-10 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-3xl letter tracking-wider">
              Featured Categories
            </h2>
            <p className="text-gray-500">
              Visit our shop to see amazing creations from our designers.
            </p>
          </div>
          <div className="flex items-center justify-between gap-10 flex-wrap">
            {arr.map((e) => {
              return <Product e={e} key={e._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
