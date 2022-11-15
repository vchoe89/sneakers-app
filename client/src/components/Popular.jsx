import React from "react";

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="mx-[200px] mt-[50px] font-bold text-xl pl-1">
        Popular Brands
      </h1>
      <div className="mx-[200px] my-[20px] mb-[50px] flex justify-between p-1">
        <div className="relative">
          <img
            className="max-w-[240px] h-[160px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrdr2grk0EkZlaHXRIWpr_tyP-dgBHpojcvA&usqp=CAU"
            alt=""
          />
          <img
            className="absolute top-0 object-contain right-1 z-50 w-[50px] p-1 h-[50px] bg-white mt-0 mr-4"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/800px-Jumpman_logo.svg.png"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="max-w-[240px] h-[160px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFVTyyHs9o6MmCuVa7eHs4aDOK2VOOFaoTXP8bLKSYvMUtc1vS82QtGyxrq4S1_KAgqE&usqp=CAU"
            alt=""
          />
          <img
            className="absolute object-contain top-0 right-1 z-50 w-[50px] py-1 h-[50px] bg-white mt-0 mr-4"
            src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="max-w-[240px] h-[160px]"
            src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2015%2F12%2Fnike-roshe-one-retro-2.jpg?q=75&w=800&cbr=1&fit=max"
            alt=""
          />
          <img
            className="absolute object-contain top-0 right-1 z-50 w-[50px] h-[50px] bg-white mt-0 mr-4"
            src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-mobile.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className=" min-w-[240px] h-[160px]"
            src="https://publish.one37pm.net/wp-content/uploads/2020/07/bestnewbalancesneakers-mobile.jpg"
            alt=""
          />
          <img
            className="absolute object-contain  top-0 right-1 z-50 w-[50px] p-1 h-[50px] bg-white mt-0 mr-4"
            src="https://i.pinimg.com/originals/9b/60/c3/9b60c3986614a3fc5dd0c98b6c9d7653.png"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="max-w-[240px] h-[160px]"
            src="https://cdn.fleetfeet.com/assets/cumulus_SMU_Womens.jpeg/dynamic:1-aspect:1.7777777777778-fit:cover-strategy:entropy/cumulus_SMU_Womens--1600.jpg"
            alt=""
          />
          <img
            className="absolute object-contain top-0 right-1 z-50 w-[50px] p-1 h-[50px] bg-white mt-0 mr-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/2560px-Asics_Logo.svg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
