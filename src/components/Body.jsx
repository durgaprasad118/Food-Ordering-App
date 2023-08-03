import { restaurants } from "../../utils/hardcoded";
import Card, { withPromoted } from "./Card";
import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listofRest, setList] = useState(restaurants);
  const [Search_text, setSearch_Text] = useState("");
  const [filteredRest, setFilterRest] = useState(restaurants);
  // setList(restaurants);
  const ResCardwithPromoted = withPromoted(Card);
  // setFilterRest(restaurants);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // // higher order component
  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const json = await data.json();
  //     console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants);
  //     const resData =
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;

  //         console.log(resData);
  //         console.log(resData);
  //     setList(resData);
  //     setFilterRest(resData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // setList(restaurants);
  // setFilterRest(restaurants);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  return listofRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center mt-4 ">
      <div className="flex md:flex-row flex-col items-center sm:justify-center gap-1 md:gap-0 relative">
        <input
          className="px-4 py-1 border border-black border-solid rounded-md"
          type="text"
          name=""
          id=""
          value={Search_text}
          onChange={(e) => {
            setSearch_Text(e.target.value);
          }}
          placeholder="What to eat?"
        />
        <button
          onClick={() => {
            // filter and update the ui
            const filteredREst = listofRest.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(Search_text.toLowerCase());
            });
            setFilterRest(filteredREst);
          }}
          className="px-3 mx-1 py-1  bg-slate-700 rounded-md text-white"
        >
          Search
        </button>
        <button
          onClick={() => {
            // filter the restaurants which have rating >4
            const filteredList = listofRest?.filter(
              (x) => x.info.avgRating >= 4
            );
            setFilterRest(filteredList);
          }}
          className="mx-1 px-4 py-1  rounded-md text-white bg-green-600  "
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center  gap-10 mt-6">
        {filteredRest?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"menu/"+restaurant?.info?.id}
            >
              {restaurant?.info?.avgRating > 4 ? (
                <ResCardwithPromoted resData={restaurant} />
              ) : (
                <Card resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
