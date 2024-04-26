import Button from "./Button"; 
import SunnyImage from "../../src/assets/sunny.png"; 
const SunnySection = () => { 
  return (
    <div className="flex items-center mb-48 justify-between">
      <div >
        <h1 className="text-[36px] font-bold mb-5">
          Guides by Thousand <br /> Sunny{" "}
        </h1>
        <p className="text-[#7D7987] mb-10">
          For decades travellers have reached for Lonely <br /> Planet books
          when looking to plan and execute their perfect <br /> trip, but now,
          they can also let Lonely Planet Experiences <br /> lead the way
        </p>
        <Button text="Download" /> 
      </div>
      <div>
        <img src={SunnyImage} alt="img" className="w-[640px] mt-40 " /> 
      </div>
    </div>
  );
}

export default SunnySection; 