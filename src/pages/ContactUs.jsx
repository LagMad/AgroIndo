import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactCard from "../components/shared/ContactCard";
import SVGs from "../components/shared/SVGs";

import Maps from "../assets/Maps.png"

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-10 pt-10">
        <div className="text-4xl text-cust-dark-brown font-Playfair font-bold">
          CONTACT US
        </div>
        <div className="grid grid-cols-2">
          <ContactCard
            icon={<SVGs.Compass width={"120"} />}
            description={
              <>
                Denmoza Hill 1, Malang, <br />
                East Java, Indonesia
                <br />
                08:00 - 21:00 WIB
                <br />
                Mon - Fri
              </>
            }
          />
          <ContactCard
            icon={<SVGs.Telegram width={"120"} fillColor={"#000000"}/>}
            description={
              <>
                Telegram
                <br />
                +62 852-3497-0431
              </>
            }
          />
          <ContactCard
            icon={<SVGs.Email width={"120"} fillColor={"#000000"}/>}
            description={<>agroindomlg@gmail.com</>}
          />
          <ContactCard
            icon={<SVGs.WhatsApp width={"120"} fillColor={"#000000"}/>}
            description={
              <>
                WhatsApp<br/>
                +62 852-3497-0431
              </>
            }
          />
        </div>

        {/* MAPS */}
        <div className="flex justify-center items-center rounded-[40px] px-20 pb-24">
            <img className="" src={Maps} alt="Maps"/>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
