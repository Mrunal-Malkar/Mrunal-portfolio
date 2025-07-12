import Navbar2 from "../components/navbar2";
import "../../public/home.css";
import LandingPage from "../components/landingpage"
import { FaMobileAlt } from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaBoxOpen,
  FaChartLine,
  FaClock,
  FaHandshake,
} from "react-icons/fa6";

const Services = () => (
  <>
    {/* navbar section */}
    <Navbar2 />
    
    {/* landing page section */}
    <LandingPage/>

    {/* why go online? */}
    <div className="w-full bg-gray-50 p-2 sm:p-8 md:p-8 xl:p-16 flex py-9 flex-col items-center">
      <div className="border-2 border-gray-500 rounded-full sm:hidden block min-w-full min-h-0.5"></div>
      <div className=" xl:w-4/6 flex flex-col w-full">
        <div className="text-gray-900 p-8 text-4xl font-bold flex justify-center items-center">
          <h1 className="text-center">Why Go Online?</h1>
        </div>
        <div className="grid grid-cols-2 min-w-full sm:grid-cols-3 gap-y-4 gap-2 md:gap-8">

          {/* Card 1 */}
          <div className="flex flex-col sm:py-8 items-center w-full text-gray-800 p-2 sm:p-0 gap-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl p-4 bg-blue-100 text-blue-700 rounded-full shadow-sm">
              <FaArrowTrendUp />
            </div>
            <h1 className="font-semibold text-center text-xl">Grow Customers</h1>
            <p className="text-center text-base">
              Be visible 24/7 to people searching for you. <br />
              “Your customers are already online — are you?”
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:py-8 items-center w-full text-gray-800 p-2 gap-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl p-4 bg-green-100 text-green-700 rounded-full shadow-sm">
              <FaClock />
            </div>
            <h1 className="font-semibold text-center text-xl">Earn Even When Closed</h1>
            <p className="text-center text-base">
              Take orders anytime, even at midnight. <br />
              Your website never sleeps — unlike your shop!
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col sm:py-8 items-center w-full text-gray-800 p-2 gap-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl p-4 bg-pink-200 text-pink-700 rounded-full shadow-sm">
              <FaMobileAlt />
            </div>
            <h1 className="font-semibold text-center text-xl">Reach Mobile-First Buyers</h1>
            <p className="text-center text-base">
              People check their phones first, not the street. <br />
              If you're not online, you're invisible.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:py-8 items-center w-full text-gray-800 p-2 gap-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl p-4 bg-indigo-200 text-indigo-700 rounded-full shadow-sm">
              <FaBoxOpen />
            </div>
            <h1 className="font-semibold text-center text-xl">Showcase Your Products</h1>
            <p className="text-center text-base">
              Your website is a digital shelf. <br />
              Display everything beautifully — no physical space needed.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col sm:py-8 items-center w-full text-gray-800 p-2 gap-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl p-4 bg-purple-200 text-purple-700 rounded-full shadow-sm">
              <FaChartLine />
            </div>
            <h1 className="font-semibold text-center text-xl">Smarter Selling</h1>
            <p className="text-center text-base">
              Know what customers like. Track sales and trends. <br />
              Stock what sells, avoid what doesn’t.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col sm:py-8 items-center w-full text-gray-800 p-2 gap-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl p-4 bg-red-200 text-red-700 rounded-full shadow-sm">
              <FaHandshake />
            </div>
            <h1 className="font-semibold text-center text-xl">Build Trust & Credibility</h1>
            <p className="text-center text-base"> 
              A clean website makes your shop look serious, modern, and
              reliable. <br />
              No more just WhatsApp numbers!
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* what i offer */}
    <div className="w-full bg-white p-16 flex flex-col items-center">
     <div className="sm:w-4/6"></div>
    </div>
  </>
);

export default Services;
