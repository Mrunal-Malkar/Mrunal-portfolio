import React from "react";
import Faq from "../components/faq";

const Project = () => {
  const faqs=[
    {question:"what services do you offer?",answer:"I offer frontend development and backend development as my services."},
    {question:"would you work with an existing team?",answer:"Yes i will surely love to interact with the existing team and add value to your ongoing project!"},
    {question:"would you manage work according to US/Different time zones?",answer:"Yes, i am flexible with working hours and would be also able to work according to US time zone."},
  ]
  return (
    <div className="w-full xl:w-7/12 2xl:w-6/12 bg-red-600 p-2 flex flex-col gap-y-4 md:items-center items-start">
      <div className="w-full flex flex-col xl:justify-start gap-y-4">
        <div className="w-full flex xl:justify-start justify-center">
          <h1 className="font-bold text-center xl:text-start text-4xl xl:text-7xl md:text-5xl max-w-3xl mx-auto">
            Recent Projects and Achievements
          </h1>
        </div>
        <div className="w-full items-center align-middle flex flex-col gap-2 sm:gap-4 p-1 sm:p-4 ">
          <div className="flex sm:flex-row flex-col xl:w-fit w-full align-middle items-center sm:justify-center self-center bg-yellow-200 gap-4">
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
          </div>
          <div className="flex sm:flex-row flex-col xl:w-fit w-full align-middle items-center sm:justify-center self-center bg-yellow-200 gap-4">
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
          </div>
          <div className="flex sm:flex-row flex-col xl:w-fit w-full align-middle items-center sm:justify-center self-center bg-yellow-200 gap-4">
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
            <div className="w-full sm:w-[365px] h-[303px] bg-green-800">
              hmm
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col bg-purple-400 gap-y-4">
        <div className="w-full flex xl:justify-start justify-center">
          <h1 className="font-bold text-4xl bg-gray-500 md:text-5xl xl:text-6xl md:max-w-xl xl:max-w-xl text-center xl:text-start">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full p-2 bg-slate-400 flex flex-col xl:justify-start items-center justify-center">
        {faqs.map((val)=>{
         return <Faq question={val.question} answer={val.answer} />
        })}
        </div>
      </div>
      <div className="w-full max-w-[780px] flex flex-col bg-amber-600 p-2">
        <div className="flex justify-between align-middle items-center">
          <h1 className="text-4xl md:text-5xl font-bold">Let's</h1>
          <button className="h-[50px] w-[50px] rounded-3xl  bg-purple-300">go</button>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-start md:text-5xl font-bold">Collaborate</h1>
          <p className="text-xl">Unlock the potential of your wonderfull idea with the right execution! ,let your idea come into life and amaze everyone. Ready take your idea to the world!!</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
