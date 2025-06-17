"use client";
import React, { useState } from "react";
import { dummyOrders } from "@/app/assets/assets";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="ps-12 pt-12 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Orders List</h2>

        <div className="flex flex-col gap-10">
          {dummyOrders.map((e) => {
            return (
              <div key={e._id} className="p-4 border flex items-center text-sm justify-between">
                {e.items.map((i, index) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <Image
                        src={i.product.image[0]}
                        alt="order img"
                        width={80}
                        height={80}
                        className="w-[80px] h-auto"
                      />

                      <p>
                        {i.product.name} x {i.quantity}
                      </p>
                    </div>
                  );
                })}

                <div>
                  <p>
                    {e.address.firstName} {e.address.lastName}
                  </p>
                  <p>
                    {e.address.street} {e.address.city}
                  </p>
                  <p>
                    {e.address.state}
                    {e.address.zipcode} {e.address.country}
                  </p>
                  <p>{e.address.phone}</p>
                </div>

                <p>${e.amount}</p>

                <div>
                  <p>Method: {e.paymentType}</p>
                  <p>Date: {e.updatedAt}</p>
                  <p>Payment: {e.isPaid ? "Paid" : "Pending"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
