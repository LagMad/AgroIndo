import React, { useState, useEffect} from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactCard from "../components/shared/ContactCard";
import SVGs from "../components/shared/SVGs";

import Maps from "../assets/Maps.png";
import Maps2 from "../assets/Maps2.png";
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

  const handleSubmit = () => {
    const fullName = encodeURIComponent(document.getElementById('full_name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
  
    const mailtoLink = `mailto:agroindomlg@gmail.com?subject=Contact%20Form&body=Full%20Name:%20${fullName}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`;
  
    window.location.href = mailtoLink;
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  return (
    <MainLayout>
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-10 pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-24">
        <div className="text-4xl text-cust-dark-brown font-Playfair font-bold">
          CONTACT US
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-10 font-semibold font-Montserrat text-cust-dark-brown px-10 lg:px-20">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-center gap-5">
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
                <p>EMAIL</p>
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
              <div className="flex w-full justify-center lg:justify-start">
                <button
                  className="bg-cust-light-green text-white py-2 px-4 rounded-lg focus:outline-none"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-center gap-5">
            <div className="">HERE'S OUR LOCATION</div>
            <img className="" src={Maps} alt="Maps" />
          </div>
        </div>
        <div className="grid sm:flex grid-cols-2 sm:flex-row w-full justify-center px-10 md:px-20 gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          <button
            className={`flex flex-col w-full sm:w-[170px] md:w-[150px] lg:w-[210px] xl:w-[300px] lg:h-[240px] xl:h-[300px] gap-3 sm:gap-4 md:gap-7 rounded-2xl justify-start items-center py-5 md:py-5 lg:py-7 xl:py-10 px-3 sm:px-2 md:px-5 lg:px-7 ${isEmailHovered ? "bg-cust-light-green" : "bg-white"
              }`}
            onMouseEnter={() => handleHover("email", true)}
            onMouseLeave={() => handleHover("email", false)}
            onClick={() => { window.open("mailto:agroindomlg@gmail.com?subject=Hello%2C%20I%20want%20to%20buy."), "_blank" }}
          >
            <div className="px-10 sm:px-auto">
              <SVGs.Email fillColor={isEmailHovered ? "white" : "black"} />
            </div>
            <div
              className={`font-medium font-Montserrat text-xs xl:text-sm text-center break-all ${isEmailHovered ? "text-white" : "text-black"
                }`}
            >
              agroindomlg@gmail.com
            </div>
          </button>
          <button
            className={`flex flex-col w-full sm:w-[170px] md:w-[150px] lg:w-[210px] xl:w-[300px] lg:h-[240px] xl:h-[300px] gap-3 sm:gap-4 md:gap-7 rounded-2xl justify-start items-center py-5 md:py-5 lg:py-7 xl:py-10 px-3 sm:px-2 md:px-5 lg:px-7 ${isTelegramHovered ? "bg-cust-light-green" : "bg-white"
              }`}
            onMouseEnter={() => handleHover("telegram", true)}
            onMouseLeave={() => handleHover("telegram", false)}
            onClick={() => { window.open("https://www.telegram.org"), "_blank" }}
          >
            <div className="px-10 sm:px-auto">
              <SVGs.Telegram
                fillColor={isTelegramHovered ? "white" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-xs xl:text-sm text-center break-all ${isTelegramHovered ? "text-white" : "text-black"
                }`}
            >
              Telegram
              <br />
              (+62) 823-3745-8131
            </div>
          </button>
          <button
            className={`flex flex-col w-full sm:w-[170px] md:w-[150px] lg:w-[210px] xl:w-[300px] lg:h-[240px] xl:h-[300px] gap-3 sm:gap-4 md:gap-7 rounded-2xl justify-start items-center py-5 md:py-5 lg:py-7 xl:py-10 px-3 sm:px-2 md:px-5 lg:px-7 ${isInstagramHovered ? "bg-cust-light-green" : "bg-white"
              }`}
            onMouseEnter={() => handleHover("instagram", true)}
            onMouseLeave={() => handleHover("instagram", false)}
            onClick={() => { window.open("https://www.instagram.com/agroindo.id"), "_blank" }}
          >
            <div className="px-10 sm:px-auto">
              <SVGs.Instagram
                fillColor={isInstagramHovered ? "white" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-xs xl:text-sm text-center break-all ${isInstagramHovered ? "text-white" : "text-black"
                }`}
            >
              @agroindo.id
            </div>
          </button>
          <button
            className={`flex flex-col w-full sm:w-[170px] md:w-[150px] lg:w-[210px] xl:w-[300px] lg:h-[240px] xl:h-[300px] gap-3 sm:gap-4 md:gap-7 rounded-2xl justify-start items-center py-5 md:py-5 lg:py-7 xl:py-10 px-3 sm:px-2 md:px-5 lg:px-7 ${isWhatsAppHovered ? "bg-cust-light-green" : "bg-white"
              }`}
            onMouseEnter={() => handleHover("whatsapp", true)}
            onMouseLeave={() => handleHover("whatsapp", false)}
            onClick={() => { window.open("https://wa.me/+6282337458131?text=Hello,%20I%20would%20like%20to%20buy."), "_blank" }}
          >
            <div className="px-10 sm:px-auto">
              <SVGs.WhatsApp
                fillColor={isWhatsAppHovered ? "#B1C381" : "black"}
              />
            </div>
            <div
              className={`font-medium font-Montserrat text-xs xl:text-sm text-center break-all ${isWhatsAppHovered ? "text-white" : "text-black"
                }`}
            >
              (+62) 823-3745-8131
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
