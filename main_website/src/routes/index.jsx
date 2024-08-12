import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

export const allPages = createBrowserRouter([
  {
    element: <Homepage />,
    path: "/",
  },
  {
    element: <About />,
    path: "/about",
  },
]);
