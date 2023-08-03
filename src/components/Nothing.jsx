import { Link } from "react-router-dom";
import React from "react";

const Nothing = () => {
  return (
    <div className="  rounded-md  flex justify-center text-center mt-8">
      <div>
        <h1 className="font-bold text-slate-500 m-2">
          {" "}
          Uh No! Your cart is empty
        </h1>
        <button className="p-2 m-2 bg-black text-white rounded-lg">
          <Link to="/">Order here</Link>
        </button>
      </div>
    </div>
  );
};
export default Nothing;
