import React from "react";
import SVGs from "./SVGs";
import CartrackLogo from "../../assets/CartractLogo.png";
import Button from "../ui/Button.jsx";

const instagramAccounts = [
  "https://www.instagram.com/yomadeo04/",
  "https://www.instagram.com/hizkiajeremmy/",
  "https://www.instagram.com/wchrispradayana/"
];

let currentIndex = 0;

function getNextInstagramAccount() {
  const nextIndex = currentIndex % instagramAccounts.length;
  currentIndex++;
  return instagramAccounts[nextIndex];
}

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-auto font-Montserrat justify-center items-center px-10 md:px-20 bg-cust-darker-green text-cust-light-cream rounded-t-[56px] drop-shadow-2xl py-12">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:items-stretch gap-10">
        <div className="flex flex-col w-full lg:w-1/3 h-full justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-3">
          <div className="flex w-full font-bold font-Playfair text-3xl text-center lg:text-left justify-center lg:justify-start">
            AgroIndo
          </div>
          <div className="flex flex-row font-Montserrat text-lg items-center gap-4">
            <SVGs.Location width={"52"} height={"30"} fillColor={"#F8FAE5"} />
            <div className="text-[14px]">
              Denmoza Hill 1, Ulesari, Tirtomoyo, Pakis Subdistrict, Malang Regency, East Java, Indonesia 65154
            </div>
          </div>
          <div className="flex flex-row font-Montserrat text-lg items-center gap-4">
            <SVGs.Email width={"24"} height={"30"} fillColor={"#F8FAE5"} />
            <div className="text-[14px]">
              Email : agroindomlg@gmail.com <br />
              Mobile : (+62) 823-3745-8131
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/3 justify-between items-center gap-3 lg:gap-10">
          <div className="flex flex-row justify-center items-center gap-10">
            <button
              onClick={() => {
                window.open("https://t.me/agroindoid?text=Hello,%20I%20would%20like%20to%20buy."), "_blank";
              }}
            >
              <SVGs.Telegram width="50" height="50" />
            </button>
            <button
              onClick={() => {
                window.open("https://wa.me/+6282337458131?text=Hello,%20I%20would%20like%20to%20buy."), "_blank";
              }}
            >
              <SVGs.WhatsApp width="50" height="50" />
            </button>
            <button
              onClick={() => {
                window.open("https://instagram.com/agroindo.id"), "_blank";
              }}
            >
              <SVGs.InstagramRound width="50" height="50" />
            </button>
          </div>
          <div className="text-xl font-bold font-Playfair">
            PT. Agroindo Cipta Sejahtera
          </div>
        </div>
        <div className="flex flex-col justify-center lg:justify-start items-center w-full lg:w-1/3">
          <div className="flex flex-col gap-3 lg:gap-4 self-center lg:self-end">
            <div className="font-Playfair font-bold text-xl lg:text-3xl text-center lg:text-right">
              In Cooperation With
            </div>
            <a href="https://cartrack.id/en" target="_blank" rel="noopener noreferrer">
              <img className="w-72 hover:cursor-pointer" src={CartrackLogo} alt="cartrack logo" />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-[calc(100vw-160px)] h-1 rounded-full bg-cust-light-cream my-12" />
      <div className="relative group flex w-2/3 justify-center items-center text-left">
        <div
          className="relative group flex text-center"
          onClick={() => {
            window.open(getNextInstagramAccount(), "_blank", "noopener noreferrer");
          }}
          style={{ cursor: "pointer" }}
        >
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
