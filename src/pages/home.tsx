import PersonalCard from "../components/personalcard";

const Home = () => {


  return (
    <>
    <span className="block xl:hidden">
    <PersonalCard/>
    </span>
    <div className="w-full xl:w-4/12 bg-red-300 h-screen p-2">
      <div className="w-full flex flex-col gap-y-10">
        <div className="w-full flex flex-col gap-y-4">
          <div className="w-full xl:flex flex-col text-6xl md:text-7xl font-bold text-center xl:text-start">
            <div>Fueling dreams</div>
            <div>with code</div>
          </div>
          <div className="w-full flex justify-center xl:block">
            <div className="text-lg text-center max-w-2xl mx-auto xl:text-start font-serif">
              I am a 17y/o full stack developer with approx 8 months of
              self-learning experience, driven by the uncountable no. of
              possibilities code brings into life!
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col align-middle gap-y-8">
          <div className="flex self-center w-4/6 xl:w-full justify-around">
            <div className="flex flex-col">
              <h1 className="text-7xl font-bold">+8</h1>
              <div className="flex flex-col text-lg font-medium">
                <p>HERE YOU</p>
                <p>AND I GO!</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-7xl font-bold">+8</h1>
              <div className="flex flex-col text-lg font-medium">
                <p>HERE YOU</p>
                <p>AND I GO!</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-7xl font-bold">+8</h1>
              <div className="flex flex-col text-lg font-medium">
                <p>HERE YOU</p>
                <p>AND I GO!</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center text-white text-xl xl:justify-start gap-x-4">
            <button className="p-2 bg-purple-500">Let's Talk!</button>
            <div className="p-2 bg-slate-600">My work :=</div>
          </div>
          <div className="w-full flex justifiy-center text-white">
            <div className="w-full flex flex-col items-center align-middle gap-y-2">
              <h1 className="w-full text-center xl:text-start">Tools I use</h1>
              <div className="h-32 bg-amber-200 w-full">yeah</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
