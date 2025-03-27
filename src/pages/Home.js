import React from "react";
import Body from "../components/Body.js";
import CardFlat from "../components/CardFlat.js";
import CardPG from "../components/CardPG.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import SearchBar from "../components/SearchBar.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <SearchBar />
      <CardFlat />
      <CardPG />
      <Footer />
    </div>
  );
};

export default Home;
