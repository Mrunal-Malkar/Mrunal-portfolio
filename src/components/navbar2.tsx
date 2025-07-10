import { BsWhatsapp } from "react-icons/bs";

const Navbar2 = () => {
  const phoneNumber = "917499231209"; // Your WhatsApp number in international format
  const prefilledMessage = "Hello there! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  function reachWhatsapp() {
    window.open(whatsappLink);
  }

  return (
    <div className="w-full flex justify-around p-4 bg-[#F4F4F8] position-absolute top-0 left-0">
      <div>
        <h1 className="text-3xl font-semibold tracking-tighter text-black">
          Mrunal web solutions
        </h1>
      </div>
      <ul className="flex justify-between gap-x-9 text-bold text-lg items-center text-black">
        <li>Home</li>
        <li>Service</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="text-lg font-medium flex justify-center align-middle">
        <button
          onClick={reachWhatsapp}
          className="bg-gradient-to-br from-green-300 to-green-700 p-1 text-gray-800 px-4 rounded-2xl flex justify-around items-center gap-x-1"
        >
          <p>Whatsapp</p>
          <BsWhatsapp className="mt-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
