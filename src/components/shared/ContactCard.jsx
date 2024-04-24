import React from "react";

const ContactCard = ({ icon, description }) => {
  return (
    <div className="flex flex-col w-[300px] h-[320px] gap-7 bg-white rounded-2xl justify-center items-center mx-10 mb-10 py-10 px-16">
      <div className="">{icon}</div>
      <div className="font-medium font-Montserrat text-[14px] text-center">
        {description}
      </div>
    </div>
  );
};

export default ContactCard;
