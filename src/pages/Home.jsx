import React from "react";
import { easeInOut, motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <div className="flex flex-col h-screen w-full bg-Hero1 bg-no-repeat bg-cover bg-fixed font-bold font-Playfair -mt-16 text-xl text-white items-start justify-center px-24 gap-5">
        <div className="text-8xl font-semibold">AgroIndo</div>
        <div className="text-2xl font-semibold font-Montserrat">
          Indonesia’s Spices Exporter
        </div>
      </div>

      {/* ABOUT US */}
      {/* <div className="flex flex-row h-screen w-full ">

      </div> */}

      {/* COMING SOON..! */}
      <div className="flex flex-col min-h-screen pb-52 font-Playfair text-9xl justify-center items-center font-black">
        <img className="w-52" src="/src/assets/Plant.gif" alt="Your GIF" />
        <motion.div
          className="font-Playfair text-9xl font-black text-cust-dark-brown"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
        >
          Coming Soon..!
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Home;
