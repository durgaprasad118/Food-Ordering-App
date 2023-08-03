import { useState } from 'react'
import "../index.css"
import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/AboutUs";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/ContactUs";
import Menu from "./components/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";
import { Provider } from "react-redux";
import Appstore from "../utils/Appstore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
//lazy (takes a callback and in that use import function and pass the path)
const Grocery = lazy(() => {
  return import("./components/Grocery");
});
const AppLayout = () => {
  return (
    <Provider store={Appstore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resId",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
