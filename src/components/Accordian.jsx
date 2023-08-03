import ItemList from "./ItemList";
import { useState } from "react";
import React from "react";


const Accordian = ({ data,showItems,setShowIndex }) => {

  function HandleClick() {
    setShowIndex();
  }
  return (
    <div className="w-[80%] flex flex-col items-center ">
      <div 
        onClick={HandleClick}
        className="w-[80%] flex justify-between items-center  bg-gray-100 shadow shadow-md shadow-slate-200 my-2 rounded-md px-4 py-4"
      >
        <div>
          <h1 className="text-[16px] font-bold text-slate-600">
            {data.title}({data?.itemCards?.length ?? data?.categories?.length})
          </h1>
        </div>
        <span>⬇️</span>
      </div>
      {/* if show items is true then only show this */}
      {showItems && <ItemList items={data} />}
    </div>
  );
};

export default Accordian;
