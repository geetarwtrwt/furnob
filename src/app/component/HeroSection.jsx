import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section className="containerBox flex flex-col gap-6 md:h-[500px] md:flex-row h-auto">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 px-6">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-primary">
          Leave the season in <br /> Furnob style
        </h1>

        <p className="text-sm md:text-base max-w-md">
          Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna, at
          porttitor eros leo ac ex. Nunc molestie turpis varius purus accumsan
          maximus. Nam ut libero aliquet, consequat ipsum sit amet, aliquet
          odio.
        </p>

        <Link
          href="/"
          className="w-fit bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-secondary hover:text-text transition"
        >
          Shop Collection
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
        <Image
          src="/banner/mainbanner.png"
          alt="Furnob Banner"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;
