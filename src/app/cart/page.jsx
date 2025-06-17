"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMinus, FaPlus, FaXmark, FaArrowLeft } from "react-icons/fa6";
import { AppContext } from "../AppContext";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

export default function Page() {
  let {
    fetauredProduct,
    totalCount,
    cartItem,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalAmount,
    navigate,
    user,
  } = AppContext();

  let [data, setData] = useState([]);

  let fetchedData = () => {
    let cartFetchedData = Object.keys(cartItem)
      .map((e) => {
        let cartData = fetauredProduct.find((i) => i._id === e);
        return cartData ? { ...cartData, qty: cartItem[e] } : null;
      })
      .filter(Boolean);
    setData(cartFetchedData);
  };

  useEffect(() => {
    if (fetauredProduct.length > 0 && cartItem) {
      fetchedData();
    }
  }, [cartItem, fetauredProduct]);

  // let userId = user.data._id;

  let handleSave = async () => {
    try {
      let res = await axios.put(
        "/api/cart/update",
        { cartData: data },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data.msg);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(data.qty)
  return (
    <>
      <section>
        <div className="containerbox py-10 pt-24 md:pt-36 flex justify-between flex-col gap-6 md:flex-row md:gap-0">
          <div className="w-full md:w-[60%] space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Shopping Cart
              <span className="text-lg font-medium text-main ps-2">
                {totalCount()} Items
              </span>
            </h2>

            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e) => {
                  return (
                    <tr key={e._id} className="border-gray-400 border-y">
                      <td className="my-4 flex items-center gap-4">
                        <Image
                          src={e.image[0].src}
                          width={80}
                          height={80}
                          alt="cart product img"
                          className="w-[100px] rounded border border-main"
                        />
                        <div>
                          <p>{e.name}</p>
                          <div className="flex gap-4 bg-main text-white font-bold w-fit py-2.5 px-6">
                            <button
                              className="cursor-pointer"
                              onClick={() => removeFromCart(e._id)}
                            >
                              <FaMinus />
                            </button>
                            <p>{cartItem[e._id]}</p>
                            <button
                              className="cursor-pointer"
                              onClick={() => {
                                addToCart(e._id);
                              }}
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        $
                        {(
                          Number(String(e.offerPrice).replaceAll(/,/g, "")) *
                          e.qty
                        ).toFixed(2)}
                      </td>
                      <td>
                        <FaXmark
                          onClick={() => deleteFromCart(e._id)}
                          className="border-main border text-main rounded-full text-2xl p-1"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <Link
              href="/shop"
              className="text-main font-bold border-main border flex items-center gap-2 py-1.5 px-4 w-fit hover:bg-main transition duration-1000 hover:text-white"
            >
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>

          <div className="w-full md:w-[35%] md:sticky md:top-[20%] h-fit border-main border px-4 py-8 space-y-6 bg-mainLight">
            <h4 className="text-xl font-bold">Order Summary</h4>
            <div>
              <ul>
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  Subtotal <span>${totalAmount()}</span>
                </li>
                <li className="flex justify-between pt-4 pb-2">
                  Shipping Fee<span>Free</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-4">
                  Tax(2%)<span>${((totalAmount() * 2) / 100).toFixed(2)}</span>
                </li>
                <li className="flex justify-between py-2 ">
                  Total Amount:
                  <span className="text-2xl font-bold">
                    ${(totalAmount() + 2).toFixed(1)}
                  </span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleSave()}
              className="cursor-pointer bg-main w-full text-white py-2 font-bold"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
