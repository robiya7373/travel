import Logo from "../../src/assets/logoimage.svg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const FooterAnd = () => {
  return (
    <div className="max-w-screen-xl mx-auto box-border">
      <div className="py-[70px] flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo img" />
          <p className="text-[#848484] mb-10 mt-4">
            Plan and book your perfect trip with <br /> expert advice, travel
            tips destination <br /> information from us
          </p>
          <p className="text-[#848484]">
            ©2020 Thousand Sunny. All rights reserved
          </p>
        </div>
        <div>
          <ul className=" cursor-pointer">
            <li className="text-[19px] font-bold">Destinations</li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">Africa</li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">
              Antarctica
            </li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">Asia</li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">Europe</li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">America</li>
          </ul>
        </div>
        <div>
          <ul className=" cursor-pointer">
            <li className="text-[19px] font-bold">Shops</li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">
              Destination Guides
            </li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">
              Pictorial & Gifts
            </li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">
              Special Offers
            </li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">
              Delivery Times
            </li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">FAQs</li>
          </ul>
        </div>
        <div>
          <ul className=" cursor-pointer">
            <li className="text-[19px] font-bold">Interests</li>
            <li className="text-[#848484] text-[16px] hover:text-black font-light">
              Adventure Travel
            </li>
            <li className="text-[#848484] hover:text-black text-[16px] font-light">
              Art And Culture
            </li>
            <li className="text-[#848484] hover:text-black text-[16px] font-light">
              Wildlife And Nature
            </li>
            <li className="text-[#848484] hover:text-black text-[16px] font-light">
              Family Holidays
            </li>
            <li className="text-[#848484] hover:text-black text-[16px] font-light">
              Food And Drink
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex items-center justify-center py-8 gap-3">
          <FaTwitter className="w-[30px] h-[30px] cursor-pointer" />
          <FaFacebookF className="w-[30px] h-[30px] cursor-pointer" />
          <FaInstagram className="w-[30px] h-[30px] cursor-pointer" />
          <FaLinkedinIn className="w-[30px] h-[30px] cursor-pointer" />
          <FaYoutube className="w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FooterAnd;
