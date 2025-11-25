import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import useContextProvider from "../hooks/useContext";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RecuritorLogin() {
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContextProvider();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmited) {
      return setIsTextDataSubmited(true);
    }

    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/company/login`, {
          email,
          password,
        });
        if (data.success) {
          setCompanyToken(data.token);
          setCompanyData(data.company);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      } else {
        if (!image) {
          toast.error("Please upload a company logo.");
          return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("image", image);
        const { data } = await axios.post(
          `${backendUrl}/api/company/register`,
          formData
        );
        if (data.success) {
          setCompanyToken(data.token);
          setCompanyData(data.company);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message);
        const backendErrorMessage = error.response?.data?.message;
        throw new Error(backendErrorMessage || "Login failed");
      }
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unexpected error occurred");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="absolute inset-0  backdrop-blur-sm bg-black/30 flex justify-center items-center z-10">
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
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setImage(e.target.files[0]);
                    }
                  }}
                  type="file"
                  id="image"
                  hidden
                />
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
          className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer mt-4"
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
              onClick={() => setState("Sign Up")}
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
        <img
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
          onClick={() => setShowRecruiterLogin(false)}
        />
      </form>
    </div>
  );
}

export default RecuritorLogin;
