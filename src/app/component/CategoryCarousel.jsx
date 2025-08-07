"use client";
import React from "react";
import Image from "next/image";
// import { AppContext } from "@/app/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { GiSofa } from "react-icons/gi";
import { FaComputer, FaKitchenSet } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { LuLamp } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

export const categories = [
  {
    text: "Living Room",
    path: "GiSofa",
    image: <GiSofa />,
  },
  {
    text: "Bedroom",
    path: "bedroom",
    image: <IoIosBed />,
  },
  {
    text: "Home Office",
    path: "home_office",
    image: <FaComputer />,
  },
  {
    text: "Lighting",
    path: "lighting",
    image: <LuLamp />,
  },
  {
    text: "Home Decoration",
    path: "home_decoration",
    image: <FaHome />,
  },
  {
    text: "Dining Room",
    path: "dining_room",
    image: <ImSpoonKnife />,
  },
  {
    text: "Kitchen",
    path: "kitchen",
    image: <FaKitchenSet />,
  },
];
export default function CategoryCarousel() {
  // let { navigate, categoryData } = AppContext();
  return (
    <>
      <section>
        <div className="containerBox py-16 flex items-center justify-evenly gap-10 flex-wrap md:flex-row">
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
            {categories.map((e, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="flex items-center flex-col gap-1 py-2 cursor-pointer border border-borderBg"
                    onClick={() => {
                      navigate.push(`/product-category/${e.path}`);
                    }}
                  >
                    <div className="text-5xl">{e.image}</div>
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
