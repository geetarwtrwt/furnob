import React from "react";

export default function PageHeader({ categoryTitle }) {
  return (
    <>
      <div className="pageheader  w-full bg-no-repeat">
        <div className="containerbox py-10 pt-32 flex items-end justify-center capitalize text-[30px] sm:text-5xl text-white md:text-7xl">
          {categoryTitle ? `Category: ${categoryTitle.text}` : "Shop"}
        </div>
      </div>
    </>
  );
}
