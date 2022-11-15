import React from "react";
import Apparel from "../components/Apparel";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Popular />
      <Banner />
      <Apparel />
    </>
  );
};

export default Home;
