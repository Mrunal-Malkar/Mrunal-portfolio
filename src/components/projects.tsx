
import { questionAndAnswer } from "../utils/questions";
import Collaborate from "./collaborate";
import Faq from "./faq";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { LatestWorkedProject } from "../utils/projects";

const ProjectComponent = () => {
  return (
    <div className="p-2 flex flex-col gap-y-4 md:items-center items-start">
      <div className="w-full flex flex-col xl:justify-start gap-y-4">
        <div className="w-full flex xl:justify-start justify-center">
          <h1 className="font-bold text-center xl:text-start text-5xl xl:text-7xl md:text-6xl max-w-3xl mx-auto">
            Recent Projects and Achievements
          </h1>
        </div>
        <div className="w-full items-center align-middle flex flex-col gap-2 sm:gap-4 p-1 sm:p-4 ">
          {LatestWorkedProject.map((val,i)=>{
            return(
            <div key={i} className="flex sm:flex-row flex-col xl:w-fit w-full align-middle items-center sm:justify-center self-center gap-4">
              <div className="w-full sm:w-[365px] h-[303px] rounded-2xl overflow-hidden bg-green-800">
                <div className="h-[60%] bg-pink-300 w-full">
                  <img src={val.image1} className="w-full h-full" alt="" />
                </div>
                <div className="h-[40%] bg-red-500 flex flex-col w-full p-3 justify-around items-start">
                  <div className={`flex ${val.livelink1==""?"justify-between":"justify-start"} w-full items-center text-2xl text-white font-bold`}>
                    <h1>{val.name1}</h1>
                    <a
                      href={val.livelink1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 bg-green-200 {val.livelink1?"flex":"hidden"} items-center justify-center rounded`}
                    >
                      <RiExternalLinkLine className="w-full h-full" />
                    </a>
                  </div>
                  <div className="flex justify-between w-full text-lg font-extralight text-gray-200">
                    <div className="flex justify-between w-full items-center">
                      <p>{val.about1}</p>
                      <a
                        href={val.github1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-green-200 flex items-center justify-center rounded"
                      >
                        <FaGithub className="w-full h-full" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`w-full sm:w-[365px] h-[303px] rounded-2xl ${val.name1==""?"":"hidden"} overflow-hidden bg-green-800`}>
                <div className="h-[60%] bg-pink-300 w-full">
                  <img src={val.image2} className="w-full h-full" alt="" />
                </div>
                <div className="h-[40%] bg-red-500 flex flex-col w-full p-3 justify-around items-start">
                  <div className={`flex ${val.livelink2==""?"justify-between":"justify-start"} w-full items-center text-2xl text-white font-bold`}>
                    <h1>{val.name1}</h1>
                    <a
                      href={val.livelink2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 bg-green-200 {val.livelink1?"flex":"hidden"} items-center justify-center rounded`}
                    >
                      <RiExternalLinkLine className="w-full h-full" />
                    </a>
                  </div>
                  <div className="flex justify-between w-full text-lg font-extralight text-gray-200">
                    <div className="flex justify-between w-full items-center">
                      <p>{val.about2}</p>
                      <a
                        href={val.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-green-200 flex items-center justify-center rounded"
                      >
                        <FaGithub className="w-full h-full" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })
          }
          {/* <div className="flex sm:flex-row flex-col xl:w-fit w-full align-middle items-center sm:justify-center self-center bg-yellow-200 gap-4">
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full flex flex-col bg-purple-400 gap-y-4">
        <div className="w-full flex xl:justify-start justify-center">
          <h1 className="font-bold text-4xl bg-gray-500 md:text-5xl xl:text-6xl md:max-w-xl xl:max-w-xl text-center xl:text-start">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full p-2 bg-slate-400 flex flex-col xl:justify-start items-center justify-center">
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
