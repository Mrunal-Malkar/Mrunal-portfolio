import React from "react";
import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

interface projectType{
    name:string,
    about:string,
    livelink:string,
    github:string,
    image:string,
}

const ProjectCard = ({val}:{val:projectType}) => {
  return (
    <div
      className="flex sm:flex-row flex-col w-full align-middle items-center sm:justify-center self-center gap-4"
    >
      <div className="w-full max-w-[365px] bg-[#2C2D2F] overflow-auto h-[303px] rounded-3xl">
        <div className="h-[60%] w-full overflow-hidden">
          <img src={val.image} className="w-full h-full" alt="" />
        </div>
        <div className="h-[40%] flex flex-col w-full p-3 justify-around items-start">
          <div
            className={`flex ${
              val.livelink ? "justify-between" : "justify-start"
            } w-full items-center text-2xl text-white font-bold`}
          >
            <h1>{val.name}</h1>
            <a
              href={val.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className={`min-w-6 min-h-6 ${val.livelink?"flex":"hidden"} hover:text-blue-500 items-center justify-center rounded`}
            >
              <RiExternalLinkLine className="w-full h-full" />
            </a>
          </div>
          <div className="flex justify-between w-full text-lg font-extralight text-gray-200">
            <div className="flex justify-between w-full items-center">
              <p className="text-lg font-light text-gray-200 tracking-wide overflow-auto">{val.about}</p>
              <a
                href={val.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-6 min-h-6 hover:text-blue-300  flex items-center justify-center rounded"
              >
                <FaGithub className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
