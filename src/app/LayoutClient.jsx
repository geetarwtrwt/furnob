"use client";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import { AppContext } from "@/app/AppContext";

export default function LayoutClient({ children }) {
  let { pathName } = AppContext();
  let isAdmin = pathName.includes("admin");
  return (
    <>
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}
