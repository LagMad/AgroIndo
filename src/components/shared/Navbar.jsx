import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// COMPONENT
import Button from "../ui/Button";
import SVGs from "./SVGs";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(location.pathname !== "/");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname === "/") {
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
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full h-20 flex justify-between items-center px-10 md:px-20 font-Playfair font-semibold text-cust-light-cream rounded-b-[56px] drop-shadow-2xl ${
        isScrolled ? "bg-cust-darker-green" : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-row w-1/2 justify-start items-center text-2xl">
        <SVGs.AgroIndoLogoTEXT width={"150"} />
      </div>
      <div className="hidden lg:flex flex-row w-1/2 justify-end items-center gap-16">
        <Button
          variation={"navbar"}
          type={"button"}
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
        <Button
          variation={"navbar"}
          type={"button"}
          onClick={() => {
            navigate("/our-products");
          }}
        >
          OUR PRODUCTS
        </Button>
        <Button
          variation={"navbar"}
          type={"button"}
          onClick={() => {
            navigate("/contact-us");
          }}
        >
          CONTACT US
        </Button>
      </div>
      <div className="flex lg:hidden flex-row w-1/2 justify-end items-center gap-16">
        <div className="relative flex justify-center items-center">
          <button onClick={toggleDropdown}>
            <SVGs.BurgerMenu width="25" height="25" />
          </button>
          {isOpen && (
            <ul className="absolute flex flex-col gap-1 right-0 top-16 min-w-[50px] text-center justify-center items-center">
              <li
                className="w-full bg-cust-darker-green px-8 py-2"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              >
                HOME
              </li>
              <li
                className="w-full bg-cust-darker-green px-8 py-2"
                onClick={() => navigate("/our-products")}
                style={{ cursor: "pointer" }}
              >
                OUR PRODUCTS
              </li>
              <li
                className="w-full bg-cust-darker-green px-8 py-2"
                onClick={() => navigate("/contact-us")}
                style={{ cursor: "pointer" }}
              >
                CONTACT US
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
