"use client";
import React, { useState } from "react";
import { UseAppContext } from "../AuthContext";

function Page() {
  let { toast, axios, route } = UseAppContext();
  const [state, setState] = useState("login");
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
      if (state === "login") {
        let res = await axios.post("/api/user/login", input);
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.msg);
          route.push("/");
        } else {
          toast.error(res.data.msg);
        }
      } else if (state === "register") {
        let res = await axios.post("/api/user/signup", input);
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.msg);
          setState(!state);
          setInput({
            name: "",
            email: "",
            password: "",
          });
        } else {
          toast.error(res.data.msg);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="containerBox flex flex-col items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-cardBg text-cartText flex flex-col gap-4 items-center p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 "
        >
          <p className="text-2xl font-medium m-auto">
            <span className="text-text">User</span>
            {state === "login" ? "Login" : "Sign Up"}
          </p>
          {state === "register" && (
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={input.name}
                name="name"
                onChange={handleChange}
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                type="text"
                required
              />
            </div>
          )}
          <div className="w-full ">
            <label>Email</label>
            <input
              id="email"
              value={input.email}
              name="email"
              onChange={handleChange}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="email"
              required
            />
          </div>
          <div className="w-full ">
            <label>Password</label>
            <input
              id="password"
              value={input.password}
              name="password"
              onChange={handleChange}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="password"
              required
            />
          </div>
          {state === "register" ? (
            <p>
              Already have account?
              <span
                onClick={() => setState("login")}
                className="text-button_Price cursor-pointer"
              >
                click here
              </span>
            </p>
          ) : (
            <p>
              Create an account?
              <span
                onClick={() => setState("register")}
                className="text-button_Price cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
          <button className="bg-primary hover:bg-secondary transition-all text-white w-full py-2 rounded-md cursor-pointer">
            {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
