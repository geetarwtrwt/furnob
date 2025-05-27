"use client";
import Link from "next/link";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { assets, footerLinks } from "@/app/assets/assets";

let customerSection = [
  {
    heading: "Free Shipping Orders $60+",
    des: "A delivery service you can depend on",
    icon: <CiDeliveryTruck />,
  },
  {
    heading: "Customer Support",
    des: "Satisfied customers are our best ads",
    icon: <CiPhone />,
  },
  {
    heading: "100% Secure Payments",
    des: "The highest level of security",
    icon: <CiCreditCard1 />,
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <div className="space-y-10 border-t border-gray-200">
          <div className="containerbox py-10 flex justify-between flex-wrap gap-4">
            {customerSection.map((e, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-5xl">{e.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl">{e.heading}</h4>
                    <p className="text-gray-500 text-sm">{e.des}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-mainLight">
            <div className="containerbox flex justify-between py-10 flex-wrap max-sm:gap-10">
              <div className="space-y-4 w-[100%] sm:w-[45%]">
                <h4 className="text-main font-bold">
                  Join our newsletter for £10 off
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Get our emails for info on new items, sales and more.
                </h2>
                <p className="text-gray-500">
                  We'll email you a voucher worth £10 off your first order over
                  £50.
                </p>
              </div>

              <div className="w-[100%] sm:w-[45%]">
                <div className="border-b-2 w-full flex justify-between pb-2">
                  <input type="email" placeholder="Enter yout email address" />
                  <FaArrowRightLong />
                </div>
                <p className="text-gray-500 text-sm pt-2">
                  By subscribing you agree to our
                  <Link href="/" className="ps-2 text-black font-bold">
                    Terms & Conditions and Privacy & Cookies Policy.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="containerbox py-10 flex justify-between flex-wrap max-sm:gap-6">
            <div className="w-[100%] sm:w-[40%]">
              <p>
                <span className="font-bold text-md">Hours:</span> 9.30am-6.30pm
                Monday to Friday
              </p>
            </div>

            <div className="w-[100%] sm:w-[60%] flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-1">
              <Image src={assets.app_store} width={100} alt="app store" />
              <p className="text-sm">
                <span className="font-bold text-md">Shopping App:</span>{" "}
                9.30am-6.30pm Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>

          <div className="containerbox flex justify-between gap-8 py-10 border-b border-t border-gray-200 max-sm:flex-col">
            <div className="w-[100%] sm:w-[30%] space-y-4 border-r border-gray-200 ">
              <h4 className="text-lg font-bold">Do You Need Help ?</h4>
              <p>
                Mollura & C. SpA S.S. 114 Km 6,400 98128 Tremestieri Messina –
                Italy
              </p>
              <div className="flex flex-col font-bold text-gray-500">
                <a href="mailto:info@example.com">info@example.com</a>
                <a href="tel:+390906258945">+39 0906258945</a>
              </div>
            </div>
            <div className="w-[100%] sm:w-[70%] flex justify-between flex-col sm:flex-row max-sm:gap-8">
              {footerLinks.map((e, index) => {
                return (
                  <div className="space-y-4" key={index}>
                    <h4 className="font-bold">{e.title}</h4>
                    <div className="flex flex-col text-sm text-gray-500">
                      {e.links.map((l, index) => {
                        return (
                          <Link href={l.url} key={index}>
                            {l.text}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="containerbox py-10 flex justify-between flex-col sm:flex-row max-sm:gap-4">
            <Link href="/">
              <Image src={assets.logo} alt="logo" width={140} />
            </Link>
            <p className="text-gray-500 text-sm">
              Copyright 2025 © Furnob. All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
