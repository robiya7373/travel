import { MdNavigateNext } from "react-icons/md";
import Image1 from '../../src/assets/image1.png';
import Image2 from "../../src/assets/image3.png";
import Image3 from "../../src/assets/image1.png";
import Image4 from "../../src/assets/image4.png";


const Destinations = () => {
  return (
    <div className="featured-main">
      <div className="flex justify-between custom-margin-y-12 cursor-pointer">
        <h2 className="text-3xl font-bold mb-8">Destinations</h2>
        <p className="flex items-center text-orange-400">
          View all <MdNavigateNext />
        </p>
      </div>
      <div className="flex justify-between">
        <div className="relative">
          <img src={Image1} alt="img" className="rounded-lg" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5 cursor-pointer">
            Raja Ampat <br />
            <span className="text-neutral-300	 font-medium">Indonesia</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image2} alt="img" className="rounded-lg" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5  cursor-pointer">
            Fanjingshan <br />
            <span className="text-neutral-300 font-medium">China</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image3} alt="img" className="rounded-lg" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5  cursor-pointer">
            Vevey <br />
            <span className="text-neutral-300 font-medium">Switzerland</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image4} alt="img" className="rounded-lg" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5  cursor-pointer">
            Skadar <br />
            <span className="text-neutral-300 font-medium">Montenegro</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
