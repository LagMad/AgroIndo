import React, { useState, useEffect } from "react";

// Components
import MainLayout from "../components/layout/MainLayout";
import ProductCard from "../components/shared/ProductCard";
import Button from "../components/ui/Button";
import BestProductCard from "../components/shared/BestProductCard";

// Images
import Konjac from "../assets/Konjac.png";
import Turmeric from "../assets/TurmericPowder.jpg";
import GiantGinger from "../assets/GiantGingerPowder.jpg";
import DurianCoffee from "../assets/DurianCoffee.jpg";
import Curcuma from "../assets/Curcuma.jpg";
import CoffeeBean from "../assets/CoffeeBean.jpg";
import BananaFlour from "../assets/BananaFlour.jpg";
import BananaLeaf from "../assets/BananaLeaf.jpg";

// Utilities
import ProductsDataDummy from "../utils/Products.json";
import BestSellingDataDummy from "../utils/BestSelling.json";

const OurProducts = () => {
  const [ProductCards, setProductCards] = useState([]);
  const [bestSellingCards, setBestSellingCards] = useState([]);
  const [currentIndexCard, setCurrentIndexCard] = useState(0);
  const numCardsToShow = Object.keys(ProductsDataDummy).length; // PLEASE KEEP IN ODD NUMBER

  const goToPreviousCards = () => {
    setCurrentIndexCard(
      (currentIndexCard - 1 + numCardsToShow) % numCardsToShow
    );
  };

  const goToNextCards = () => {
    setCurrentIndexCard((currentIndexCard + 1) % numCardsToShow);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setProductCards(ProductsDataDummy);
  }, []);

  useEffect(() => {
    setBestSellingCards(BestSellingDataDummy);
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col w-full bg-OurProductsBG bg-cover bg-no-repeat min-h-screen justify-center items-center gap-16">
        {/* OUR PRODUCTS*/}
        <div className="flex flex-col w-full pt-6 sm:pt-16 justify-center items-center gap-10 sm:gap-16 overflow-hidden">
          <div className="text-3xl sm:text-4xl text-cust-dark-brown font-Playfair font-bold">
            OUR PRODUCTS
          </div>
          <div
            className="flex flex-row max-w-screen justify-center items-center gap-5 sm:gap-10 transition-all duration-500 transform ease-in-out"
            style={{
              transform: `translateX(${
                Math.floor(numCardsToShow / 2) * (100 / numCardsToShow) -
                currentIndexCard * (100 / numCardsToShow)
              }%)`,
            }}
          >
            <ProductCard
              image={Konjac}
              name={"KONJAC"}
              description={
                "A plant native to East Asia, offers a low-calorie, high-fiber alternative for healthy eating."
              }
              isScaled={currentIndexCard == 0}
            />
            <ProductCard
              image={Turmeric}
              name={"TURMERIC"}
              description={
                "Prized for its vibrant color and potent health benefits, is a globally cherished spice."
              }
              isScaled={currentIndexCard == 1}
            />
            <ProductCard
              image={GiantGinger}
              name={"GIANT GINGER"}
              description={
                "Prized for its robust flavor and impressive size, adds a punch to dishes and health remedies alike."
              }
              isScaled={currentIndexCard == 2}
            />
            <ProductCard
              image={Curcuma}
              name={"CURCUMA"}
              description={
                "Prized for its vibrant color and potent anti-inflammatory properties, is a staple spice in cuisines worldwide."
              }
              isScaled={currentIndexCard == 3}
            />         
            <ProductCard
              image={CoffeeBean}
              name={"COFFEE BEAN"}
              description={
                "Renowned for their rich flavor and unique aroma, captivate coffee enthusiasts worldwide."
              }
              isScaled={currentIndexCard == 4}
            />
            <ProductCard
              image={BananaFlour}
              name={"BANANA FLOUR"}
              description={
                "Derived from bananas, provides a gluten-free and nutrient-rich alternative for baking and cooking purposes."
              }
              isScaled={currentIndexCard == 5}
            />
            <ProductCard
              image={BananaLeaf}
              name={"BANANA LEAF"}
              description={
                "A versatile and eco-friendly packaging option for diverse culinary needs."
              }
              isScaled={currentIndexCard == 6}
            />   
            {/* {ProductsDataDummy.map((card, index) => (
              <ProductCard
                key={index}
                className={`bg-Product${card.name}`}
                image={card.image}
                name={card.name}
                description={card.description}
                isScaled={currentIndexCard == index}
              />
            ))} */}
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-5 sm:gap-8 md:gap-5 lg:gap-0 px-20 w-full justify-between items-center">
            <div className="flex flex-row w-full sm:w-1/3 justify-center lg:justify-start xl:justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-4">
                {[...Array(numCardsToShow).keys()].map((idx) => (
                  <hr
                    key={idx}
                    className={`${
                      currentIndexCard === idx
                        ? `bg-cust-darker-green border h-5 w-12 rounded-full`
                        : "bg-cust-dark-green border h-5 w-5 rounded-full"
                    } transform transition-all duration-500 ease-in-out`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row w-full sm:w-1/3 justify-center items-center">
              <Button variation={"secondary-rectangle"} type={"button"}>
                See More
              </Button>
            </div>
            <div className="flex flex-row w-full sm:w-1/3 justify-center lg:justify-end xl:justify-center items-center gap-4">
              <Button
                variation={"primary-round"}
                type={"button"}
                onClick={goToPreviousCards}
              >
                {"<"}
              </Button>
              <Button
                variation={"primary-round"}
                type={"button"}
                onClick={goToNextCards}
              >
                {">"}
              </Button>
            </div>
          </div>
        </div>

        {/* BEST PRODUCTS */}
        <div className="flex flex-col w-full px-10 md:px-20 pb-16 justify-center items-center gap-10 overflow-hidden">
          <div className="text-3xl sm:text-4xl text-center text-cust-dark-brown font-Playfair font-bold">
            WE ONLY SELL OUR BEST PRODUCTS
          </div>
          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:gap-10">
            <BestProductCard image={CoffeeBean} name={"Roasted Coffee Bean"} />
            <BestProductCard image={BananaFlour} name={"Banana Flour (Musa Paradisiaca)"} />
            <BestProductCard image={Konjac} name={"Konjac Powder (Amorphophallus Muelleri)"} />
            <BestProductCard image={BananaLeaf} name={"Banana Leaf"} />
            {/* {BestSellingDataDummy.map((card, index) => (
              <BestProductCard
                key={index}
                image={card.image}
                imageName={card.imageName}
                name={card.name}
              />
            ))} */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OurProducts;
