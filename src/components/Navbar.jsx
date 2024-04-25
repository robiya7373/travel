import React from "react";
import Logo from "../../public/assets/logoimage.svg";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleLoginClick = () => {};

  const handleRegisterClick = () => {};

  return (
    <div className="mt-8 flex justify-between items-center mb-20">
      <img src={Logo} alt="logo img" className="cursor-pointer" />
      <div className="flex items-center gap-[40px]">
        <ul className="flex items-center gap-14">
          <li className="text-[#B8BECD] hover:text-black cursor-pointer font-medium">
            Home
          </li>
          <li className="text-[#B8BECD] hover:text-black cursor-pointer font-medium">
            Destinations
          </li>
          <li className="text-[#B8BECD] hover:text-black cursor-pointer font-medium">
            About
          </li>
          <li className="text-[#B8BECD] hover:text-black cursor-pointer font-medium">
            Partner
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <CustomButton text="Login" onClick={handleLoginClick} color="blue" />
          <CustomButton
            text="Register"
            onClick={handleRegisterClick}
            color="green"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
