// import { CLoudinary } from "../../utils/constants";
import { CLoudinary } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
import React from "react";

const ItemList = (props) => {
  const { items } = props;
  const arrays = items?.itemCards;
  const dispatch = useDispatch();
  const HandleAddItems = (item) => {
    // dispatch an action
    dispatch(addItems(item));
  };
  return (
    <div>
      {arrays.map((x) => {
        return (
          <div
            key={x?.card?.info?.id}
            className="mt-2 m-2 p-3 border-b-2  flex justify-between w-[300px] sm:w-[500px] md:w-[700px] rounded-md overflow-hidden shadow shadow-md shadow-slate-300"
          >
            <div className="p-3 px-4 text-left">
              <h1 className="text font-medium">{x?.card?.info?.name}</h1>
              <p className="text-sm font-medium">
                ₹ {x?.card?.info?.price / 100}
              </p>
              <p className="text-xs text-slate-600">
                {x?.card?.info?.description}
              </p>
            </div>
            <div className="relative">
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
              <button
                onClick={() => {
                  HandleAddItems(x);
                }}
                className="bg-slate-600 text-white px-2 rounded-sm absolute bottom-0 -translate-y-3  right-4"
              >
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
