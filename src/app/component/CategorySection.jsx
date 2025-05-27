"use client";
import React from "react";
import Image from "next/image";
import { AppContext } from "@/app/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function CategorySection() {
  let { navigate, categoryData } = AppContext();
  return (
    <>
      <section className="border-b-2 border-bgGray ">
        <div className="containerbox py-10 flex items-center justify-evenly gap-10 flex-wrap md:flex-row">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {categoryData.map((e, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="flex items-center flex-col gap-1 cursor-pointer"
                    onClick={() => {
                      navigate.push(`/product-category/${e.path}`);
                    }}
                  >
                    <Image
                      src={e.image}
                      width={60}
                      alt="category img"
                      className="md:w-[60px]"
                    />
                    <h5 className="text-sm font-bold">{e.text}</h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
