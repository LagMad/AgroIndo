import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";
import ContactUs from "../pages/ContactUs";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/our-products",
      element: <OurProducts/>
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
    }
  ]);
  
  export default Router;
  