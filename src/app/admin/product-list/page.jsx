"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

export default function Page() {
  let [data, setData] = useState([]);
  // let [stockStatus, setStockStatus] = useState([]);

  let productList = async () => {
    try {
      let res = await axios.get("/api/product/product-list");
      setData(res.data.msg);
    } catch (err) {
      toast.error(err.data);
      console.log(err);
    }
  };

  let toggleStock = async (id, e) => {
    try {
      let res = await axios.put("/api/product/stock", { id: id, inStock: e });
      if (res.data.success === true) {
        await productList();
        toast.success(res.data.msg);
        console.log(res.data.msg);
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error(err.msg);
      console.log(err.message);
    }
  };

  // let toggleStock = async (id, index) => {
  //   let stockData = [...stockStatus];
  //   stockData[index] = !stockData[index];
  //   setStockStatus(stockData);

  //   await axios.put(
  //     `/api/product/stock`,
  //     { id: id, inStock: stockData[index] },
  //     {
  //       headers: { "Content-Type": "application/json" },
  //     },
  //   );
  // };

  // checked={stockStatus[index]}
  //onChange={() => toggleStock(e._id, index)}

  useEffect(() => {
    productList();
  }, []);

  return (
    <>
      <div className="ps-12 pt-12 space-y-8 w-ful">
        <h2 className="text-2xl md:text-3xl font-bold">All Products</h2>
        <table className="w-full text-left border">
          <thead>
            <tr className="border-b">
              <th className="p-2">Product</th>
              <th>Category</th>
              <th>Selling Price</th>
              <th>In Stock</th>
            </tr>
          </thead>

          <tbody>
            {data.map((e) => {
              return (
                <tr key={e._id}>
                  <td className="p-2 flex gap-2  items-center text-sm">
                    <Image
                      src={
                        e.productImage[0]
                          ? `/${e.productImage[0]}`
                          : "/no-image.png"
                      }
                      alt="product img"
                      priority
                      width={80}
                      height={80}
                      className="w-[80px] border border-gray-300"
                    />
                    <span>{e.productName}</span>
                  </td>
                  <td className="capitalize">
                    {e.category.replaceAll(/_/g, " ")}
                  </td>
                  <td>${e.offerPrice}</td>
                  <td className="px-4 py-3">
                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={e.inStock}
                        onChange={() => toggleStock(e._id, !e.inStock)}
                      />
                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-main transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                  {/* <td>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" />
                        <div
                          className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                            stockStatus[index] ? "bg-main" : "bg-gray"
                          }`}
                        ></div>
                        <div
                          className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300  ${
                            stockStatus[index] ? "translate-x-6" : ""
                          }`}
                        ></div>
                        checked={stockStatus[index]}
                        onChange={() => toggleStock(e._id, index)}
                      </div>
                    </label>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
