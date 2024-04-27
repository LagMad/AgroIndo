import React from "react";

const BestProductCard = ({ image, imageName, name }) => {
  return (
    <div className="flex flex-col w-[400px] h-72 justify-center items-center bg-transparent">
      <div
        className={`flex w-full h-5/6 rounded-2xl drop-shadow-xl bg-Product${imageName} bg-cover bg-center`}
      />
      <div className="flex w-full h-1/6 font-Montserrat font-bold text-cust-dark-green text-center justify-center items-center">
        <div className="text-[14px] text-ellipsis overflow-hidden hyphens-auto max-w-full">{name}</div>
      </div>
    </div>
  );
};

export default BestProductCard;
