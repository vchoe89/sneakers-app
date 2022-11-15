import React from "react";

const Banner = () => {
  return (
    <div className="flex mx-[200px] justify-center">
      <img
        className="object-contain mr-2"
        src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt8e401a0653d08cb2/63656d19e7a00f46f907f7a8/New_Balance_990v6_assets-11.3.22SecondaryA_(1).jpg?format=jpg&auto=webp&height=438"
        alt="/"
      />
      <img
        className="object-contain"
        src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blta1ea591f9ee5fc01/63653ae32b6d754895c55acd/Gucci_Shoes_Now_on_StockXSecondaryB.jpg?format=jpg&auto=webp&height=438"
        alt="/"
      />
    </div>
  );
};

export default Banner;
