// ProductCard.js
import React from "react";

const ProductCard = ({ image, name, description, isScaled, className }) => {

  return (
    <div
      className={`flex flex-col w-[352px] h-[500px] justify-center items-center bg-cust-dark-green text-white font-Montserrat px-10 py-12 rounded-[30px] gap-8 ${
        isScaled ? "scale-110" : ""
      } transition-all duration-500 transform ease-in-out`}
    >
      {/* <div className={`flex w-60 h-64 bg-Product${name} ${className} bg-no-repeat bg-cover bg-center rounded-[24px]`}/> */}
      <div className="flex w-60 h-64 justify-center items-center overflow-hidden rounded-[24px]">
        <img
          className=" min-h-64 min-w-60"
          src={image}
          alt="product image"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-[16px] text-center">{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
