import { questionAndAnswer } from "../utils/questions";
import Collaborate from "./collaborate";
import Faq from "./faq";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LatestWorkedProject } from "../utils/projects";
import ProjectCard from "./projectcard";
import { useNavigate } from "react-router";

const ProjectComponent = () => {
  const navigate=useNavigate();
  return (
    <div className="p-2 xl:w-[750px] sm:w-[100dvw] md:w-auto flex flex-col gap-y-4 md:items-center items-start">
      <div className="w-full flex flex-col xl:justify-start gap-y-4">
        <div className="w-full flex xl:justify-start justify-center">
          <h1 className="font-bold text-center xl:text-start text-5xl xl:text-7xl md:text-6xl max-w-3xl mx-auto">
            Recent Projects and Achievements
          </h1>
        </div>
        <div className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-1 sm:p-4 ">
          {LatestWorkedProject.map((val, i) => {
            return <ProjectCard key={i} val={val} />;
          })}
          <div className="flex sm:flex-row flex-col xl:w-fit min-w-full align-middle items-center sm:justify-center self-center gap-4">
            <div className="w-full md:max-w-[365px] h-[303px] rounded-2xl overflow-hidden bg-slate-800"
            onClick={()=>{navigate("/project")}}
            >
              <div className="h-full gap-x-0.5 hover:gap-x-1.5 w-full flex justify-center items-center">
                <h1 className="text-blue-400 font-bold tracking-tighter">
                  See More
                </h1>
                <FaLongArrowAltRight className="text-lg text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex xl:justify-start justify-center">
          <h1 className="font-medium text-4xl md:text-5xl xl:text-6xl md:max-w-xl xl:max-w-xl text-center xl:text-start tracking-widest">
            Frequently Asked 
            <span className="m-1 text-[#914BF1]">
            Questions
            </span>
          </h1>
        </div>
        <div className="w-full p-2 flex flex-col xl:justify-start items-center justify-center">
          {questionAndAnswer.map((val, i) => {
            return <Faq key={i} question={val.question} answer={val.answer} />;
          })}
        </div>
      </div>
      <Collaborate />
    </div>
  );
};

export default ProjectComponent;
