import { useLocation } from "react-router-dom";

const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  path,
  disabled = false,
}) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const getButtonVariation = (variation, path) => {
    switch (variation) {
      case "primary-rectangle":
        return "text-base sm:text-xl py-2 md:py-2 px-3 md:px-10 bg-cust-dark-green hover:bg-cust-darker-green rounded-full text-cust-light-cream hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-darker-green font-black drop-shadow-lg";
      case "secondary-rectangle":
        return "text-base py-1 md:py-2 px-7 md:px-12 bg-cust-dark-green hover:bg-cust-darker-green rounded-full text-cust-light-cream hover:text-cust-light-cream border-transparent border-2 hover:border-2 hover:border-cust-darker-green font-extrabold drop-shadow-lg";
      case "primary-round":
        return "bg-cust-dark-green hover:bg-cust-darker-green py-2 px-4 rounded-full text-cust-light-cream border-transparent border-2 hover:border-2 hover:border-cust-darker-green font-extrabold drop-shadow-lg";
      case "secondary-round":
        return "bg-white hover:bg-cust-green-normal py-3 px-3 text-cust-green-normal hover:text-white rounded-full";
      case "navbar":
        return isActive(path)
          ? "text-cust-orange-normal rounded-none border-b-cust-orange-normal border-b-2 font-Playfair text-xl"
          : "text-cust-light-active hover:text-cust-orange-normal rounded-none hover:border-b-cust-orange-normal hover:border-b-2 font-Playfair text-xl";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation, path)}
       transition-colors duration-300 ${className} font-Montserrat`}
    >
      {children}
    </button>
  );
};

export default Button;
