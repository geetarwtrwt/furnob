"use client";
import React, { useState, useEffect } from "react";
import { AppContext } from "@/app/AppContext";

export default function Page() {
  let { totalAmount } = AppContext();

  let [input, setInput] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    pineCode: "",
    phoneNumber: "",
    email: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(name, value);
  };

  let [storedData, setStoredData] = useState([]);

  let [paymentOption, setPaymentOption] = useState("COD");

  useEffect(() => {
    let storedData = localStorage.getItem("checkoutData");
    if (storedData) {
      setStoredData(JSON.parse(storedData));
    }
  }, []);
  return (
    <>
      <section>
        <div className="containerbox py-10 pt-24 md:pt-36 flex justify-between flex-col gap-6 md:flex-row md:gap-0">
          <div className="w-full md:w-[60%] space-y-6">
            <h4 className="text-xl font-bold">Billing details</h4>
            <form className="space-y-6">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={input.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={input.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                value={input.streetAddress}
                onChange={handleChange}
                placeholder="House number and street name *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="text"
                name="city"
                id="city"
                value={input.city}
                onChange={handleChange}
                placeholder="City *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="text"
                name="state"
                id="state"
                value={input.state}
                onChange={handleChange}
                placeholder="State *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="number"
                name="pineCode"
                id="pineCode"
                value={input.pineCode}
                onChange={handleChange}
                placeholder="Pin code *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={input.phoneNumber}
                onChange={handleChange}
                placeholder="Phone *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full border-[0.5px] border-gray-300 py-1.5 ps-2 rounded outline-none"
              />
            </form>
          </div>

          <div className="w-full md:w-[35%] border-main border px-4 py-8 space-y-6 bg-mainLight">
            <h4 className="text-xl font-bold">Order Summary</h4>

            <ul className="text-sm">
              <li className="flex justify-between border-b border-gray-300 pb-2 mb-2 font-bold">
                Product <span className="font-normal">Subtotal</span>
              </li>
              {storedData.map((e) => {
                return (
                  <li key={e._id} className="flex justify-between py-2">
                    {e.name} x{e.qty}
                    <span>
                      {Number(String(e.offerPrice).replaceAll(/,/g, "")) *
                        e.qty}
                    </span>
                  </li>
                );
              })}
              <li className="flex justify-between py-2 font-bold border-t mt-2 border-gray-300 ">
                Total Amount:
                <span className="text-2xl font-bold">
                  ${totalAmount().toFixed(1)}
                </span>
              </li>
            </ul>

            <form>
              <label htmlFor="payment">Payment Method</label>
              <select
                onChange={(e) => setPaymentOption(e.target.value)}
                name="payment"
                id="payment"
                className="w-full bg-white border-gray-300 p-2"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="onlinePayment">Online Payment</option>
              </select>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
