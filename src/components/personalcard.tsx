import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router";

const PersonalCard = () => {
  const navigate=useNavigate();
  return (
    <div 
    className={`p-8 bg-[#272829] xl:w-[344px] min-w-full sm:min-w-[280px] rounded-xl w-full flex justify-center items-start xl:sticky z-20 xl:top-20`}>
      <div className="flex flex-col gap-y-8 justify-between h-full w-full">
        <div className="w-full gap-y-4">
          <div className="flex justify-center w-full overflow-hidden align-middle px-2">
            <div className="w-fit h-fit sm:w-[280px] overflow-hidden rounded-xl sm:h-[270px] my-0.5">
            <img src="/mrunalpic.png" className="sm:w-full w-fit h-fit sm:h-full" alt="" />
            </div>
          </div>
          <div className="flex justify-center w-full align-middle flex-col gap-y-2">
            <div className="w-full flex justify-center">
              <p className="font-bold text-center text-3xl text-white">
                Mrunal Malkar
              </p>
            </div>
            <div className="flex justify-center w-full align-middle flex-col">
              <p className="font-semibold text-center text-xl text-[#D9D9D9]">
                Full-stack Developer{" "}
                <span className="text-lg">-INDIA,Maharashtra</span>
              </p>
            </div>
            <div className="flex justify-center align-middle text-[#D9D9D9] flex-row mt-4 gap-x-7">
              <a 
              href="https://x.com/Mrunal_Malkar"
              className="w-6 h-6 flex justify-center align-middle">
                <FaXTwitter className="w-full h-full" />
              </a>
              <a 
              href="https://www.linkedin.com/in/mrunal-malkar/"
              className="w-6 h-6 flex justify-center align-middle">
                <FaLinkedinIn className="w-full h-full" />
              </a>
              <a
              href="https://github.com/Mrunal-Malkar" 
              className="w-6 h-6 flex justify-center align-middle">
                <FaGithub className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center align-middle">
          <button 
          onClick={() => {
            navigate("/about");
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
          className="py-3 px-16 rounded-lg text-md font-semibold tracking-tighter bg-[#914BF1] text-[#D9D9D9]">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
