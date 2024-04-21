import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollThreshold = 200;

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-screen h-20 flex justify-between items-center px-20 font-Playfair font-semibold text-cust-light-cream rounded-b-[56px] ${
        isScrolled ? "bg-cust-darker-green" : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-row w-1/2 justify-start items-center text-2xl">
        LOGO
      </div>
      <div className="flex flex-row w-1/2 justify-end items-center gap-16">
        <Button
          variation={"navbar"}
          type={"button"}
          onClick={() => {
            alert("clicked");
          }}
        >
          HOME
        </Button>
        <Button
          variation={"navbar"}
          type={"button"}
          onClick={() => {
            alert("clicked");
          }}
        >
          OUR PRODUCTS
        </Button>
        <Button
          variation={"navbar"}
          type={"button"}
          onClick={() => {
            alert("clicked");
          }}
        >
          CONTACT US
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
