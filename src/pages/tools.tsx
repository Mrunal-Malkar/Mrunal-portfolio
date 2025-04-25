import Collaborate from "../components/collaborate";
import Faq from "../components/faq";
import PersonalCard from "../components/personalcard";

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

  const tools = [
    {
      tool1: "React",
      about1: "javascript frontend librabry",
      image1: "",
      tool2: "Node.js",
      about2: "javascript runtime..",
      image2: "",
    },
    {
      tool1: "React",
      about1: "javascript frontend librabry",
      image1: "",
      tool2: "Node.js",
      about2: "javascript runtime..",
      image2: "",
    },
    {
      tool1: "React",
      about1: "javascript frontend librabry",
      image1: "",
      tool2: "Node.js",
      about2: "javascript runtime..",
      image2: "",
    },
    {
      tool1: "React",
      about1: "javascript frontend librabry",
      image1: "",
      tool2: "Node.js",
      about2: "javascript runtime..",
      image2: "",
    },
  ];

  return (
    <>
      <div className="w-min bg-red-300 p-0 md:p-2">
        <div className="w-full flex flex-col gap-y-8 bg-green-400 xl:items-start items-center">
          <div className="w-full flex justify-center xl:justify-start bg-red-500">
            <h1 className="max-w-3xl text-5xl md:text-6xl font-bold text-center xl:text-start bg-red-600">
              Top Tier Tools For Exceptional Results
            </h1>
          </div>
          <div className="w-full bg-blue-800">
            <div className="flex w-full flex-col gap-y-8">
              {tools.map((val) => {
                return (
                  <div className="w-full justify-center p-1 xl:justify-start flex sm:flex-row flex-col sm:gap-1 sm:gap-x-14 gap-x-4 gap-y-6 sm:gap-y-0 bg-green-400">
                    <div className="w-full flex justify-start gap-x-1 md:w-[236px] xl:w-[318px] bg-blue-500">
                      <div className="w-[60px] h-[60px] bg-yellow-300">a</div>
                      <div className="justify-between h-full flex flex-col bg-orange-400">
                        <h1 className="">{val.tool1}</h1>
                        <p>{val.about1}</p>
                      </div>
                    </div>
                    {val.tool2 ? (
                      <div className="w-full flex justify-start gap-x-1 md:w-[236px] xl:w-[318px] bg-blue-500">
                        <div className="w-[60px] h-[60px] bg-yellow-300">a</div>
                        <div className="justify-between h-full flex flex-col bg-orange-400">
                          <h1>{val.tool2}</h1>
                          <p>{val.about2}</p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full p-2 my-12 bg-slate-400 flex flex-col xl:justify-start items-center justify-center">
          <div className="w-full flex xl:justify-start justify-center">
            <h1 className="font-bold text-4xl bg-gray-500 md:text-5xl xl:text-6xl md:max-w-xl xl:max-w-xl text-center xl:text-start">
              Frequently Asked Questions
            </h1>
          </div>
          {faqs.map((val) => {
            return <Faq question={val.question} answer={val.answer} />;
          })}
        </div>
        <Collaborate />
      </div>
      <span className="block xl:hidden">
        <PersonalCard />
      </span>
    </>
  );
};

export default Tools;
