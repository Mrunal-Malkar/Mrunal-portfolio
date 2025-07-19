import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LiaBarsSolid } from "react-icons/lia";

const Navbar2 = () => {
  const phoneNumber = "917499231209"; // Your WhatsApp number in international format
  const prefilledMessage = "Hello there! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;
  const [showNavbar, setShowNavbar] = useState(false);

  function reachWhatsapp() {
    window.open(whatsappLink);
  }

  return (
    <div className="w-full flex justify-between min-gap-x-2 p-2 sm:px-1 sm:py-5 bg-[#F4F4F8] fixed top-0 z-40">
      {/* <div className="bg-amber-300 sm:w-auto flex flex-wrap"> */}
        <h1 className="text-2xl  md:text-3xl sm:p-2 p-1 inline-block min-w-fit font-semibold tracking-tighter text-black">
          Mrunal web solutions
        </h1>
      {/* </div> */}
      <ul className="md:flex hidden justify-between gap-x-5 xl:gap-x-9 text-bold text-lg items-center text-black">
        <li>Home</li>
        <li>Service</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="text-2xl sm:text-lg min-h-full font-medium flex justify-center align-middle">
        <button
          onClick={reachWhatsapp}
          className="bg-gradient-to-br from-green-300 h-min self-center to-green-700 py-1 text-gray-800 px-2 sm:px-4 rounded-2xl flex justify-around items-center gap-x-1"
        >
          <span className="sm:block hidden">Whatsapp</span>
          <BsWhatsapp className="sm:mt-0.5" />
        </button>
      </div>
      <div className="md:hidden flex items-end min-h-full justify-center">
        <button
          className="p-0.5 bg-amber-20 text-black self-center flex justify-center items-center"
          onClick={() => setShowNavbar(true)}
        >
          <LiaBarsSolid className="text-2xl" />
        </button>
      </div>
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full h-full bg-transparent z-50 flex">
          <div className="w-fit h-full bg-black md:hidden bg-opacity-50 z-50 flex justify-center items-start">
            <div className="bg-white p-6 shadow-lg w-full h-full">
              <ul className="flex flex-col gap-y-6 px-4 text-lg text-black w-full">
                <li>Home</li>
                <li>Service</li>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <button
                className="mt-6 px-3 py-2 ms-2 bg-red-500 text-white rounded"
                onClick={() => setShowNavbar(false)}
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="min-w-full h-full bg-transparent"
            onClick={() => setShowNavbar(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
