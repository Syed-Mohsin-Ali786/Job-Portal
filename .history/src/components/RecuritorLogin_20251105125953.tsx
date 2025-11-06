import React, { useState } from "react";
import { assets } from "../assets/assets";

function RecuritorLogin() {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  return (
    <div className="absolute top-0 inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-10">
      <form
        action=""
        className="relative bg-white p-10 rounded-xl text-slate-500 "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium ">
          Recuriter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        <>
          {state !== "Login" && (
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.person_icon} alt="" />
              <input
                className="outline-none"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Company Name "
                required
              />
            </div>
          )}

          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5 ">
            <img src={assets.email_icon} alt="" />
            <input
              className="outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email id "
              required
            />
          </div>
          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5 ">
            <img src={assets.lock_icon} alt="" />
            <input
              className="outline-none"
              onChange={(e) => setName(e.target.value)}
              value={password}
              type="text"
              placeholder="Password"
              required
            />
          </div>
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forget Password?
          </p>
        </>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full ">
          {state === "Login" ? "login" : "create account"}
        </button>
        {
          state===
          <p className="">
          Dont't have an account? <span className="text-blue-400">Sign Up</span>
        </p>
        <p>
          Already have an account? <span>Login</span>
        </p>}
      </form>
    </div>
  );
}

export default RecuritorLogin;
