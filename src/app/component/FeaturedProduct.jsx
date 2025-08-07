import React from "react";

function FeaturedProduct() {
  return (
    <>
      <section className="containerBox py-16 flex flex-col gap-8 justify-between">
        <div className="text-center flex flex-col gap-1">
          <h2 className="text-3xl font-medium">
            Featured
            <span className="text-primary font-bold ml-2">Categories</span>
          </h2>
          <p>Visit our shop to see amazing creations from our designers.</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col bg-cardBg text-cartText shadow-md w-64 hover:-translate-y-1 transition duration-500">
            <img
              className="w-72 h-40 object-cover"
              src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
              alt="image"
            />
            <div className="p-2 text-sm">
              <p className="">$ 29.00</p>
              <p className="text-title font-medium text-base my-1.5">
                Chris Jordan
              </p>
              <p>
                Looks amazing out of the box. I barely had to customize
                anything.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="bg-primary w-full text-white hover:bg-secondary hover:text-black py-2">
                  Add to cart
                </button>
                <button className="border-2 border-primary text-primary w-full hover:bg-primary hover:text-white py-2">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cardBg text-cartText shadow-md w-64 hover:-translate-y-1 transition duration-500">
            <img
              className="w-72 h-40 object-cover"
              src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
              alt="image"
            />
            <div className="p-4 text-sm">
              <p className="">$ 29.00</p>
              <p className="text-title font-medium text-base my-1.5">
                Chris Jordan
              </p>
              <p>
                Looks amazing out of the box. I barely had to customize
                anything.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="bg-primary w-full text-white hover:bg-secondary hover:text-black py-2">
                  Add to cart
                </button>
                <button className="border-2 border-primary text-primary w-full hover:bg-primary hover:text-white py-2">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cardBg text-cartText shadow-md w-64 hover:-translate-y-1 transition duration-500">
            <img
              className="w-72 h-40 object-cover"
              src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
              alt="image"
            />
            <div className="p-4 text-sm">
              <p className="">$ 29.00</p>
              <p className="text-title font-medium text-base my-1.5">
                Chris Jordan
              </p>
              <p>
                Looks amazing out of the box. I barely had to customize
                anything.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="bg-primary w-full text-white hover:bg-secondary hover:text-black py-2">
                  Add to cart
                </button>
                <button className="border-2 border-primary text-primary w-full hover:bg-primary hover:text-white py-2">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cardBg text-cartText shadow-md w-64 hover:-translate-y-1 transition duration-500">
            <img
              className="w-72 h-40 object-cover"
              src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
              alt="image"
            />
            <div className="p-4 text-sm">
              <p className="">$ 29.00</p>
              <p className="text-title font-medium text-base my-1.5">
                Chris Jordan
              </p>
              <p>
                Looks amazing out of the box. I barely had to customize
                anything.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="bg-primary w-full text-white hover:bg-secondary hover:text-black py-2">
                  Add to cart
                </button>
                <button className="border-2 border-primary text-primary w-full hover:bg-primary hover:text-white py-2">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProduct;
