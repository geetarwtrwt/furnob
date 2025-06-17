"use client";
import React, { useState } from "react";
import { dummyOrders } from "@/app/assets/assets";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section>
        <div className="containerbox py-10 pt-24 md:pt-36 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Orders List</h2>

          <div className="flex flex-col gap-10">
            {dummyOrders.map((e, keyIndex) => {
              return (
                <div
                  key={keyIndex}
                  className="flex flex-col w-[60%] p-2 border"
                >
                  <p className="flex items-center text-sm justify-between">
                    <span>Order Id: {e._id}</span>
                    <span>Payment: {e.paymentType}</span>
                    <span>
                      Total Amount: {e.items.map((a) => a.quantity * e.amount)}
                    </span>
                  </p>

                  <div className="p-4 flex flex-col gap-2 text-sm justify-between">
                    {e.items.map((i, index) => {
                      return (
                        <div className="flex items-center gap-2" key={index}>
                          <Image
                            src={i.product.image[0]}
                            alt="order img"
                            width={80}
                            height={80}
                            className="w-[80px] h-auto"
                          />

                          <p className="flex flex-col capitalize">
                            <span>{i.product.name}</span>
                            <span>
                              {i.product.category.replaceAll(/_/g, " ")}
                            </span>
                          </p>
                        </div>
                      );
                    })}

                    <div className="font-bold text-main">
                      <p>Quantity: {e.items.map((qun) => qun.quantity)}</p>
                      <p>Status: {e.status}</p>
                      <p>Date: {new Date(e.updatedAt).toLocaleDateString()}</p>
                      <p>Amount: {e.amount}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
