import React from "react";

const BestProductCard = ({ image, imageName, name }) => {
  return (
    <div className="flex flex-col w-full h-auto justify-start items-center bg-transparent gap-5">
      <img
        className="w-full h-28 sm:h-40 lg:h-44 rounded-2xl drop-shadow-xl object-cover object-center"
        src={image}
        alt="product image"
      />
      <div className="flex w-full h-1/6 font-Montserrat font-bold text-cust-dark-green text-center justify-center items-start">
        <div className="text-[14px] text-ellipsis overflow-hidden hyphens-auto max-w-full">
          {name}
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
