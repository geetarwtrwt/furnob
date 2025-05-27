"use client";
import React, { useEffect, useState } from "react";
import { designer } from "@/app/assets/assets";
import Image from "next/image";

export default function TopDesigner() {
  let [data, setData] = useState([]);

  let fetchData = () => {
    setData(designer);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="">
        <div className="containerbox py-10 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-3xl letter tracking-wider">
              Top Designers With 'Furnob'
            </h2>
            <p className="text-gray-500">
              Aliquam vel maximus nulla. Etiam viverra nulla ac tellus auctor
              tempus. Donec euismod commodo mi, ac auctor tortor aliquam in diam
              porta hendrerit in id orci.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 flex-wrap flex-col md:flex-row">
            {data.map((e, index) => {
              return (
                <div key={index} className="w-[100%] relative md:w-[30%]">
                  <Image src={e.src} alt="designer img" />
                  <div className="absolute top-8 left-8">
                    <h4 className="text-2xl font-bold">{e.name}</h4>
                    <p className="text-sm">{e.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
