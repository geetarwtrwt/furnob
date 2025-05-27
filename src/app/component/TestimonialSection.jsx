"use client";
import React, { useEffect, useState } from "react";
import { testimonial } from "@/app/assets/assets";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function TestimonialSection() {
  let [data, setData] = useState([]);

  let fetchData = () => {
    setData(testimonial);
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
              Our Lucky Customers
            </h2>
            <p className="text-gray-500">
              Visit our shop to see amazing creations from our designers.
            </p>
          </div>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {data.map((e) => {
                return (
                  <SwiperSlide className="py-16">
                    <div className="px-10 h-[200px] shadow-[5px_5px_5px] shadow-grayLight border border-gray-300 flex items-center justify-center flex-col gap-2 relative text-center">
                      <Image
                        src={e.src}
                        width={75}
                        className="absolute -top-10 rounded-full"
                        alt="testimonial img"
                      />
                      <h4 className="font-bold">{e.name}</h4>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        size="small"
                      />
                      <p className="text-sm text-gray-500">
                        Vestibulum ut maximus magna. Duis neque risus, varius
                        nec efficitur ut, interdum vel risus. Fusce rutrum purus
                        leo, a imperdiet erat sagittis ac.
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
