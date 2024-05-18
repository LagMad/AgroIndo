import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import ContactPlant from "../assets/ContactPlant.png";
import ProductHighlight from "../utils/ProductHighlight.json";
import SVGs from "../components/shared/SVGs";
import KonjacPowder from "../assets/Konjac.png";
import TurmericPowder from "../assets/TurmericPowder.jpg";
import GiantGingerPowder from "../assets/GiantGingerPowder.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [currentIndexCard, setCurrentIndexCard] = useState(1);

  const goToPreviousCards = () => {
    setCurrentIndexCard((currentIndexCard - 1 + 3) % 3);
  };

  const goToNextCards = () => {
    setCurrentIndexCard((currentIndexCard + 1) % 3);
  };

  return (
    <MainLayout>
      <div className="flex flex-col w-full gap-10 sm:gap-20">
        {/* HERO SECTION */}
        <div className="flex flex-col min-h-screen w-full z-40 bg-Hero1 bg-no-repeat bg-cover bg-fixed font-bold font-Playfair -mt-16 text-xl text-cust-light-cream items-center sm:items-start justify-center px-10 md:px-20 gap-3 md:gap-5">
          <div className="text-6xl md:text-8xl font-semibold">AgroIndo</div>
          <div className="text-center sm:text-left text-lg md:text-2xl font-semibold font-Montserrat">
            Indonesia’s Agriculture Exporter
          </div>
        </div>

        {/* THE REST */}
        <div className="flex flex-col min-h-screen w-full z-10 bg-HomeBG bg-no-repeat bg-cover gap-10 sm:gap-20">
          {/* ABOUT US */}
          <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center px-10 md:px-20 lg:px-64 gap-36 sm:gap-28 mb-32">
            <div className="flex flex-col w-full md:w-1/2 sm:w-5/12 text-cust-dark-green gap-4">
              <div className="font-black font-Playfair text-4xl">About Us</div>
              <div className="font-medium font-Montserrat text-[17px] text-justify">
                AgroIndo is dedicated to showcasing Indonesia's natural bounty
                to the global stage. We take pride in introducing
                premium-quality powdered products derived from Indonesia's rich
                agricultural produce. At AgroIndo, we bridge the gap between
                local producers and the global market, ensuring that the essence
                of Indonesian agriculture reaches discerning consumers
                worldwide.
              </div>
            </div>
            <div className="flex w-1/2 sm:w-7/12 justify-end items-center">
              <div className="flex relative bg-AboutPict1 bg-cover bg-no-repeat bg-top w-[170px] sm:w-[250px] md:w-[370px] h-[170px] sm:h-[250px] md:h-[370px] rounded-2xl sm:rounded-[40px] drop-shadow-2xl">
                <div className="absolute -left-16 sm:-left-24 -bottom-16 sm:-bottom-24 md:-bottom-32 bg-AboutPict2 bg-cover bg-no-repeat bg-bottom w-[150px] sm:w-[220px] md:w-[300px] h-[150px] sm:h-[220px] md:h-[300px] rounded-2xl sm:rounded-[40px]" />
              </div>
            </div>
          </div>

          {/* EXPLORE OUR PRODUCTS */}
          <div className="flex flex-col w-full justify-center items-center gap-10 overflow-hidden">
            {/* <div className="flex flex-col w-full px-40 text-cust-dark-brown justify-center items-end gap-3">
              <div className="text-4xl font-black font-Playfair">
                Explore Our Products
              </div>
              <div className="text-[14px] font-medium font-Montserrat text-right">
                Explore our diverse range of premium powdered products from
                Indonesia's rich agricultural produce
              </div>
            </div> */}
            <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-8 md:gap-10 lg:gap-0">
              <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
                <div className="flex relative justify-center lg:justify-start bg-cust-darker-green w-full lg:w-[calc(100%-180px)] h-52 sm:h-96 mr-0 lg:mr-48 rounded-none lg:rounded-r-[44px] mb-20 md:mb-32 px-10 lg:px-20">
                  <p className="text-xl md:text-3xl font-bold text-white pt-7 text-center lg:text-left">
                    Explore Our Products!
                  </p>
                  <div className="absolute w-[900px] flex flex-row top-[140px] md:top-[170px] z-0 justify-center items-center lg:-ml-10">
                    <img
                      className={`w-[100px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[200px] md:h-[250px] rounded-2xl bg-no-repeat overflow-hidden object-center object-cover transform duration-500 ease-in-out ${
                        currentIndexCard === 0
                          ? "z-20 translate-x-[100%] lg:translate-x-[70%] scale-150"
                          : currentIndexCard === 1
                          ? "z-10 translate-x-0 lg:translate-x-[-5%] scale-100"
                          : "z-0 translate-x-[200%] lg:translate-x-[145%] scale-100"
                      }`}
                      src={KonjacPowder}
                    />
                    <img
                      className={`w-[100px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[200px] md:h-[250px] rounded-2xl bg-no-repeat overflow-hidden object-center object-cover transform duration-500 ease-in-out ${
                        currentIndexCard === 1
                          ? "z-20 translate-x-0 lg:translate-x-[-30%] scale-150"
                          : currentIndexCard === 2
                          ? "z-10 translate-x-[-105%] scale-100"
                          : "z-0 translate-x-[100%] lg:translate-x-[45%] scale-100"
                      }`}
                      src={TurmericPowder}
                    />
                    <img
                      className={`w-[100px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[200px] md:h-[250px] rounded-2xl overflow-hidden object-center object-cover transform duration-500 ease-in-out ${
                        currentIndexCard === 2
                          ? "z-20 translate-x-[-100%] lg:translate-x-[-130%] scale-150"
                          : currentIndexCard === 0
                          ? "z-10 translate-x-[-205%] scale-100"
                          : "z-0 translate-x-0 lg:translate-x-[-55%] scale-100"
                      }`}
                      src={GiantGingerPowder}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <hr
                    className={`${
                      currentIndexCard === 0
                        ? `bg-cust-darker-green border h-3 sm:h-5 w-8 sm:w-12 rounded-full`
                        : "bg-cust-dark-green border h-3 sm:h-5 w-3 sm:w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                  <hr
                    className={`${
                      currentIndexCard === 1
                        ? `bg-cust-darker-green border h-3 sm:h-5 w-8 sm:w-12 rounded-full`
                        : "bg-cust-dark-green border h-3 sm:h-5 w-3 sm:w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                  <hr
                    className={`${
                      currentIndexCard === 2
                        ? `bg-cust-darker-green border h-3 sm:h-5 w-8 sm:w-12 rounded-full`
                        : "bg-cust-dark-green border h-3 sm:h-5 w-3 sm:w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 justify-center items-center lg:items-start gap-3 md:gap-10 pl-20 lg:pl-32 pr-20 lg:pr-64 transform transition-all duration-500 ease-in-out">
                <div className="font-bold text-cust-orange-normal text-lg sm:text-3xl text-center">
                  {ProductHighlight[currentIndexCard].name}
                </div>
                <div className="flex flex-col gap-5 text-center text-sm sm:text-xl">
                  {ProductHighlight[currentIndexCard].description}
                </div>
                <div className="flex flex-col-reverse lg:flex-row w-full justify-center lg:justify-between items-center gap-6 md:gap-10 lg:gap-0 mt-8 md:mt-0">
                  <div className="flex flex-row w-full justify-center lg:justify-start items-center">
                    <Button
                      variation={"secondary-rectangle"}
                      type={"button"}
                      onClick={() => navigate("/our-products")}
                    >
                      See More
                    </Button>
                  </div>
                  <div className="flex flex-row w-full justify-center lg:justify-end items-center gap-4">
                    <button onClick={goToPreviousCards}>
                      <SVGs.LeftArrowCircle width={"50"} height={""} />
                    </button>
                    <button onClick={goToNextCards}>
                      <SVGs.RightArrowCircle width={"50"} height={""} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <div className="flex flex-row h-auto w-full bg-transparent pt-0 md:pt-32 pb-10 sm:pb-28 md:pb-44 justify-center items-center">
            <div className="flex flex-row h-[450px] sm:h-[350px] w-full px-10 md:px-20 py-5 sm:py-0 gap-5 sm:gap-0 bg-cust-light-green overflow-visible justify-center sm:justify-end items-center">
              <div className="relative flex w-full sm:w-5/12 overflow-visible justify-center">
                <img
                  className="sm:absolute -bottom-60 right-5 sm:right-10 md:right-52  h-[300px] sm:h-[480px] md:h-[600px]"
                  src={ContactPlant}
                  alt="plant"
                />
              </div>
              <div className="flex flex-col w-full sm:w-7/12 justify-center items-center sm:items-end gap-5">
                <div className="text-center sm:text-right text-cust-light-cream font-Montserrat font-semibold text-xs sm:text-sm">
                  Mrs. Rosalina Tethool (Founder)
                  <br />
                  Mobile Phone: +62 823-3745-8131 (Whatsapp)
                  <br />
                  <br />
                  Whether you’re looking for answers, wish to solve a problem,
                  or just wish to let us know how we did, you’ll find lots of
                  methods to call us right here. We’ll assist you solve your
                  issues rapidly and easily, getting you back to more important
                  things, like unwinding on your brand-new couch.
                </div>
                <Button
                  variation={"primary-rectangle"}
                  type={"button"}
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
