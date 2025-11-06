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
      <form action="" className="relative bg-white p-10 rounded-xl text-slate-500 ">
        <h1 className="text-center ">Recuriter {state}</h1>
        <p>Welcome back! Please sign in to continue</p>
        <>
          <div>
            <img src={assets.person_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Company Name "
              required
            />
          </div>
          <div>
            <img src={assets.email_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email id "
              required
            />
          </div>
          <div>
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={password}
              type="text"
              placeholder="Password"
              required
            />
          </div>
        </>
        <button>{state === "Login" ? "login" : "create account"}</button>
      </form>
    </div>
  );
}

export default RecuritorLogin;
