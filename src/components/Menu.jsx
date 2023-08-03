import { CLoudinary } from "../../utils/constants";
import { Menuu } from "../../utils/constants";
import { restaurants } from "../../utils/hardcoded";
import {  menu_list } from "../../utils/hardcoded";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Accordian from "./Accordian";
import { useState } from "react";
import React from "react";


const Menu = () => {
  const resfilterd = menu_list.filter((x) => {
    return (
      x.card.card.hasOwnProperty("title") &&
      x.card.card.hasOwnProperty("itemCards")
    );
  });
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">Menu</h1>
      {/* controlled component */}
      {resfilterd.map((x, index) => {
        return (
          <Accordian
            data={x?.card?.card}
            key={index}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};
export default Menu;
