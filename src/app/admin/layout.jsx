"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/assets/assets";
import { AppContext } from "@/app/AppContext";
import SideBar from "@/app/component/adminComponent/SideBar";
import axios from "axios";

export default function SellerLayout({ children }) {
  let { navigate, setUser, setAdmin } = AppContext();

  let logoutAdmin = async () => {
    await axios.post("/api/user/logout");
    setUser(null);
    setAdmin(false);
    navigate.push("/my-account");
  };
  return (
    <>
      <div>
        <div className="flex justify-between px-8 py-2 border-b border-gray ">
          <Link href="/">
            <Image
              src={assets.logo}
              alt="logo"
              width={140}
              className="w-[100px] md:w-[140px]"
            />
          </Link>

          <div className="flex gap-4 items-center">
            <p>Hii Admin</p>
            <button
              onClick={logoutAdmin}
              className="bg-main p-1 px-4 text-white font-bold rounded-full cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex">
          <SideBar />
          <div className="w-[80%]">{children}</div>
        </div>
      </div>
    </>
  );
}
