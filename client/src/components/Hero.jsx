import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-[100px] mx-[100px] relative">
      <img
        className="object-cover w-full h-[600px]"
        src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="hero-bar absolute top-1/2 w-full pl-10 ml-10">
        <p className="text-5xl text-white mb-2">All in One Sneaker Shop</p>
        <p className="text-4xl text-gray-300 mb-4">Over 200,000 Shoes</p>
        <Link to="/searched">
          <button className="text-3xl py-3 px-6 cursor-pointer bg-black text-white">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
