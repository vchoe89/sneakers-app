import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const ProductInfo = ({ item }) => {
  const location = useLocation();
  //   console.log(location.state.item);
  const [product, setProduct] = useState(location.state.item);
  const [sort, setSort] = useState(false);

  console.log(product);
  return (
    <div className="product__info bg-white w-full h-full">
      <div className="mx-[300px] my-[50px]">
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="text-2xl">{product.make}</h1>
            <h1 className="text-md text-gray-500 mt-2 font-bold">
              {product.colorway}
            </h1>
            <h1 className="text-xs font-bold mt-4 text-gray-800">
              <span className="bg-[#F4F3F1] p-1">
                Condition: <span className="text-green-700 ">New</span>
              </span>
            </h1>
            <div className="w-[600px] h-[400px] mt-6 px-10">
              <img className="object-contain" src={product.thumbnail} alt="/" />
            </div>
            <div className="border border-1 p-2 rounded-md">
              <span className="text-sm text-gray-600">
                {product.description}
              </span>

              <div className="mt-4 text-sm">
                <h1 className="mb-1 font-bold">
                  Brand: <span className="text-gray-500">{product.brand}</span>
                </h1>
                <h1 className="mb-1 font-bold">
                  Shoe name:{" "}
                  <span className="text-gray-500">{product.shoeName}</span>
                </h1>
                <h1 className="mb-1 font-bold">
                  Release Date:{" "}
                  <span className="text-gray-500">{product.releaseDate}</span>
                </h1>
                <h1 className="font-bold">
                  Colorway:{" "}
                  <span className="text-gray-500">{product.colorway}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="ml-10 flex flex-col relative mt-20 border max-h-[260px] min-w-[500px] px-4 py-4">
            <div>
              <div className="top-1 flex items-center justify-center right-1 text-black">
                <button
                  //   onClick={handleSort}
                  className="border text-lg relative grow border-1 pr-8 pl-4 py-3 rounded-md"
                >
                  Size
                  {sort === false ? (
                    <IoIosArrowDown
                      size={22}
                      className="absolute top-1 right-1 mt-3 mr-2"
                    />
                  ) : (
                    <IoIosArrowUp
                      size={22}
                      className="absolute top-1 right-1 mt-3 mr-2"
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="flex gap-4 mt-4 border-b-[1px] pb-3">
              <button className="py-3 relative flex min-w-[230px] justify-center grow px-6 border border-green-700 text-green-700 rounded-md">
                Wish List
              </button>
              <AiFillHeart
                size={18}
                className="absolute right-[60%] mr-2 mt-4 text-green-700"
              />
              <button className="py-3 grow px-6 border bg-green-700 border-green-700 text-white rounded-md">
                {`Buy for $${product.retailPrice}`}
              </button>
            </div>
            <div className="my-4 text-sm bg-[#F4F3F1] px-2 flex justify-center">
              <h1 className="text-green-800 font-extrabold">
                Buy now{" "}
                <span className="text-gray-800">Staring at $23/mo.</span>{" "}
                Prequalify Now
              </h1>
            </div>
            <button className="py-3 px-2 absolute bottom-3 min-w-[465px] bg-green-700 text-white rounded-md">
              Want to Sell? Find out how.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
