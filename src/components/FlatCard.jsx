import React from "react";
import Navbar from "./Navbar";
import CardFlatRoom from "./CardFlatRoom";

// import link from "../../src/images/3bhkflat.jpg";

const FlatCard = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-around flex-wrap mx-10 mt-14 cursor-pointer">

   <CardFlatRoom/>
   <CardFlatRoom/>
   <CardFlatRoom/>
    </div>


    </>
  );
};

export default FlatCard;