import React from "react";
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="z-10 flex h-12 md:h-20 md:justify-between justify-center items-center  mx-3 my-3 bg-gray-100 rounded-md shadow-lg sticky bottom-1  ">
      <div className="">
        <img
          src={LOGO_URL}
          alt=""
          className="logo w-24 h-24 rounded-full p-2 hidden sm:inline"
        />
      </div>
      <div className="navitems">
        <ul className="list-items flex  align-middle text-black-900 font-sans font-normal ">
          <li className="px-2 py-1 ">Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2 hover:bg-slate-600 hover:text-white hover:rounded-md py-1">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-2 hover:bg-slate-600 hover:text-white hover:rounded-md py-1">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-2 hover:bg-slate-600 hover:text-white hover:rounded-md py-1">
            <Link to="/Contact">Contact us</Link>
          </li>

          <Link to="/cart">
            <li className="px-2 flex items-center py-1  hover:bg-slate-600 hover:text-white hover:rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <p>({cartItems.length})</p>
            </li>
          </Link>
          {/* <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
