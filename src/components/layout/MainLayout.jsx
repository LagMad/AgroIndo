import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ScrollToTop from "./ScrollToTop";

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div className="pt-16 w-full text-black font-Montserrat bg-cust-light-cream">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
