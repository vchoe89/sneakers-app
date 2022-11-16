import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Link to={`/searched/${item.urlKey}`} state={{ item: item }}>
      <div className="outline outline-gray-200 max-w-[200px] min-h-[274px] max-h-[274px] flex flex-col justify-center items-center mb-4">
        <img
          className="w-[200px] object-contain mt-2 px-1 h-[90px]"
          src={item.thumbnail}
          alt=""
        />
        <div className="mt-8 mb-4 mx-2">
          <p className="text-sm font-bold">{item.shoeName}</p>
          <p className="mt-10 text-red-600 text-sm">Lowest price</p>
          <p className="font-black text-lg">${item.retailPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
