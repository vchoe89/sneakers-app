import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const Trending = () => {
  const [shoes, setShoes] = useState([]);
  // const shoes = [
  //   {
  //     name: "Jordan 1 Retro High OG",
  //     img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75",
  //     price: "$371",
  //     sold: "2191",
  //   },
  //   {
  //     name: "Jordan 4 Midnight Navy",
  //     img: "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Midnight-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1667401281&q=75",
  //     price: "$274",
  //     sold: "12011",
  //   },
  //   {
  //     name: "Jordan 3 Retro Fire Red",
  //     img: "https://images.stockx.com/images/Air-Jordan-3-Retro-Fire-Red-2022-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663687791&q=75",
  //     price: "$188",
  //     sold: "701",
  //   },
  //   {
  //     name: "Jordan 4 Retro Canyon",
  //     img: "https://images.stockx.com/images/Air-Jordan-4-Retro-Canyon-Purple-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660285854&q=75",
  //     price: "$168",
  //     sold: "671",
  //   },
  //   {
  //     name: "Nike Lebron 20 Violet Frost",
  //     img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
  //     price: "$175",
  //     sold: "9012",
  //   },
  // ];

  useEffect(() => {
    try {
      axios.get("http://localhost:8800/trending").then((res) => {
        setShoes(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="trending">
      <div className="flex items-center mx-[200px] mt-[50px] justify-between">
        <h1 className=" font-bold text-xl pl-1">Trending Sneakers</h1>
        <Link className=" hover:bg-slate-200" to="/searched">
          <div className="flex items-center justify-center">
            <div className="text-green-800 font-black text-sm">Shop All</div>
            <div className="items-center">
              <BsArrowRightShort
                className="text-green-800 items-center"
                size={25}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="mx-[200px] mt-[20px] mb-[50px] flex justify-between space-x-2 p-1">
        {shoes.map((item, i) => (
          <div
            key={i}
            className="outline outline-gray-200 min-w-[210px] max-w-[230px] flex flex-col justify-center items-center"
          >
            <img
              className="w-[1780px] mt-4 px-1 h-[95px] object-contain"
              src={item.thumbnail}
              alt=""
            />
            <div className="mt-8 mix-w-[210px] px-2 mb-4">
              <p className="">{item.shoeName}</p>
              <p className="mt-10 text-red-600 text-sm">Lowest price</p>
              <p className="font-black text-lg mb-4">${item.retailPrice}</p>
              <p className="text-xs font-bold flex text-black items-center py-1 pl-1 bg-gray-100 max-w-fit pr-1">
                {Math.floor(item.goatProductId / 20)} sold
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
