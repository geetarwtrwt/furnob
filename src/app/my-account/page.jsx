"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "@/app/AppContext";

export default function Page() {
  let { navigate } = AppContext();
  let [state, setState] = useState("login");

  let [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`/api/user/${state}`, input, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.success === true) {
        setInput({
          name: "",
          email: "",
          password: "",
        });
        if (state === "register") {
          setState("login");
        } else if (state === "login") {
          navigate.push("/");
        }
        toast.success(res.data.msg);
      } else {
        toast.success(res.data.msg);
      }
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("User already exists");
      } else if (err.response?.status === 403) {
        toast.error("User not found");
      } else {
        toast.error("Something went wrong");
      }
      console.log(err.message);
    }
  };

  return (
    <>
      <section>
        <div className="containerbox py-10 pt-30 md:pt-36 flex justify-between items-center flex-col space-y-1">
          <h4 className="text-xl font-bold">
            {state === "login" ? "Log In" : "Register"}
          </h4>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {state === "register" && (
              <div>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded py-1.5 ps-2"
                />
              </div>
            )}
            <div>
              <label htmlFor="email">Username or email address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded py-1.5 ps-2"
              />
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded py-1.5 ps-2 !text-xl"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-main text-white w-1/2 py-2.5 rounded font-bold"
              >
                {state === "login" ? "Log In" : "Create Account"}
              </button>
            </div>
            <p>
              {state === "login"
                ? "Don’t have an account? "
                : "Already have an account?"}

              <span
                onClick={() =>
                  setState(state === "login" ? "register" : "login")
                }
                className="cursor-pointer underline"
              >
                {state === "login" ? "Register" : "Log In"}
              </span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
