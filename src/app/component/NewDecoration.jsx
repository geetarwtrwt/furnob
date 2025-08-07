"use client";
import React from "react";
import Image from "next/image";
// import { assets } from "@/app/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function NewDecoration() {
  return (
    <>
      <section>
        <div className="containerBox py-16 flex justify-between gap-16 flex-col md:flex-row">
          <div className=" w-full h-[400px] md:w-1/3 relative group overflow-hidden">
            <Image
              src="/banner/banner-image-sm1.jpg"
              alt="banner"
              width={200}
              height={200}
              className="w-full h-full bg-linear-to-r from-gray-900 to-gray-300 group-hover:scale-110 duration-1000 bg-l"
            />
            <div className="absolute top-0 pt-8 px-4 flex flex-col gap-5 bg-black/30 h-full text-white">
              <p className="text-sm font-bold">Best Seller This Week</p>
              <h2 className="text-3xl font-medium text-primary">
                Introducing the Totem Collection
              </h2>
              <Link
                href="/"
                className="flex items-center px-2 py-1 gap-5 border-2 border-primary w-fit"
              >
                Shop Collection <FaArrowRight />
              </Link>
              <p>
                Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula
                pretium magna, eu congue ex quam ut neque.
              </p>
            </div>
          </div>

          <div className=" w-full h-[400px] md:w-1/3 relative group overflow-hidden">
            <Image
              src="/banner/banner-image-sm2.jpg"
              alt="banner"
              width={200}
              height={200}
              className="w-full h-full bg-linear-to-r from-gray-900 to-gray-300 group-hover:scale-110 duration-1000 bg-l"
            />
            <div className="absolute top-0 pt-8 px-4 flex flex-col gap-5 bg-black/30 h-full text-white">
              <p className="text-sm font-bold">Best Seller This Week</p>
              <h2 className="text-3xl font-medium text-primary">
                Because furniture says a lot about you
              </h2>
              <Link
                href="/"
                className="flex items-center px-2 py-1 gap-5 border-2 border-primary w-fit"
              >
                Shop Collection <FaArrowRight />
              </Link>
              <p>
                Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula
                pretium magna, eu congue ex quam ut neque.
              </p>
            </div>
          </div>

          <div className=" w-full h-[400px] md:w-1/3 relative group overflow-hidden">
            <Image
              src="/banner/banner-image-sm3.jpg"
              alt="banner"
              width={200}
              height={200}
              className="w-full h-full bg-linear-to-r from-gray-900 to-gray-300 group-hover:scale-110 duration-1000 bg-l"
            />
            <div className="absolute top-0 pt-8 px-4 flex flex-col gap-5 bg-black/30 h-full text-white">
              <p className="text-sm font-bold">Best Seller This Week</p>
              <h2 className="text-3xl font-medium text-primary">
                Introducing the Totem Collection
              </h2>
              <Link
                href="/"
                className="flex items-center px-2 py-1 gap-5 border-2 border-primary w-fit"
              >
                Shop Collection <FaArrowRight />
              </Link>
              <p>
                Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula
                pretium magna, eu congue ex quam ut neque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
