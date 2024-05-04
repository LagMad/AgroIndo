import React from "react";
import SVGs from "./SVGs";
import CartrackLogo from "../../assets/CartractLogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-auto font-Montserrat justify-center items-center px-20 bg-cust-darker-green text-cust-light-cream rounded-t-[56px] drop-shadow-2xl">
      <div className="flex flex-row relative w-full pt-24">
        <div className="flex flex-col justify-start items-start w-1/2 gap-3">
          <div className="flex font-bold font-Playfair text-3xl">AgroIndo</div>
          <div className="flex flex-row font-Montserrat text-lg items-center gap-4">
            <SVGs.Location width={"24"} height={""} fillColor="#F8FAE5"/>
            <div className="text-[14px]">
              Denmoza Hill 1, Ulesari, Tirtomoyo, Pakis Subdistrict, <br />{" "}
              Malang Regency, East Java, Indonesia 65154
            </div>
          </div>
          <div className="flex flex-row font-Montserrat text-lg items-center gap-4">
            <SVGs.Email width={"24"} height={"30"} fillColor={"#F8FAE5"} />
            <div className="text-[14px]">
              Email : agroindomlg@gmail.com <br />
              Mobile : (+62) 823-3745-8131
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SVGs.WhatsApp />
            <SVGs.Telegram />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-1/2">
          <div className="flex flex-col gap-4 self-end">
            <div className="font-Playfair font-bold text-3xl text-right">
              In Cooperation With
            </div>
            <img className="w-72" src={CartrackLogo} alt="cartrack logo" />
          </div>
        </div>
        <div className="absolute -top-24 right-36">
          <SVGs.StarDeco width={"150"} />
        </div>
      </div>
      <hr className="w-full mx-20 h-1 rounded-full bg-cust-light-cream my-12" />
      <div className="relative group flex w-2/3 justify-center items-center text-left pb-12">
        <div className="relative group flex">
          Copyright 2024 &copy; AGROINDO - Moneh Team
          <div className="absolute -right-7 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ml-2">
            ❤️️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
