import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactCard from "../components/shared/ContactCard";
import SVGs from "../components/shared/SVGs";

import Maps from "../assets/Maps.png";
import Button from "../components/ui/Button";

const ContactUs = () => {
  const [isEmailHovered, setEmailHovered] = useState(false);
  const [isTelegramHovered, setTelegramHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [isWhatsAppHovered, setWhatsAppHovered] = useState(false);

  const handleHover = (socialMedia, hoverStatus) => {
    switch (socialMedia) {
      case "email":
        setEmailHovered(hoverStatus);
        break;
      case "instagram":
        setInstagramHovered(hoverStatus);
        break;
      case "telegram":
        setTelegramHovered(hoverStatus);
        break;
      case "whatsapp":
        setWhatsAppHovered(hoverStatus);
        break;
      default:
        break;
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-10 pt-10 pb-24">
        <div className="text-4xl text-cust-dark-brown font-Playfair font-bold">
          CONTACT US
        </div>
        <div className="flex flex-row w-full justify-center items-start gap-10 font-semibold font-Montserrat text-cust-dark-brown px-20">
          <div className="flex flex-col w-1/2 justify-center items-center gap-5">
            <div className="">SEND YOUR MESSAGE HERE</div>
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col w-full justify-center items-start gap-2">
                <p>FULL NAME</p>
                <input
                  className="w-full bg-cust-grey focus:bg-white py-1 px-4 rounded-lg focus:outline-none border-2 border-transparent focus:border-cust-dark-brown"
                  type="text"
                  name="full_name"
                  placeholder="Your Full Name..."
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start gap-2">
                <p>FULL EMAIL</p>
                <input
                  className="w-full bg-cust-grey focus:bg-white py-1 px-4 rounded-lg focus:outline-none border-2 border-transparent focus:border-cust-dark-brown"
                  type="text"
                  name="email"
                  placeholder="Your Email..."
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start gap-2">
                <p>YOUR MESSAGE</p>
                <textarea
                  className="w-full bg-cust-grey focus:bg-white py-2 px-4 rounded-lg focus:outline-none border-2 border-transparent focus:border-cust-dark-brown"
                  name="message"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <div className="flex w-full">
                <Button variation={"primary-rectangle"}>Submit</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 justify-center items-center gap-5">
            <div className="">HERE'S OUR LOCATION</div>
            <img className="" src={Maps} alt="Maps" />
          </div>
        </div>
        <div className="flex flex-row w-full justify-between px-20">
          <button
            className={`flex flex-col w-[300px] h-[320px] gap-7 rounded-2xl justify-center items-center py-10 px-16 ${
              isEmailHovered ? "bg-cust-light-green" : "bg-white"
            }`}
            onMouseEnter={() => handleHover("email", true)}
            onMouseLeave={() => handleHover("email", false)}
          >
            <div className="">
              <SVGs.Email
                width="120"
                height=""
                fillColor={isEmailHovered ? "white" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-[14px] text-center ${
                isEmailHovered ? "text-white" : "text-black"
              }`}
            >
              agroindomlg@gmail.com
            </div>
          </button>
          <button
            className={`flex flex-col w-[300px] h-[320px] gap-7 rounded-2xl justify-center items-center py-10 px-16 ${
              isTelegramHovered ? "bg-cust-light-green" : "bg-white"
            }`}
            onMouseEnter={() => handleHover("telegram", true)}
            onMouseLeave={() => handleHover("telegram", false)}
          >
            <div className="">
              <SVGs.Telegram
                width="120"
                height=""
                fillColor={isTelegramHovered ? "white" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-[14px] text-center ${
                isTelegramHovered ? "text-white" : "text-black"
              }`}
            >
              Telegram
              <br />
              (+62) 823-3745-8131
            </div>
          </button>
          <button
            className={`flex flex-col w-[300px] h-[320px] gap-7 rounded-2xl justify-center items-center py-10 px-16 ${
              isInstagramHovered ? "bg-cust-light-green" : "bg-white"
            }`}
            onMouseEnter={() => handleHover("instagram", true)}
            onMouseLeave={() => handleHover("instagram", false)}
          >
            <div className="">
              <SVGs.Instagram
                width="120"
                height=""
                fillColor={isInstagramHovered ? "white" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-[14px] text-center ${
                isInstagramHovered ? "text-white" : "text-black"
              }`}
            >
              @agroindo.id
            </div>
          </button>
          <button
            className={`flex flex-col w-[300px] h-[320px] gap-7 rounded-2xl justify-center items-center py-10 px-16 ${
              isWhatsAppHovered ? "bg-cust-light-green" : "bg-white"
            }`}
            onMouseEnter={() => handleHover("whatsapp", true)}
            onMouseLeave={() => handleHover("whatsapp", false)}
          >
            <div className="">
              <SVGs.WhatsApp
                width="120"
                height=""
                fillColor={isWhatsAppHovered ? "#B1C381" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-[14px] text-center ${
                isWhatsAppHovered ? "text-white" : "text-black"
              }`}
            >
              @agroindo.id
            </div>
          </button>
        </div>

        {/* MAPS */}
        {/* <div className="flex justify-center items-center rounded-[40px] px-20 pb-24">
            <img className="" src={Maps} alt="Maps"/>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default ContactUs;
