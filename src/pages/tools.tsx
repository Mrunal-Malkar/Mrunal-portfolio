import { div } from "motion/react-client";
import Collaborate from "../components/collaborate";
import Faq from "../components/faq";
import PersonalCard from "../components/personalcard";
import { tools } from "../utils/tools";

const Tools = () => {
  const faqs = [
    {
      question: "what services do you offer?",
      answer:
        "I offer frontend development and backend development as my services.",
    },
    {
      question: "would you work with an existing team?",
      answer:
        "Yes i will surely love to interact with the existing team and add value to your ongoing project!",
    },
    {
      question: "would you manage work according to US/Different time zones?",
      answer:
        "Yes, i am flexible with working hours and would be also able to work according to US time zone.",
    },
  ];

  return (
    <>
      <div className="xl:w-5/12 text-white p-0 md:p-2">
        <div className="w-full flex flex-col gap-y-8 xl:items-start items-center">
          <div className="w-full flex justify-center xl:justify-start">
            <h1 className="max-w-3xl text-5xl md:text-6xl font-bold text-center xl:text-start">
              Top Tier Tools For Exceptional Results
            </h1>
          </div>
          <div className="w-full">
            <div className="flex w-full flex-col gap-y-8">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 sm:gap-1 sm:gap-x-14 xl:gap-x-4 sm:gap-y-6 gap-y-2">
                {tools.map((val) => {
                  return (
                    <div className="bg-[#272829] max-w-[280px] flex justify-between rounded-xl items-center min-h-[116px]">
                      <div className="min-w-[100px] max-w-[100px] h-[100px] bg-gray-300 rounded-2xl  p-4">
                          <img src={val.image} className="w-full h-full" alt="toll image" />
                      </div>
                      <div className="w-full h-[100px] p-1 overflow-auto flex flex-col justify-between items-start">
                        <h1 className="text-2xl font-bold">{val.tool}</h1>
                        <p className="text-md font-semibold">{val.about}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 my-12 flex flex-col xl:justify-start items-center justify-center">
          <div className="w-full flex xl:justify-start justify-center">
            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl md:max-w-xl xl:max-w-xl text-center xl:text-start">
              Frequently Asked Questions
            </h1>
          </div>
          {faqs.map((val) => {
            return <Faq question={val.question} answer={val.answer} />;
          })}
        </div>
        <div className="w-full flex xl:justify-start justify-center">
          <Collaborate />
        </div>
      </div>
      <span className="block xl:hidden">
        <PersonalCard />
      </span>
    </>
  );
};

export default Tools;
