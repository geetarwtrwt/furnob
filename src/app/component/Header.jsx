"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/app/assets/assets";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "@/app/AppContext";

export default function Header() {
  let [toggle, setToggle] = useState(false);
  let { input, setInput, navigate, pathName } = AppContext();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
    if (name === "search" && value.trim().length > 0) {
      if (
        !pathName.includes("/shop") &&
        !pathName.includes("/product-category")
      ) {
        navigate.push("/shop");
      }
    }
  };
  return (
    <header className=" bg-white fixed top-0 left-0 w-full z-[99] shadow-[0px_0px_6px]">
      <nav className="relative containerbox py-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src={assets.logo} alt="logo" width={140} />
          </Link>

          <div className="hidden space-x-8 font-bold md:block">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className="inline-block cursor-pointer md:hidden"
        >
          <MenuIcon />
        </button>

        {/* mobile nav */}
        <div
          className={`${
            toggle ? "toggleNav" : "hidden"
          } py-4 shadow-md font-bold md:hidden`}
        >
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <div className="flex items-center gap-2 border rounded px-2 py-1">
            <input
              name="search"
              value={input.search || ""}
              onChange={handleChange}
              type="search"
              className="text-base headerSearch outline-none"
              placeholder="Search you favorite product..."
            />
            <IoSearch />
          </div>
          <FaRegHeart />
          <LuShoppingBag />
        </div>
      </nav>
    </header>
  );
}
