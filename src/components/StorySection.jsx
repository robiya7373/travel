import { MdNavigateNext } from "react-icons/md";
import StoryImage1 from '../../public/assets/image11.png';
import StoryImage2 from "../../public/assets/image12.png";
import StoryImage3 from "../../public/assets/image13.png";
import StoryImage4 from "../../public/assets/image14.png";

const StorySection = () => {
  return (
    <div className="mb-[200px]">
      <div className="flex justify-between mx-6 mb-12 cursor-pointer">
        <h2 className="text-[36px] font-bold">Featured destinations</h2>
        <p className="flex items-center text-[#FB8F1D]">
          View all <MdNavigateNext />
        </p>
      </div>
      <div className="flex justify-between cursor-pointer">
        <div>
          <img
            src={StoryImage1}
            alt="img"
            className="rounded-tl-[6px] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] object-cover  w-[280px] h-[320px] "
          />
          <h2 className="text-[19px] font-bold my-3">
            The many benefits of <br /> taking a healing holiday
          </h2>
          <p className="text-[#7D7987] mb-6">
            ‘Healing holidays’ are on the rise <br /> to help maximize your
            health and <br />
            happiness...
          </p>
          <p className="text-[#FB8F1D;]">Read more</p>
        </div>
        <div>
          <img
            src={StoryImage2}
            alt="img"
            className="rounded-tl-[6px] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] object-cover  w-[280px] h-[320px]"
          />
          <h2 className="text-[19px] font-bold my-3">
            The many benefits of <br /> taking a healing holiday
          </h2>
          <p className="text-[#7D7987] mb-6">
            ‘Healing holidays’ are on the rise <br /> to help maximize your
            health and <br />
            happiness...
          </p>
          <p className="text-[#FB8F1D;]">Read more</p>
        </div>
        <div>
          <img
            src={StoryImage3}
            alt="img"
            className="rounded-tl-[6px] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] object-cover  w-[280px] h-[320px]"
          />
          <h2 className="text-[19px] font-bold my-3">
            The many benefits of <br /> taking a healing holiday
          </h2>
          <p className="text-[#7D7987] mb-6">
            ‘Healing holidays’ are on the rise <br /> to help maximize your
            health and <br />
            happiness...
          </p>
          <p className="text-[#FB8F1D;]">Read more</p>
        </div>
        <div>
          <img
            src={StoryImage4}
            alt="img"
            className="rounded-tl-[6px] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] object-contain w-[280px] h-[320px]"
          />
          <h2 className="text-[19px] font-bold my-3 ">
            The many benefits of <br /> taking a healing holiday
          </h2>
          <p className="text-[#7D7987] mb-6">
            ‘Healing holidays’ are on the rise <br /> to help maximize your
            health and <br />
            happiness...
          </p>
          <p className="text-[#FB8F1D;]">Read more</p>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
