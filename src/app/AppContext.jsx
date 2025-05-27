"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { categories, dummyProducts } from "@/app/assets/assets";
import { useRouter, usePathname } from "next/navigation";

let CreateContext = createContext();

export function AppProvider({ children }) {
  let [categoryData, setCategoryData] = useState([]);
  let [fetauredProduct, setFetauredProduct] = useState([]);
  let [productPath, setProductPath] = useState(null);
  let [input, setInput] = useState({
    search: "",
  });

  let navigate = useRouter();
  let pathName = usePathname();

  let categoryFetch = () => {
    setCategoryData(categories);
  };

  let fetauredFetch = () => {
    setFetauredProduct(dummyProducts);
  };

  useEffect(() => {
    categoryFetch();
    fetauredFetch();
  }, []);

  useEffect(() => {
    if (
      !pathName.includes("/shop") &&
      !pathName.includes("/product-category")
    ) {
      setInput({ search: "" });
    }
  }, [pathName]);

  let value = {
    navigate,
    pathName,
    categoryData,
    fetauredProduct,
    productPath,
    setProductPath,
    input,
    setInput,
  };

  return (
    <CreateContext.Provider value={value}>{children}</CreateContext.Provider>
  );
}

export function AppContext() {
  return useContext(CreateContext);
}
