import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ContactCard from "../components/shared/ContactCard";
import SVGs from "../components/shared/SVGs";

import Maps from "../assets/Maps.png";
import Button from "../components/ui/Button";

const ContactUs = () => {
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
          <ContactCard
            icon={<SVGs.Email width="120" height="" fillColor="black"/>}
            description={<>agroindomlg@gmail.com</>}
          />
          <ContactCard
            icon={<SVGs.Telegram width={"120"} height="" fillColor={"black"} />}
            description={
              <>
                Telegram
                <br />
                (+62) 823-3745-8131
              </>
            }
          />
          <ContactCard
            icon={<SVGs.Instagram width={"120"} height="" fillColor={"black"} />}
            description={<>@agroindo.id</>}
          />
          <ContactCard
            icon={<SVGs.WhatsApp width={"120"} height="" fillColor={"black"} />}
            description={
              <>
                WhatsApp
                <br />
                (+62) 823-3745-8131
              </>
            }
          />
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
