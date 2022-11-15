import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GiConverseShoe } from "react-icons/gi";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user?.email);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex sticky flex-row justify-between mx-auto py-4 px-4 border-b-2">
      <div className="flex sticky flex-row items-center">
        <Link to="/">
          <div className="mr-4 text-green-700">
            <GiConverseShoe size={50} />
          </div>
        </Link>
        <div className="relative ml-4 w-[800px] rounded flex border border-gray-300 items-center md:border-1 py-2 md:shadow-sm">
          <input
            className="ml-8 pl-2 text-sm px-20 flex-grow bg-transparent outline-none"
            type="text"
            placeholder="Search for brand, color, etc."
          />
          <BiSearch className="absolute ml-2 " size={20} />
        </div>
      </div>

      <div className="flex flex-row items-center justify-around gap-6 text-md pr-4">
        <p>Browse</p>
        <p>News</p>
        <p>About</p>
        <p>Help</p>
        <p>Sell</p>

        {user?.email ? (
          <div className="ml-8">
            <Link to="/account">
              <button className="py-1 mr-3 px-4 bg-white text-gray-600 outline">
                Account
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="py-1 px-2 bg-gray-700 text-white outline outline-gray-700"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="ml-8">
            <Link to="/login">
              <button className="py-1 mr-3 px-4 bg-white text-gray-600 outline">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="py-1 px-2 bg-gray-700 text-white outline outline-gray-700">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
