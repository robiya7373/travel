import React from "react";
import Logo from "../../src/assets/logoimage.svg";
import Button from "./Button";

const Nav = () => {
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
          <Button text="Login" onClick={handleLoginClick} color="white"  />
          <Button
            text="Register"
            onClick={handleRegisterClick}
     
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
