import Line from "../../src/assets/line2.png";
import HeroImg from "../../src/assets/header.png";

import Button from "./Button"; 

const HeroSection = () => {
  return (
    <div className="flex justify-between gap-20 my-48">
      <div>
        <h1 className="text-[#202336] text-[60px] font-bold mb-12">
          Explore and <br /> Travel
        </h1>
        <p className="text-[#202336] text-[22px] font-semibold mb-4">
          Holiday finder
        </p>
        <img src={Line} alt="line img" />
        <div className="flex gap-7 mt-14 cursor-pointer">
          <div className="border px-4 border-gray-300 focus-within:border-black rounded-[6px] cursor-pointer">
            <select className="pr-32 p-5 outline-none border-none cursor-pointer">
              <option>Location</option>
              <option>Location</option>
              <option>Location</option>
            </select>
          </div>
          <div className="border px-4 border-gray-300 focus-within:border-black rounded-[6px] cursor-pointer">
            <select className="pr-32 p-5 outline-none border-none cursor-pointer">
              <option>Activity</option>
              <option>Activity</option>
              <option>Activity</option>
            </select>
          </div>
        </div>
        <div className="flex gap-7 mt-7 mb-14 cursor-pointer">
          <div className="border px-4 border-gray-300 focus-within:border-black rounded-[6px] cursor-pointer">
            <select className="pr-32 p-5 outline-none border-none cursor-pointer">
              <option>Grade</option>
              <option>Activity</option>
              <option>Activity</option>
            </select>
          </div>
          <div className="border px-4 border-gray-300 focus-within:border-black rounded-[6px] cursor-pointer ms-2">
            <select className="pr-32 p-5 outline-none border-none cursor-pointer">
              <option>Date</option>
              <option>Activity</option>
              <option>Activity</option>
            </select>
          </div>
        </div>
        <Button text="Explore" width="w-[200px]" />
      </div>
      <div>
        <img src={HeroImg} alt="img" className="w-[680px]" />
      </div>
    </div>
  );
};

export default HeroSection;
