import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const apparel = [
  {
    name: "Nike x Cactus Plant Flea Market Zip Jacket",
    img: "https://images.stockx.com/images/Nike-x-Cactus-Plant-Flea-Market-1-4-Zip-Top-Jacket-Grey-Purple-Green.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1666664121&q=60",
    price: "$215",
  },
  {
    name: "Arc'Teryx Beta LT Jacket Black",
    img: "https://images.stockx.com/images/ArcTeryx-Beta-LT-Jacket-Mens-Jacket-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660594608&q=60",
    price: "$444",
  },
  {
    name: "Supreme Dickies Wool Jacket",
    img: "https://images.stockx.com/images/Supreme-Dickies-Corduroy-Work-Jacket-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1666885083&q=60",
    price: "$322",
  },
  {
    name: "Palm Angels Teddy Bear T-Shirt Butter Brown",
    img: "https://images.stockx.com/images/Palm-Angels-Teddy-Bear-T-shirt-FW22-White-Beige.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660568176&q=60",
    price: "$174",
  },
  {
    name: "Kith Bergdorf Goodman Clifton Jacket",
    img: "https://images.stockx.com/images/Kith-Bergdorf-Goodman-Clifton-Track-Jacket-Stadium.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1666963190&q=60",
    price: "$526",
  },
  {
    name: "Ami Paris Ami De Ceour Sweater",
    img: "https://images.stockx.com/images/Ami-Paris-Ami-De-Coeur-Intarsia-Merino-Wool-Oversized-V-Neck-Sweater-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1664373862&q=60",
    price: "$343",
  },
];

const Apparel = () => {
  return (
    <div className="trending">
      <div className="flex items-center mx-[200px] mt-[50px] justify-between">
        <h1 className=" font-bold text-xl pl-1">Featured Apparel</h1>
        <Link className=" hover:bg-slate-200" to="/shoes">
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
        {apparel.map((item, i) => (
          <div
            key={i}
            className="outline px-2 outline-gray-200 max-w-[190px] max-h-[278px] flex flex-col justify-center items-center"
          >
            <img
              className="w-[150px] mt-4 px-1 h-[90px] object-contain"
              src={item.img}
              alt="/"
            />
            <div className="mt-8 mb-4">
              <p className="font-bold text-sm">{item.name}</p>
              <p className="mt-10 text-red-600 text-sm">Lowest price</p>
              <p className="font-black text-lg mb-4">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apparel;
