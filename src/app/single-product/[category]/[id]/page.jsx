"use client";
import React from "react";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/AppContext";
import SinglePageDetail from "@/app/component/SinglePageDetail";
import Product from "@/app/component/Product";

export default function Page() {
  let { fetauredProduct } = AppContext();
  let { id } = useParams();

  let data = fetauredProduct.find((e) => {
    return e._id === id;
  });

  let relatedProductData = fetauredProduct.filter(
    (e) => e.category === data.category,
  );
  // let [relatedProduct, setRelatedProduct]=

  return (
    <>
      <section>
        <div className="containerbox py-10 pt-16 md:pt-36">
          {data && <SinglePageDetail data={data} />}

          <div>
            <h4 className="text-2xl border-b border-gray-500 pb-4">
              Related products
            </h4>
            <div className="flex items-center justify-between gap-10 flex-wrap">
              {relatedProductData.slice(0,4).map((e) => {
                return <Product e={e} key={e._id} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
