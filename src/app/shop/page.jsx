"use client";
import React from "react";
import PageHeader from "@/app/component/PageHeader";
import CategorySection from "@/app/component/CategorySection";
import Product from "@/app/component/Product";
import { AppContext } from "@/app/AppContext";

export default function Page() {
  let { fetauredProduct, input } = AppContext();

  let filterData = fetauredProduct.filter(
    (e) =>
      e.productName.toLowerCase().includes(input.search.toLowerCase()) ||
      e.category.toLowerCase().includes(input.search.toLowerCase())
  );
  return (
    <>
      <section className="">
        <PageHeader />
        <div className="containerbox pb-10 space-y-8">
          <CategorySection />

          <div className="flex items-center justify-between gap-10 flex-wrap">
            {(input.search ? filterData : fetauredProduct).map((e) => {
              return <Product e={e} key={e._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
