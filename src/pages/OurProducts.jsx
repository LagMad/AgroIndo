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
    setProductCards(ProductsDataDummy);
  }, []);

  useEffect(() => {
    setBestSellingCards(BestSellingDataDummy);
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col w-full bg-OurProductsBG bg-cover bg-no-repeat min-h-screen justify-center items-center">
        {/* OUR PRODUCTS*/}
        <div className="flex flex-col w-full py-16 justify-center items-center gap-16 overflow-hidden">
          <div className="text-4xl text-cust-dark-brown font-Playfair font-bold">
            OUR PRODUCTS
          </div>
          <div
            className="flex flex-row max-w-screen justify-center items-center gap-10 transition-all duration-500 transform ease-in-out"
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
              isScaled={currentIndexCard == 0}
            />
            <ProductCard
              image={Turmeric}
              name={"TURMERIC"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
              isScaled={currentIndexCard == 1}
            />
            <ProductCard
              image={GiantGinger}
              name={"GIANT GINGER"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
              isScaled={currentIndexCard == 2}
            />
            <ProductCard
              image={DurianCoffee}
              name={"DURIAN COFFEE"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
              isScaled={currentIndexCard == 3}
            />
            <ProductCard
              image={BananaFlour}
              name={"BANANA FLOUR"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
              isScaled={currentIndexCard == 4}
            />
            <ProductCard
              image={Konjac}
              name={"KONJAC POWDER"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
              isScaled={currentIndexCard == 5}
            />
            <ProductCard
              image={BananaLeaf}
              name={"BANANA LEAF"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row w-1/3 justify-center items-center">
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
            <div className="flex flex-row w-1/3 justify-center items-center">
              <Button variation={"secondary-rectangle"} type={"button"}>
                See More
              </Button>
            </div>
            <div className="flex flex-row w-1/3 justify-center items-center gap-4">
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
        <div className="flex flex-col w-full py-16 justify-center items-center gap-10 overflow-hidden">
          <div className="text-4xl text-cust-dark-brown font-Playfair font-bold">
            WE ONLY SELL OUR BEST PRODUCTS
          </div>
          <div className="grid grid-cols-2 gap-16">
            <BestProductCard image={DurianCoffee} name={"Durian Coffee"} />
            <BestProductCard image={BananaFlour} name={"Banana Flour (Musa Paradisiaca)"} />
            <BestProductCard image={Konjac} name={"Konjac Powder (Amorphophallus Muelleri)"} />
            <BestProductCard image={BananaLeaf} name={"Konjac Powder (Amorphophallus Muelleri)"} />
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
