import Navbar from "../components/Navbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
// import { SneaksAPI } from "sneaks-api";
// const SneaksAPI = require("sneaks-api");
// const sneaks = new SneaksAPI();

export const Shoes = () => {
  const [sort, setSort] = useState(false);
  const [anchor, setAnchor] = useState(false);
  // const [shoes, setShoes] = useState([]);

  const handleSort = () => {
    setSort(!sort);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  const shoes = [
    {
      name: "Jordan 1 Retro High OG",
      img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75",
      price: "$371",
      sold: "2191",
    },
    {
      name: "Jordan 4 Midnight Navy",
      img: "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Midnight-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1667401281&q=75",
      price: "$274",
      sold: "12011",
    },
    {
      name: "Jordan 3 Retro Fire Red",
      img: "https://images.stockx.com/images/Air-Jordan-3-Retro-Fire-Red-2022-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663687791&q=75",
      price: "$188",
      sold: "701",
    },
    {
      name: "Jordan 4 Retro Canyon",
      img: "https://images.stockx.com/images/Air-Jordan-4-Retro-Canyon-Purple-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660285854&q=75",
      price: "$168",
      sold: "671",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
    {
      name: "Nike Lebron 20 Violet Frost",
      img: "https://images.stockx.com/images/Nike-Lebron-20-Violet-Frost.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1663161903&q=75",
      price: "$175",
      sold: "9012",
    },
  ];

  const size = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15,
  ];

  // const AllProducts = () =>
  //   sneaks.getProducts("Yeezy Cinder", 10, function (err, products) {
  //     console.log(products);
  //   });

  return (
    <div className="shoes">
      <Navbar />
      <div className="mx-[200px] my-[50px]">
        <div className="flex flex-col px-4 py-6 bg-[#F4F3F1]">
          <h1 className="text-3xl mb-2">Sneakers</h1>
          <p>
            Every sneaker you want is always available and verified by us. Buy
            and sell new sneakers & shoes from Nike, Adidas, <br></br>Yeezy, and
            more.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 mx-[250px]">
        <div className="col-span-1">
          <div className="text-lg flex flex-col gap-3 font-bold">
            <p>SNEAKERS</p>
            <p>SHOES</p>
            <p>APPAREL</p>
            <p>ELECTRONICS</p>
            <p>TRADING CARDS</p>
            <p>ACCESSORIES</p>
            <p className="mt-8 text-red-600 mb-10">ON SALE</p>
          </div>
          <div className="text-lg flex flex-col gap-3 font-bold">
            <p>ADIDAS</p>
            <p>NIKE</p>
            <p>AIR JORDAN</p>
            <p>YEEZY</p>
            <p>NEW BALANCE</p>
            <p>REEBOK</p>
            <p>CONVERSE</p>
            <p>PUMA</p>
            <p>VANS</p>
          </div>
          <div className="mt-10 text-lg flex flex-col gap-2 font-bold">
            <h1 className="mr-4 text-xl">SIZE TYPES</h1>

            <div class="flex items-center">
              <input
                onClick={handleClick}
                id="mens-checkboox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-checkbox" class="ml-2 text-sm font-medium">
                Mens
              </label>
            </div>
            <div class="flex items-center">
              <input
                onClick={handleClick}
                id="womens-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium">
                Women
              </label>
            </div>
            <div class="flex items-center">
              <input
                onClick={handleClick}
                id="children-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium">
                Children
              </label>
            </div>
            <div class="flex items-center">
              <input
                onClick={handleClick}
                id="preschool-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium">
                Preschool
              </label>
            </div>
            <div class="flex items-center">
              <input
                onClick={handleClick}
                id="infant-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium">
                Infant
              </label>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="mb-2 text-xl">SIZES</h1>
            <div className="grid grid-cols-4 gap-2">
              {size.map((size) => (
                <button className="border border-black py-1 hover:bg-black hover:text-white">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h1 className="mt-10 text-xl">PRICES</h1>
            <div>
              <div class="flex my-1 items-center">
                <input
                  onClick={handleClick}
                  id="infant-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-[.80rem] font-medium"
                >
                  Under $100
                </label>
              </div>
              <div class="flex my-1 items-center">
                <input
                  onClick={handleClick}
                  id="infant-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-[.80rem] font-medium"
                >
                  $100 - $200
                </label>
              </div>
              <div class="flex my-1 items-center">
                <input
                  onClick={handleClick}
                  id="infant-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-[.80rem] font-medium"
                >
                  $300 - $400
                </label>
              </div>
              <div class="flex my-1 items-center">
                <input
                  onClick={handleClick}
                  id="infant-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-[.80rem] font-medium"
                >
                  $400 - $500
                </label>
              </div>
              <div class="flex my-1 items-center">
                <input
                  onClick={handleClick}
                  id="infant-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-[.80rem] font-medium"
                >
                  $500- $600
                </label>
              </div>
              <div class="flex my-1 items-center">
                <input
                  onClick={handleClick}
                  id="infant-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-[.80rem] font-medium"
                >
                  $600 +
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 ml-10 max-w-[870px]">
          <div className="relative py-10">
            <div className="absolute top-1 right-1 mr-4 text-black">
              <button
                onClick={handleSort}
                className="border relative text-sm border-1 pr-8 pl-4 py-2"
              >
                Sort By
                {sort === false ? (
                  <IoIosArrowDown className="absolute top-1 right-1 mt-2 mr-2" />
                ) : (
                  <IoIosArrowUp className="absolute top-1 right-1 mt-2 mr-2" />
                )}
              </button>

              <div id="dropdown" className="">
                <ul>
                  <li>
                    <a href="#">Price</a>
                  </li>
                  <li>Price</li>
                  <li>Price</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-y-4">
            {shoes.map((item) => (
              <div className="outline outline-gray-200 max-w-[200px] flex flex-col justify-center items-center">
                <img
                  className="w-[200px] object-contain mt-2 px-1 h-[90px]"
                  src={item.img}
                  alt=""
                />
                <div className="mt-8 mb-4 mx-2">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="mt-10 text-red-600 text-sm">Lowest price</p>
                  <p className="font-black text-lg">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
