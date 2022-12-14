import Navbar from "../components/Navbar";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import Product from "../components/Product";

export const Searched = () => {
  const [sort, setSort] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [sortedShoes, setSortedShoes] = [];
  const [brand, setBrand] = useState("jordans");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [newest, setNewest] = useState("");
  const [trending, setTrending] = useState("");

  useEffect(() => {
    try {
      axios.get(`http://localhost:8800/${brand}`).then((res) => {
        setShoes(res.data);
        console.log("INITIAL STATE>> ", shoes);
      });
    } catch (error) {
      console.log(error);
    }
  }, [brand]);

  const highToLow = () => {
    const highToLow = shoes.sort(function (a, b) {
      return b.retailPrice - a.retailPrice;
    });
    setShoes([...highToLow]);
  };

  const lowToHigh = () => {
    const highToLow = shoes.sort(function (a, b) {
      return a.retailPrice - b.retailPrice;
    });
    setShoes([...highToLow]);
  };
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  const brandFilter = (e) => {
    console.log(e.target.value);
    setBrand(e.target.value);
  };

  const size = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15,
  ];

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
          <div className="text-md flex flex-col gap-3 font-bold">
            <h1 className="text-xl text-red-600 font-extrabold">SNEAKERS</h1>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="adidas"
            >
              ADIDAS
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="nike"
            >
              NIKE
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="jordans"
            >
              AIR JORDAN
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="yeezy"
            >
              YEEZY
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="newbalance"
            >
              NEW BALANCE
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="reebok"
            >
              REEBOK
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="converse"
            >
              CONVERSE
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="puma"
            >
              PUMA
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="asics"
            >
              ASICS
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="vans"
            >
              VANS
            </button>
          </div>
          <div className="text-md flex mt-8 flex-col gap-3 font-bold">
            <h1 className="text-xl text-red-600 font-extrabold">
              LUXURY BRANDS
            </h1>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="balenciaga"
            >
              BALENCIAGA
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="chanel"
            >
              CHANEL
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="gucci"
            >
              GUCCI
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="dior"
            >
              DIOR
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="hermes"
            >
              HERMES
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="louisvutton"
            >
              LOUIS VUTTON
            </button>
          </div>

          <div className="text-md flex mt-8 flex-col gap-3 font-bold">
            <h1 className="text-xl text-red-600 font-extrabold">
              CASUAL SHOES
            </h1>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="crocs"
            >
              CROCS
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="clarks"
            >
              CLARKS
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="birkenstocks"
            >
              BIRKENSTOCKS
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="ugg"
            >
              UGG
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="timberland"
            >
              TIMBERLAND
            </button>
            <button
              onClick={brandFilter}
              className="flex justify-start"
              value="drmartens"
            >
              DR. MARTENS
            </button>
          </div>
          <div className="text-lg mt-8 flex flex-col gap-2 font-bold">
            <h1 className="mr-4 text-xl text-red-600">SIZE TYPES</h1>

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
            <h1 className="mb-2 text-red-600 text-xl">SIZES</h1>
            <div className="grid grid-cols-4 gap-2">
              {size.map((size, i) => (
                <button
                  key={i}
                  className="border border-black py-1 hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h1 className="mt-10 text-red-600 text-xl">PRICES</h1>
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
          <div className="relative py-10 z-50">
            <div className="min-w-[100px] max-h-[70px] absolute top-1 right-1 mr-[20px]">
              <FormControl size="small" fullWidth>
                <InputLabel id="sort-label">Sort</InputLabel>
                <Select
                  labelId="sort-label"
                  id="sort"
                  value={shoes}
                  label="sort"
                  onChange={handleClick}
                >
                  <MenuItem onClick={highToLow}>Price High to low</MenuItem>
                  <MenuItem onClick={lowToHigh}>Price Low to High</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-y-4 z-0">
            {shoes.map((item) => (
              <Product key={item.urlKey} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
