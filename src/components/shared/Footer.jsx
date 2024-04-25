import React from "react";
import SVGs from "./SVGs";
import CartrackLogo from "../../assets/CartractLogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col h-auto font-Montserrat justify-center items-center">
      <div className="flex flex-row relative w-full bg-cust-darker-green text-white px-24 py-24 rounded-t-[56px]">
        <div className="flex flex-col justify-start items-start w-1/2 gap-3">
          <div className="flex font-bold font-Playfair text-3xl">AgroIndo</div>
          <div className="flex flex-row font-Montserrat text-lg items-center gap-4">
            <SVGs.Location width={"24"} height={"30"} />
            <div className="">
              Denmoza Hill 1, Ulesari, Tirtomoyo, Pakis Subdistrict, <br />{" "}
              Malang Regency, East Java, Indonesia 65154
            </div>
          </div>
          <div className="flex flex-row font-Montserrat text-lg items-center gap-4">
            <SVGs.Email width={"24"} height={"30"} fillColor={""} />
            <div className="">
              Email : agroindomlg@gmail.com <br />
              Mobile : (+62)85234970431
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SVGs.WhatsApp width={""} fillColor={""}/>
            <SVGs.Telegram width={""} fillColor={""}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="flex flex-col gap-4">
            <div className="font-Playfair font-bold text-2xl">
              In Cooperation With
            </div>
            <img className="" src={CartrackLogo} alt="cartrack logo" />
          </div>
        </div>
        <div className="absolute -top-24 right-72">
          <SVGs.StarDeco />
        </div>
      </div>
      <div className="flex w-full bg-white text-cust-darker-green font-semibold px-24 py-8">
        Copyright 2024 &copy; AGROINDO - Moneh Team
      </div>
    </div>
  );
};

export default Footer;
