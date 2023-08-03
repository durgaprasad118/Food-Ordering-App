import { useEffect, useState } from "react";
// import { MenuURL } from "../../utils/constants";
import { MenuURL } from "./constants";
import { Menuu } from "./constants";
// using useEffect for calling the fetchData method
// using useState for storing the data
// we fetch the data we update the list in resinfo
// returned

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInf] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(Menuu + resId);
    const jsonDta = await data.json();
    setResInf(jsonDta?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
