import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="login w-full h-screen bg-gray-100">
      <Link to="/">
        <div className="flex justify-center w-full bg-white py-5 border-b-2 border-gray-200">
          Sneakers
        </div>
      </Link>
      <div className="mx-auto bg-white max-w-[400px] min-h-[600px] border my-10 border-gray-300 rounded p-3">
        <div className="flex text-lg mx-auto justify-around py-2 pb-4 border-b-2">
          <Link to="/signup">
            <div className="">Sign Up</div>
          </Link>
          <div className="border-b-2 text-xl border-black">Log In</div>
        </div>
        <div className="flex w-full py-4 flex-col">
          <div className="flex flex-col w-full relative">
            <input
              className="p-3 focus:border-gray-800 outline-none border border-gray-300 rounded-md mb-2 placeholder:text-sm"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-3 focus:border-gray-800 outline-none border border-gray-300 rounded-md placeholder:text-sm"
              type="password"
              placeholder="Password"
            />
            <AiFillEyeInvisible
              size={20}
              className="absolute bottom-1 right-1 mb-3 mr-2 text-gray-400"
            />
          </div>
          <div className="flex cursor-pointer justify-end text-xs text-blue-900 mt-3">
            <span className="">Forgot Password?</span>
          </div>
          <div className="w-full cursor-pointer flex justify-center bg-gray-800 text-white mt-4 rounded-sm text-sm">
            <button className="py-3">Log In</button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="flex-shrink text-sm text-gray-500 px-2 italic font-light">
            OR
          </span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <div className="flex flex-col w-full justify-center mt-4 font-bold">
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
