import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <div className="flex flex-col h-screen w-full bg-Hero1 bg-no-repeat bg-cover bg-fixed font-bold font-Playfair -mt-16 text-xl text-white items-start justify-center px-24 gap-5">
        <div className="text-8xl font-semibold">AgroIndo</div>
        <div className="text-2xl font-semibold font-Montserrat">Indonesia’s Spices Exporter</div>
      </div>

      {/* ABOUT US */}
      <div className="flex flex-row h-screen w-full ">

      </div>
    </MainLayout>
  );
};

export default Home;
