import Faq from "../components/faq";
import PersonalCard from "../components/personalcard";
import Collaborate from "../components/collaborate";
import { questionAndAnswer } from "../utils/questions";

const Project = () => {

  return (
    <>
      <div className="xl:w-max p-2 bg-red-600 flex flex-col gap-y-4 md:items-center items-start">
        <div className="w-full flex flex-col xl:justify-start gap-y-4">
          <div className="w-full flex xl:justify-start justify-center">
            <h1 className="font-bold text-center xl:text-start text-5xl xl:text-7xl md:text-6xl max-w-3xl mx-auto">
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
