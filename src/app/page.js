import Image from "next/image";
import HeroSection from "@/app/component/HeroSection";
import CategoryCarousel from "@/app/component/CategoryCarousel";
import NewDecoration from "@/app/component/NewDecoration";
import FeaturedProduct from "@/app/component/FeaturedProduct";
import Testimonial from "@/app/component/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <NewDecoration />
      <FeaturedProduct />
      <Testimonial />
    </>
  );
}
