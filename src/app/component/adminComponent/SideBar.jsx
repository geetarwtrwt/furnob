import React from "react";
import { AppContext } from "@/app/AppContext";
import Link from "next/link";
import { CiCirclePlus, CiCircleList, CiShoppingCart } from "react-icons/ci";

export default function SideBar() {
  let { pathName } = AppContext();

  let linkClass = (path) => {
    return pathName === path ? "bg-main text-white" : "";
  };
  return (
    <>
      <div className="h-screen border-r-1 border-gray w-[15%] flex items-end flex-col gap-10 pt-6 ">
        <Link
          href="/admin/add-product"
          className={`${linkClass("/admin/add-product")} text-main border border-main w-full py-2 text-main font-bold flex gap-2 items-center justify-center`}
        >
          <CiCirclePlus className="text-3xl" />
          Add Product
        </Link>

        <Link
          href="/admin/product-list"
          className={`${linkClass("/admin/product-list")} text-main border border-main w-full py-2 text-main font-bold flex gap-2 items-center justify-center`}
        >
          <CiCircleList className="text-3xl" />
          Product List
        </Link>

        <Link
          href="/admin/order"
          className={`${linkClass("/admin/order")} text-main border border-main w-full py-2 text-main font-bold flex gap-2 items-center justify-center`}
        >
          <CiShoppingCart className="text-3xl" />
          Order
        </Link>
      </div>
    </>
  );
}
