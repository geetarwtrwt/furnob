import MainBanner from "@/app/component/MainBanner";
import CategorySection from "@/app/component/CategorySection";
import NewDecoration from "@/app/component/NewDecoration";
import FeaturedProduct from "@/app/component/FeaturedProduct";
import TopDesigner from "@/app/component/TopDesigner";
import TestimonialSection from "@/app/component/TestimonialSection";

export default function Home() {
  return (
    <>
      <MainBanner />
      <CategorySection />
      <NewDecoration />
      <FeaturedProduct />
      <TopDesigner />
      <TestimonialSection />
    </>
  );
}
