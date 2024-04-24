import React from "react";

const BestProductCard = ({ image, name }) => {
  return (
    <div className="flex flex-col w-36 h-72 justify-center items-center bg-transparent mx-10 mb-5 gap-5">
      <div
        className="flex w-full h-3/4 rounded-2xl drop-shadow-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="flex w-full h-1/4 font-Montserrat font-bold text-cust-dark-green text-center justify-center items-start">
        <div className="text-[14px] text-ellipsis overflow-hidden hyphens-auto max-w-full">{name}</div>
      </div>
    </div>
  );
};

export default BestProductCard;
