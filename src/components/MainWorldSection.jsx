import WorldImage from '../../src/assets/travel.png';
import Button from './Button'; 

const MainWorldSection = () => {
  return (
    <div className="flex items-center mb-48">
      <div>
        <img src={WorldImage} alt="img" className="w-[660px] mr-40" /> 
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-5"> 
          A new way to explore the <br /> world{" "}
        </h1>
        <p className="text-[#7D7987] mb-10"> 
          For decades travellers have reached for Lonely <br /> Planet books
          when looking to plan and execute their perfect <br /> trip, but now,
          they can also let Lonely Planet Experiences <br /> lead the way
        </p>
        <Button text="Learn more" /> 
      </div>
    </div>
  );
}

export default MainWorldSection; 
