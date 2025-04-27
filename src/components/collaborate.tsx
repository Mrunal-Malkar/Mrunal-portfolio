import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Collaborate = () => {
  const navigate=useNavigate();
  return (
    <motion.div 
    initial={{opacity:0,x:0,y:200}}
    whileInView={{opacity:100,x:0,y:0}}
    viewport={{ once: true, amount: 0.3}}    
    transition={{duration:0.8}}
    className="w-full max-w-[780px] overflow-hidden">
      <div className="w-full bg-[#2C2D2F] flex flex-col gap-y-2 my-8 rounded-2xl p-6">
        <div className="flex justify-between align-middle items-center">
          <h1 className="text-4xl md:text-5xl font-semibold">Let's</h1>
          <motion.button
            initial={{ rotate: -100, x: 0, y: 0 }}
            whileInView={{rotate:310,x:0,y:0,scale:1.25}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="h-[50px] w-[50px] rounded-3xl flex justify-center items-center bg-purple-500"
            onClick={() => {
              navigate("/about");
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 100);
            }}
          >
            <FaArrowRightLong className="text-2xl text-white" />
          </motion.button>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl text-start md:text-5xl text-[#914BF1] font-semibold">
            Collaborate
          </h1>
          <p className="text-xl font-light">
            Unlock the potential of your wonderfull idea with the right
            execution! ,let your idea come into life and amaze everyone. Ready?
            to take your idea to the world!!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Collaborate;
