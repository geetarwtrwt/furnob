"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { categories, dummyProducts } from "@/app/assets/assets";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

let CreateContext = createContext();

export function AppProvider({ children }) {
  let navigate = useRouter();
  let pathName = usePathname();

  let [user, setUser] = useState(null);
  let [admin, setAdmin] = useState(null);
  let [cartItem, setCartItem] = useState({});

  let getUserData = async () => {
    try {
      let res = await axios.get("/api/user/user-data");
      if (res?.data?.success === true) {
        let checkAdmin = res.data.msg.isAdmin === true;
        setUser(res.data.msg);
        setAdmin(checkAdmin);
        setCartItem(res.data.msg.cartItem);
      } else {
        setUser(null);
        setAdmin(false);
      }
    } catch (err) {
      console.log(err);
      setUser(null);
      setAdmin(false);
    }
  };
  useEffect(() => {
    if (admin === false && pathName.startsWith("/admin")) {
      navigate.push("/");
    }
  }, [admin, pathName, navigate]);

  useEffect(() => {
    let selectedCartItem = async () => {
      try {
        let res = await axios.put(`/api/cart/update`, { cartItem });
        if (res.data.success === false) {
          toast.error(res.data.msg);
        }
      } catch (err) {
        toast.error(err.msg);
      }
    };
    if (user) {
      selectedCartItem();
    }
  }, [cartItem]);

  let [categoryData, setCategoryData] = useState([]);
  let [fetauredProduct, setFetauredProduct] = useState([]);
  let [productPath, setProductPath] = useState(null);
  let [input, setInput] = useState({
    search: "",
  });

  let categoryFetch = () => {
    setCategoryData(categories);
  };

  let fetauredFetch = async () => {
    try {
      let res = await axios.get("/api/product/product-list");
      console.log(res.data.msg);
      setFetauredProduct(res.data.msg);
    } catch (err) {
      toast.error(err.msg);
    }
  };

  useEffect(() => {
    categoryFetch();
    fetauredFetch();
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (
      !pathName.includes("/shop") &&
      !pathName.includes("/product-category")
    ) {
      setInput({ search: "" });
    }
  }, [pathName]);

  let addToCart = (id) => {
    // if (!cartItem) return;
    // cartItem me jo h uska clone bana lo
    let data = structuredClone(cartItem ?? {});
    if (data[id]) {
      // agar data h to usko increment karo
      // data[id] krne se id dynamic hoga
      data[id] += 1;
    } else {
      // agar data nhi h to usko 1 karo
      data[id] = 1;
    }
    setCartItem(data);
  };

  let removeFromCart = (id) => {
    let data = structuredClone(cartItem);
    if (data[id]) {
      data[id] -= 1;
      if (data[id] <= 0) {
        delete data[id];
      }
    }
    setCartItem(data);
  };

  let totalCount = () => {
    return Object.values(cartItem ?? {}).reduce((acc, val) => acc + val, 0);
  };

  let deleteFromCart = (id) => {
    let data = structuredClone(cartItem);
    delete data[id];
    setCartItem(data);
  };

  let totalAmount = () => {
    return Object.keys(cartItem ?? {}).reduce((acc, id) => {
      let item = fetauredProduct.find((e) => e._id === id);
      let price = Number(String(item.offerPrice).replaceAll(/,/g, ""));
      return acc + price * cartItem[id];
    }, 0);
  };

  let value = {
    user,
    setUser,

    admin,
    setAdmin,
    getUserData,

    navigate,
    pathName,
    categoryData,
    fetauredProduct,
    productPath,
    setProductPath,
    input,
    setInput,

    cartItem,
    addToCart,
    removeFromCart,
    totalCount,
    deleteFromCart,
    totalAmount,
  };

  return (
    <CreateContext.Provider value={value}>{children}</CreateContext.Provider>
  );
}

export function AppContext() {
  return useContext(CreateContext);
}
