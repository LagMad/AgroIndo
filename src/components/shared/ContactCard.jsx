import React from "react";

const ContactCard = ({ icon, description, isHovered }) => {
  return (
    <button className={`flex flex-col w-[300px] h-[320px] gap-7 rounded-2xl justify-center items-center py-10 px-16 ${isHovered ? "bg-cust-light-green" : "bg-white"}`}>
      <div className="">{icon}</div>
      <div className={`font-medium font-Montserrat text-[14px] text-center`}>
        {description}
      </div>
    </button>
  );
};

export default ContactCard;
