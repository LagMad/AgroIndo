// ProductCard.js
import React from "react";

const ProductCard = ({ image, name, description, isScaled, className }) => {
  return (
    <div
      className={`flex flex-col w-[250px] sm:w-[300px] md:w-[325px] lg:w-[352px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] justify-start items-center bg-cust-dark-green text-white font-Montserrat px-5  md:px-10 py-8 sm:py-10 md:py-12 rounded-[30px] gap-3 sm:gap-8 ${
        isScaled ? "scale-110" : ""
      } transition-all duration-500 transform ease-in-out`}
    >
      {/* <div className={`flex w-60 h-64 bg-Product${name} ${className} bg-no-repeat bg-cover bg-center rounded-[24px]`}/> */}
      {/* <div className="flex w-48 sm:w-60 h-52 sm:h-64 justify-center items-center overflow-hidden rounded-[24px]"> */}
        <img
          className="w-48 sm:w-52 md:w-56 lg:w-60 h-52 sm:h-56 md:h-60 lg:h-64 object-cover object-center rounded-[24px]"
          src={image}
          alt="product image"
        />
      {/* </div> */}

      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold">{name}</div>
        <div className="text-xs sm:text-sm lg:text-base text-center">{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
