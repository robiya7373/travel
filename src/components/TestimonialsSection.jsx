import { IoIosStar } from "react-icons/io";
import PersonImage from '../../public/assets/photo.png'; 

const TestimonialsSection = () => {
  return (
    <div className="mb-40">
      <div>
        <h1 className="text-[36px] font-bold mb-10">Testimonials</h1>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex mb-8">
            <IoIosStar className="text-yellow-500 w-[25px] h-[25px]" />
            <IoIosStar className="text-yellow-500 w-[25px] h-[25px]" />
            <IoIosStar className="text-yellow-500 w-[25px] h-[25px]" />
            <IoIosStar className="text-yellow-500 w-[25px] h-[25px]" />
            <IoIosStar className="text-yellow-500 w-[25px] h-[25px]" />
          </div>
          <p className="text-[24px] font-normal mb-10 cursor-pointer">
            “Quisque in lacus a urna fermentum euismod. <br />
            Integer mi nibh, dapibus ac <br /> scelerisque eu, facilisis quis
            purus. Morbi <br />
            blandit sit amet turpis nec”
          </p>
          <h1 className="text-[22px] font-bold">Edward Newgate</h1>
          <p className="text-[24px] font-normal">Founder Circle</p>
        </div>
        <div>
          <img src={PersonImage} alt="img" className="pr-16 cursor-pointer " /> 
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 