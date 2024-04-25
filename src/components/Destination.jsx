import { MdNavigateNext } from "react-icons/md";
import Image1 from '../../public/assets/image1.png';
import Image2 from "../../public/assets/image3.png";
import Image3 from "../../public/assets/image1.png";
import Image4 from "../../public/assets/image4.png";


const Destinations = () => {
  return (
    <div className="featured-main">
      <div className="flex justify-between custom-margin-y-12 cursor-pointer">
        <h2 className="text-3xl font-bold">Destinations</h2>
        <p className="flex items-center text-orange-400">
          View all <MdNavigateNext />
        </p>
      </div>
      <div className="flex justify-between">
        <div className="relative">
          <img src={Image1} alt="img" className="rounded-14" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5 rounded-tl-none rounded-br-6 rounded-tr-6 rounded-bl-0 cursor-pointer">
            Raja Ampat <br />
            <span className="text-base font-medium">Indonesia</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image2} alt="img" className="rounded-14" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5 rounded-tl-none rounded-br-6 rounded-tr-6 rounded-bl-0 cursor-pointer">
            Fanjingshan <br />
            <span className="text-base font-medium">China</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image3} alt="img" className="rounded-14" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5 rounded-tl-none rounded-br-6 rounded-tr-6 rounded-bl-0 cursor-pointer">
            Vevey <br />
            <span className="text-base font-medium">Switzerland</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image4} alt="img" className="rounded-14" />
          <p className="text-lg font-semibold bg-white absolute bottom-0 px-5 rounded-tl-none rounded-br-6 rounded-tr-6 rounded-bl-0 cursor-pointer">
            Skadar <br />
            <span className="text-base font-medium">Montenegro</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
