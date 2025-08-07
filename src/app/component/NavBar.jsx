"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 z-50 w-full border-b-2 border-borderBg bg-background transition-all">
      <nav className="containerBox flex items-center justify-between py-4">
        <Link href="/" className="text-3xl font-bold text-primary">
          Furnob
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="#">Home</Link>
          <Link href="#">Shop</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>

          <div
            className="hidden lg:flex items-center text-sm gap-2 border border-borderBg px-3 rounded-full"
          >
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder:text-text"
              type="text"
              placeholder="Search products"
            />
            <IoSearch />
          </div>

          <div className="cursor-pointer">
            <FaRegHeart />
          </div>
          <div className="relative cursor-pointer">
            <FiShoppingCart />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              3
            </button>
          </div>

          <button className="cursor-pointer px-8 py-1 bg-primary hover:bg-secondary hover:text-text transition text-white rounded-full">
            Login
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <Link href="#" className="block">
            Home
          </Link>
          <Link href="#" className="block">
            About
          </Link>
          <Link href="#" className="block">
            Blog
          </Link>
          <Link href="#" className="block">
            Contact
          </Link>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
