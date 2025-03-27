import React from "react";
import Cardy from "../components/cardy.js";

import onebhk from "../images/1bhkflat.webp";
import twobhk from "../images/2bhkflat.jpeg";
import threebhk from "../images/3bhkflat.jpg";

const CardFlat = () => {
  return (
    <div>
      <h1 className="my-2 flex item-center justify-center text-2xl font-serif">
        Looking for Flats ?
      </h1>
      <div className="overflow-x-auto lg:overflow-x-hidden xl:overflow-x-hidden mx-4 my-8">
        <div className="flex space-x-4 mx-4">
          <div className="">
            <Cardy title="1 BHK" urlImg={onebhk} />
          </div>

          <div>
            <Cardy title="2 BHK" urlImg={twobhk} />
          </div>

          <div>
            <Cardy title="3 BHK" urlImg={threebhk} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlat;
