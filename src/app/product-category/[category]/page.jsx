"use client";
import React, { useState, useEffect } from "react";
import PageHeader from "@/app/component/PageHeader";
import CategorySection from "@/app/component/CategorySection";
import Product from "@/app/component/Product";
import { AppContext } from "@/app/AppContext";
import { useParams } from "next/navigation";
import { categories } from "@/app/assets/assets";

export default function Page() {
  let { category } = useParams();

  let { fetauredProduct, input } = AppContext();

  let categoryTitle = categories.find((e) => e.path === category);

  let filtered = fetauredProduct.filter(
    (e) => e.category.toLowerCase() === category.toLowerCase()
  );

  let searchProduct = filtered.filter((e) => {
    return e.name.toLowerCase().includes(input.search.toLowerCase());
  });
  return (
    <>
      <section className="">
        <PageHeader categoryTitle={categoryTitle} />
        <div className="containerbox pb-10 space-y-8">
          <CategorySection />

          <div className="flex items-center justify-between gap-10 flex-wrap">
            {searchProduct.length > 0 ? (
              searchProduct.map((e) => <Product e={e} key={e._id} />)
            ) : (
              <p>Data not found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
