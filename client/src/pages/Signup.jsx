import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple, BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login w-full h-screen bg-gray-100">
      <Link to="/">
        <div className="flex justify-center w-full bg-white py-5 border-b-2 border-gray-200">
          Sneakers
        </div>
      </Link>
      <div className="mx-auto bg-white border-gray-300 rounded max-w-[400px] min-h-[600px] py-18 my-10 border p-3">
        <div className="flex text-lg mx-auto justify-around py-2 pb-4 border-b-2">
          <div className="border-b-2 text-xl border-black">Sign Up</div>
          <Link to="/login">
            <div>Log In</div>
          </Link>
        </div>
        <div className="flex w-full py-4 flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full relative"
          >
            <input
              onChange={(e) => setFirstname(e.target.value)}
              className="p-3 focus:border-gray-800 outline-none border border-gray-300 rounded-md mb-2 placeholder:text-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLastname(e.target.value)}
              className="p-3 focus:border-gray-800 outline-none border border-gray-300 rounded-md mb-2 placeholder:text-sm"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 focus:border-gray-800 outline-none border border-gray-300 rounded-md mb-2 placeholder:text-sm"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 focus:border-gray-800 outline-none border border-gray-300 rounded-md placeholder:text-sm"
              type="password"
              placeholder="Password"
            />
            <AiFillEyeInvisible
              size={20}
              className="absolute bottom-[26%] items-center right-1 mb-3 mr-2 text-gray-400"
            />
            <div className="flex cursor-pointer justify-end text-xs text-blue-900 mt-3"></div>
            <div className="w-full cursor-pointer flex justify-center bg-gray-800 text-white mt-4 rounded-sm text-sm">
              <button className="py-3">Log In</button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="flex-shrink text-xs text-gray-500 px-2 italic font-light">
            OR
          </span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <div className="flex flex-col w-full justify-center mt-2 font-bold">
          <div className="flex flex-row items-center border border-gray-600 rounded-md w-full justify-center py-4 my-1">
            <FcGoogle size={20} />
            <span className="text-sm ml-4">Continue with Google</span>
          </div>
          <div className="flex flex-row items-center border border-gray-600 rounded-md w-full justify-center py-4 my-1">
            <BsFacebook className="text-blue-700" size={20} />
            <span className="text-sm ml-4">Continue with Facebook</span>
          </div>
          <div className="flex flex-row items-center border border-gray-600 rounded-md w-full justify-center py-4 my-1">
            <BsApple size={20} />
            <span className="text-sm ml-4">Continue with Apple</span>
          </div>
          <div className="flex flex-row items-center border border-gray-600 rounded-md w-full justify-center py-4 my-1">
            <BsTwitter className="text-blue-400" size={20} />
            <span className="text-sm ml-4">Continue with Twitter</span>
          </div>
        </div>

        <div className="text-[.68rem] flex justify-center terms my-2">
          <p className="text-gray-500">
            {" "}
            By logging in, You agree to the{" "}
            <span className="text-black font-bold">
              {" "}
              Terms of Service{" "}
            </span> and{" "}
            <span className="text-black font-bold">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
