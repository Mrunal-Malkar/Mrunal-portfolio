import Faq from "../components/faq";
import PersonalCard from "../components/personalcard";
import Collaborate from "../components/collaborate";
import { questionAndAnswer } from "../utils/questions";
import { AllProject } from "../utils/projects";
import ProjectCard from "../components/projectcard";
import { motion } from "motion/react";

const Project = () => {
  return (
    <>
      <div className="xl:w-5/12 p-2 flex flex-col gap-y-4 md:items-center items-start">
        <div className="w-full flex flex-col xl:justify-start gap-y-4">
          <motion.div 
          initial={{opacity:0,x:0,y:-200}}
          whileInView={{opacity:100,x:0,y:0}}
          viewport={{ once: true, amount: 0.1 }}
          transition={{duration:1,type:"tween"}}
          className="w-full flex xl:justify-start justify-center">
            <h1 className="font-bold text-white text-center xl:text-start text-4xl sm:text-5xl xl:text-7xl md:text-6xl max-w-3xl mx-auto">
              Recent Projects and 
              <span className="text-[#914BF1] m-1 mx-3">
              Achievements
              </span>
            </h1>
          </motion.div>
          <div className="w-full items-center align-middle flex flex-col gap-2 sm:gap-4 p-1 sm:p-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-4 xl:w-fit w-full align-middle items-center sm:justify-center self-center gap-4">
              {AllProject.map((val, i) => {
                  return <ProjectCard key={i} val={val} />;
                })}
            </div>
          </div>
        </div>
        <div className="w-full my-10 flex flex-col gap-y-4">
          <div className="w-full flex xl:justify-start justify-center">
            <h1 className="font-semibold text-4xl text-gray-200 md:text-5xl xl:text-6xl md:max-w-xl xl:max-w-xl text-center xl:text-start">
              Frequently Asked 
              <span className="text-[#914BF1] m-1 mx-2">
              Questions
              </span>
            </h1>
          </div>
          <div className="w-full text-white p-2 flex flex-col xl:justify-start items-center justify-center">
            {questionAndAnswer.map((val) => {
              return <Faq question={val.question} answer={val.answer} />;
            })}
          </div>
        </div>
        <Collaborate />
      </div>
      <span className="block xl:hidden">
        <PersonalCard />
      </span>
    </>
  );
};

export default Project;
