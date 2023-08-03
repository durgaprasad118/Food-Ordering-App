import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import React from "react";
import { useState, useEffect } from "react";

import { CLoudinary } from "../../utils/constants";
import { addItems, clearCart, removeItems } from "../../utils/cartSlice";
import Nothing from "./Nothing";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const Handleclick = () => {
    dispatch(clearCart());
  };
  const [arr, setArr] = useState(cartItems);
  const [filarr, setFilArr] = useState(cartItems);
  const [daam,setDaam] = useState(0);
  useEffect(() => {
    setArr(cartItems);
    setFilArr(cartItems);
  }, cartItems);
  console.log(arr);

  function INC(d) {
    console.log("hello");
    console.log(d);
    const filtered = filarr.filter((x) => {
      return x?.card?.info?.id != d;
    });
    setFilArr(filtered);
  }

  return cartItems.length === 0 ? (
    <div className="">
      <Nothing />
    </div>
  ) : (
    <div className="flex flex-col items-center m-3 p-3">
      <h1 className="text-xl font-bold  ">Cart</h1>
      <button
        onClick={Handleclick}
        className="p-2 m-2 bg text-white bg-black rounded-lg"
      >
        Clear Cart
      </button>
      <div>
        {filarr.map((x) => {
          return (
            <div
              key={x?.card?.info?.id}
              className="mt-2 m-2 p-3 border-b-2  flex justify-between items-center w-[300px] sm:w-[500px] md:w-[700px] rounded-md overflow-hidden shadow shadow-md shadow-slate-300"
            >
              {x?.card?.info?.imageId ? (
                <img
                  className="w-24  rounded-md"
                  src={CLoudinary + x?.card?.info?.imageId}
                  alt=""
                />
              ) : (
                <img
                  className="w-20 rounded-md"
                  src={CLoudinary + "ppbsmzlpigphoalqdyim"}
                  alt=""
                />
              )}
              <h1 className="text font-medium">{x?.card?.info?.name}</h1>
              <p className="text-sm font-medium">
                ₹ {x?.card?.info?.price / 100}
              </p>
              {console.log(x?.card?.info?.id)}
              <button
                onClick={() => {
                  INC(x?.card?.info?.id);
                }}
                className="bg-red-600 p-2 m-2 rounded-md text-white"
              >
                -
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold">
          Total:
          {filarr.reduce((acc, curr) => {
            acc += curr?.card?.info?.price / 100;
            return acc;
          }, 0)}
        </h1>
        <button
          className="p-2 m-2 bg text-white bg-green-500 rounded-lg"
          onClick={() => {
            alert("Order Placed Succesfully😍");
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};
export default Cart;
