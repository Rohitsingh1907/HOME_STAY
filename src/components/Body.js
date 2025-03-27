import React from "react";

import Cardy from "../components/cardy.js";

import banglore from "../images/banglore.jpg";
import chennai from "../images/chennai.jpg";
import jaipur from "../images/Jaipur.jpeg";
import kolkata from "../images/kolkata.jpg";
import mumbai from "../images/mumbai.jpg";

const Body = () => {
  return (
    <div className="overflow-x-auto lg:overflow-x-hidden xl:overflow-x-hidden mx-4 my-8">
      <div className="flex space-x-4 mx-4">
        <div className="">
          <Cardy title="Banglore" urlImg={banglore} />
        </div>

        <div>
          <Cardy title="Kolkata" urlImg={kolkata} />
        </div>

        <div>
          <Cardy title="Chennai" urlImg={chennai} />
        </div>

        <div>
          <Cardy title="Mumbai" urlImg={mumbai} />
        </div>

        <div>
          <Cardy title="Jaipur" urlImg={jaipur} />
        </div>
      </div>
    </div>
  );
};

export default Body;
