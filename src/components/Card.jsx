import { CLoudinary } from "../../utils/constants";
import React from "react";

const Card = (props) => {

  const {
    resData: { info },
  } = props;
  const {
    name,
    cloudinaryImageId: cid,
    costForTwo: price,
    cuisines,
    avgRating,
  } = info;
  return (
    <div className="hover:shadow hover:shadow-slate-400  p-2 border overflow-hidden rounded-lg flex flex-col items-center w-[240px] h-[310px] ">
      <img
        className="max-w-[100%] duration-200 ease-in-out  w-60 h-56 hover:scale-105 rounded-lg"
        src={CLoudinary + cid}
        alt=""
      />
      <div className="flex justify-between p-1 relative">
        <div className="inner-left">
          <h3 className="font-semibold">{name}</h3>
          <p className="font-small text-slate-500">
            {cuisines.join(", ").slice(0, 20).padEnd(24, ".")}
          </p>
        </div>
        <div className="inner-right flex justify-center items-baseline">
          <h3 className="rating absolute bottom-20 translate-x-2 right-0 bg-green-600 text-white px-2 rounded-md">
            {avgRating}⭐
          </h3>
          <h3 className="offer absolute bottom-20 -translate-x-2 left-0 bg-blue-500 text-white px-2 rounded-md">
            50% off
          </h3>
          <p className="text-thin text-slate-700">
            {price.slice(0, 4) ?? "₹200 for two"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;

// HOC => takes a component and we enhance it and return it
export const withPromoted = (Card) => {
  // we receive props here  from the component
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute z-8 bg-slate-600 px-2 py-1 rounded-sm -left-3 text-white">
          Promoted
        </label>
        {/* {passing to card another props} */}
        <Card {...props} />
      </div>
    );
  };
};
