import User from "./User";
import React from "react";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center items-center max-h-full max-w-full">
      <p className="text-sm sm:text-2xl font-bold text-slate-700 ">
        Hello! Welcome to Foodie😍
      </p>
      <div className="text-left">
      <p className="m-2">✅We ensure faster delivery</p>
      <p className="m-2">✅We charge minimum</p>
      <p className="m-2">✅Only from top rated restaurants</p>
      
      </div>
    </div>
  );
};

export default About;
