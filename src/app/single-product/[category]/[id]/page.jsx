"use client";
import React from "react";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/AppContext";
import SinglePageDetail from "@/app/component/SinglePageDetail";

export default function Page() {
  let { fetauredProduct } = AppContext();
  let { id } = useParams();

  let data = fetauredProduct.find((e) => {
    return e._id === id;
  });

  return (
    <>
      <section>
        <div className="containerbox py-10 pt-16 md:pt-36">
          {data && <SinglePageDetail data={data} />}
        </div>
      </section>
    </>
  );
}
