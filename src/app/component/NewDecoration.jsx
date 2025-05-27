import React from "react";
import Image from "next/image";
import { assets } from "@/app/assets/assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function NewDecoration() {
  return (
    <>
      <section>
        <div className="containerbox py-10 flex justify-between gap-16 flex-col md:flex-row">
          <div className="space-y-4 w-full md:w-1/2">
            <p className="text-sm text-main font-bold">
              Massey Collection 2021
            </p>
            <h2 className="text-5xl leading-[50px]">
              New Decoration For Your Living Spaces
            </h2>
            <p className="text-gray-500">
              Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula
              pretium magna, eu congue ex quam ut neque.
            </p>
            <p>It'll be worth the wait very soon !</p>
            <div className="w-full">
              <Image
                src={assets.banner_sm3}
                alt="banner"
                width={400}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">
                Great Design For Home and Decoration.
              </h3>
              <p className="text-gray-500 text-sm">
                Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula
                pretium magna, eu congue ex quam ut neque.
              </p>
              <h5 className="font-bold text-sm">Gianluca Darby</h5>
            </div>
          </div>

          <div className=" w-full md:w-1/2 space-y-14">
            <div className="w-full relative space-y-2">
              <Image
                src={assets.banner_sm2}
                alt="banner"
                width={400}
                className="w-full h-[400px]"
              />

              <div className="bg-bgGray absolute p-2 top-2 left-2">
                <span className="text-sm text-gray-500">Designed by</span>
                <p>
                  <span className="font-bold ">Clint Dunham</span> - France
                </p>
              </div>
              <h3 className="text-2xl">Deluxe Venezie Collection</h3>
              <button className="border p-2">
                Shop Collection <ArrowRightAltIcon />
              </button>
            </div>

            <div className="w-full space-y-2">
              <Image
                src={assets.banner_sm1}
                alt="banner"
                width={400}
                className="w-full h-[400px]"
              />
              <h3 className="text-2xl">Le’Bologna Collection</h3>
              <button className="border p-2">
                Shop Collection <ArrowRightAltIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
