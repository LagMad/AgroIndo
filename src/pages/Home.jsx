import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import ContactPlant from "../assets/ContactPlant.png";
import ProductHighlight from "../utils/ProductHighlight.json";
import SVGs from "../components/shared/SVGs";

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
      <div className="flex flex-col w-full gap-20">
        {/* HERO SECTION */}
        <div className="flex flex-col min-h-screen w-full z-40 bg-Hero1 bg-no-repeat bg-cover bg-fixed font-bold font-Playfair -mt-16 text-xl text-cust-light-cream items-start justify-center px-24 gap-5">
          <div className="text-8xl font-semibold">AgroIndo</div>
          <div className="text-2xl font-semibold font-Montserrat">
            Indonesia’s Agriculture Exporter
          </div>
        </div>

        {/* THE REST */}
        <div className="flex flex-col min-h-screen w-full z-10 bg-HomeBG bg-no-repeat bg-cover -mb-16 gap-20">
          {/* ABOUT US */}
          <div className="flex flex-row w-full justify-center items-center px-64 gap-28 mb-32">
            <div className="flex flex-col w-5/12 text-cust-dark-green gap-4">
              <div className="font-black font-Playfair text-4xl">About Us</div>
              <div className="font-medium font-Montserrat text-[14px]">
                AgroIndo is dedicated to showcasing Indonesia's natural bounty
                to the global stage. We take pride in introducing
                premium-quality powdered products derived from Indonesia's rich
                agricultural produce. At AgroIndo, we bridge the gap between
                local producers and the global market, ensuring that the essence
                of Indonesian agriculture reaches discerning consumers
                worldwide.
              </div>
            </div>
            <div className="flex w-7/12 justify-end items-center">
              <div className="flex relative bg-AboutPict1 bg-cover bg-no-repeat bg-top w-[370px] h-[370px] rounded-[40px] drop-shadow-2xl">
                <div className="absolute -left-24 -bottom-32 bg-AboutPict2 bg-cover bg-no-repeat bg-bottom w-[302px] h-[302px] rounded-[40px]" />
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
            <div className="flex flex-row w-full justify-center items-center">
              <div className="flex w-1/2 justify-center items-center">
                <div className="flex relative bg-cust-darker-green w-[calc(100%-180px)] h-96 mr-48 rounded-r-[44px] mb-40">
                  <p className="text-3xl font-bold text-white pt-7 pl-5">
                    Explore Our Products!
                  </p>
                  <div className="absolute-wrapper flex flex-row top-[40%] left-16 z-0">
                    <div
                      className={`carousel-item bg-ProductKONJAC w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden bg-center bg-cover ${
                        currentIndexCard === 0
                          ? "z-20"
                          : currentIndexCard === 1
                          ? "z-10"
                          : "z-0"
                      }`}
                      style={{
                        transform: `translateX(${
                          currentIndexCard === 0
                            ? "70%"
                            : currentIndexCard === 1
                            ? "-5%"
                            : "145%"
                        }) scale(${currentIndexCard === 0 ? 1.5 : 1})`,
                      }}
                    />
                    <div
                      className={`carousel-item bg-ProductTURMERIC w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden bg-center bg-cover ${
                        currentIndexCard === 1
                          ? "z-20"
                          : currentIndexCard === 2
                          ? "z-10"
                          : "z-0"
                      }`}
                      style={{
                        transform: `translateX(${
                          currentIndexCard === 1
                            ? "-30%"
                            : currentIndexCard === 2
                            ? "-105%"
                            : "45%"
                        }) scale(${currentIndexCard === 1 ? 1.5 : 1})`,
                      }}
                    />
                    <div
                      className={`carousel-item bg-ProductGIANTGINGER w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden bg-center bg-cover ${
                        currentIndexCard === 2
                          ? "z-20"
                          : currentIndexCard === 0
                          ? "z-10"
                          : "z-0"
                      }`}
                      style={{
                        transform: `translateX(${
                          currentIndexCard === 2
                            ? "-130%"
                            : currentIndexCard === 0
                            ? "-205%"
                            : "-55%"
                        }) scale(${currentIndexCard === 2 ? 1.5 : 1})`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-start gap-10 pl-32 pr-64 transform transition-all duration-500 ease-in-out">
                <div className="font-bold text-cust-orange-normal text-3xl">
                  {ProductHighlight[currentIndexCard].name}
                </div>
                <div className="flex flex-col gap-5">
                  {ProductHighlight[currentIndexCard].description}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="flex flex-row w-1/3 justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-4">
                  <hr
                    className={`${
                      currentIndexCard === 0
                        ? `bg-cust-darker-green border h-5 w-12 rounded-full`
                        : "bg-cust-dark-green border h-5 w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                  <hr
                    className={`${
                      currentIndexCard === 1
                        ? `bg-cust-darker-green border h-5 w-12 rounded-full`
                        : "bg-cust-dark-green border h-5 w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                  <hr
                    className={`${
                      currentIndexCard === 2
                        ? `bg-cust-darker-green border h-5 w-12 rounded-full`
                        : "bg-cust-dark-green border h-5 w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                </div>
              </div>
              <div className="flex flex-row w-1/3 justify-center items-center">
                <Button
                  variation={"secondary-rectangle"}
                  type={"button"}
                  onClick={() => navigate("/our-products")}
                >
                  See More
                </Button>
              </div>
              <div className="flex flex-row w-1/3 justify-center items-center gap-4">
                <button onClick={goToPreviousCards}>
                  <SVGs.LeftArrowCircle width={"50"} height={""} />
                </button>
                <button onClick={goToNextCards}>
                  <SVGs.RightArrowCircle width={"50"} height={""} />
                </button>
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <div className="flex flex-row h-auto w-full bg-transparent pt-32 pb-44 justify-center items-center">
            <div className="flex relative flex-row h-[350px] w-full px-20 bg-cust-light-green overflow-visible justify-end items-center">
              <div className="absolute left-20 -bottom-16 overflow-visible">
                <img className="h-[600px]" src={ContactPlant} alt="plant" />
              </div>
              <div className="flex flex-col w-7/12 justify-center items-end gap-5">
                <div className="text-right text-cust-light-cream font-Montserrat font-semibold text-[14px]">
                  Mrs. Rosalina Tethool (Founder)
                  <br />
                  Mobile Phone: +62 823-3745-8131 (Whatsapp)
                  <br />
                  Whether you’re looking for answers, wish to solve a problem,
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
