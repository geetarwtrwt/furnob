"use client";
import React from "react";
import { FaUser, FaChartBar, FaCog } from "react-icons/fa";

export default function AdminLayout({ children }) {
  return (
    <div className="w-full">
      <div className="containerBox">
        <div className="w-[20%] bg-red-300">
          <AdminSideBar />
        </div>
        <div className="w-[80%] bg-blue-300"></div>
      </div>
    </div>
  );
}
