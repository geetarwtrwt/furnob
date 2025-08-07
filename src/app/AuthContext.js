"use client";

import React, { createContext, useContext } from "react";
import { usePathname,useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

let UseContext = createContext();

export let ProvideContext = ({ children }) => {
  let pathName = usePathname();
  let route = useRouter();
  return (
    <UseContext.Provider value={{ pathName, toast,axios,route }}>
      {children}
    </UseContext.Provider>
  );
};

export let UseAppContext = () => {
  return useContext(UseContext);
};
