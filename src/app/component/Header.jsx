"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/app/assets/assets";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "@/app/AppContext";
import axios from "axios";

export default function Header() {
  let [toggle, setToggle] = useState(false);
  let {
    user,
    setUser,
    admin,
    setAdmin,

    input,
    setInput,
    navigate,
    pathName,
    totalCount,
  } = AppContext();

  let logoutUser = async () => {
    await axios.post("/api/user/logout");
    setUser(null);
    setAdmin(false);
    navigate.push("/my-account");
  };

  let [showSearch, setShowSearch] = useState(false);

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

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".search-trigger")) {
        setShowSearch(false);
      }

      // Nav ke bahar click kiya toh nav close
      if (!e.target.closest(".navTrigger")) {
        setToggle(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className=" bg-white fixed top-0 left-0 w-full z-[99] shadow-[0px_0px_6px]">
      <nav className="relative containerbox py-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src={assets.logo}
              alt="logo"
              width={140}
              className="w-[100px] md:w-[140px]"
            />
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
          className="navTrigger inline-block cursor-pointer md:hidden"
        >
          <MenuIcon />
        </button>
        {/* mobile nav */}
        <div
          className={`navTrigger ${
            toggle ? "toggleNav" : "hidden"
          } py-4 shadow-md font-bold md:hidden`}
        >
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-2xl  rounded px-2 py-1 border max-md:border-none">
            <input
              name="search"
              value={input.search || ""}
              onChange={handleChange}
              type="search"
              className={`search-trigger text-base outline-none  w-full bg-white  max-md:absolute max-md:shadow-md max-md:top-full max-md:left-0 max-md:border max-md:py-1.5 max-md:ps-2 ${
                showSearch ? "max-md:block" : "max-md:hidden"
              }`}
              placeholder="Search you favorite product..."
            />
            <IoSearch
              className="search-trigger"
              onClick={() => setShowSearch(!showSearch)}
            />
          </div>

          <div
            onClick={() => navigate.push("/cart")}
            className="relative text-2xl cursor-pointer"
          >
            <LuShoppingBag />
            <span className="absolute -top-3 -right-3 text-sm bg-main rounded-full text-center w-[20px] h-[20px] text-white font-bold">
              {totalCount()}
            </span>
          </div>

          <div className=" font-bold">
            {user === null ? (
              <Link
                href="/my-account"
                className="bg-main py-1 px-4 rounded-full text-white"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-4 relative group">
                <Image
                  src={assets.profile_icon}
                  alt="logo"
                  width={50}
                  className="w-[50px]"
                />
                <ul className="absolute top-full bg-main text-white w-30 text-center rounded py-2 hidden group-hover:block ">
                  <li
                    onClick={() => navigate.push("/my-order")}
                    className="hover:bg-mainBgLight p-2 cursor-pointer"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={logoutUser}
                    className="hover:bg-mainBgLight p-2 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            {admin === true ? (
              <Link
                href="/admin/product-list"
                className="bg-main py-1 px-4 rounded-full text-white"
              >
                Admin
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
