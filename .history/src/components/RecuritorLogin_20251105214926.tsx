import React, { useState } from "react";
import { assets } from "../assets/assets";

function RecuritorLogin() {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmited) {
      setIsTextDataSubmited(true);
    }
  };
  return (
    <div className="absolute inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-10">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-10 rounded-xl text-slate-500 "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium ">
          Recuriter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state === "Sign Up" && isTextDataSubmited ? (
          <>
            <div className="flex items-center gap-4 m-5">
              <label htmlFor="image">
                <img src={assets.upload_area} alt="" />
                <input type="file" id="image" hidden />
              </label>
              <p>
                Upload Company <br /> logo
              </p>
            </div>
          </>
        ) : (
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forget Password?
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer "
        >
          {state === "Login"
            ? "login"
            : isTextDataSubmited
            ? "Next"
            : "create account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Dont't have an account?{" "}
            <span
              onClick={(e) => setState("Sign Up")}
              className="text-blue-600 cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default RecuritorLogin;
