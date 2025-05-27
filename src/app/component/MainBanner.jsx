import React from "react";
import Image from "next/image";
import { assets } from "@/app/assets/assets";
import StarIcon from "@mui/icons-material/Star";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function MainBanner() {
  return (
    <>
      <section className="bg-bgGray">
        <div className="containerbox py-10 pt-16 md:pt-36 flex justify-between flex-col md:flex-row max-md:flex-col-reverse">
          <div className="space-y-6 w-full md:w-3/5">
            <p>
              <StarIcon className="text-main" />
              2023 Top Quality Award
            </p>
            <h1 className="text-6xl font-extrabold">
              Leave the
              <span>
                <Image
                  src={assets.season_text}
                  alt="season text"
                  width={180}
                  className="inline px-2"
                />
              </span>
              in Furnob style
            </h1>
            <p className="text-gray-500">
              Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna,
              at porttitor eros leo ac ex. Nunc molestie turpis varius purus
              accumsan maximus. Nam ut libero aliquet, consequat ipsum sit amet,
              aliquet odio. M
            </p>
            <button className="border p-2">
              Shop Collection <ArrowRightAltIcon />
            </button>
          </div>

          <div className="w-full md:w-2/5">
            <Image
              src={assets.banner_main}
              alt="banner img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
