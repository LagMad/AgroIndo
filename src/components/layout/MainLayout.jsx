import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="pt-16 w-full text-black font-Montserrat bg-cust-light-cream">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
