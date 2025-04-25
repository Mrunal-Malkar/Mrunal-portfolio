import PersonalCard from "../components/personalcard";
import "./../../public/home.css";
import ProjectComponent from "../components/projects";

const Home = () => {
  return (
    <>
      <span className="block xl:hidden">
        <PersonalCard />
      </span>
      <div className="w-full xl:w-7/12 bg-red-300 h-screen p-2">
        <div className="w-full flex flex-col gap-y-10">
          <div className="w-full flex flex-col gap-y-4">
            <div className="w-full xl:flex flex-col text-6xl md:text-7xl font-bold text-center xl:text-start">
              <div>Fueling dreams</div>
              <div>with code</div>
            </div>
            <div className="w-full flex justify-center xl:justify-start xl:block">
              <div className="text-lg text-center max-w-2xl xl:text-start font-serif">
                I am a 17y/o full stack developer with approx 8 months of
                self-learning experience, driven by the uncountable no. of
                possibilities code brings into life!
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col sm:items-center xl:items-start align-middle gap-y-8">
            <div className="flex self-center bg-amber-700 xl:self-start sm:flex-row flex-col w-4/6 justify-around">
              <div className="flex flex-col xl:items-start items-center">
                <h1 className="text-7xl font-bold">+8</h1>
                <div className="flex flex-col text-lg font-medium">
                  <p>HERE YOU</p>
                  <p>AND I GO!</p>
                </div>
              </div>
              <div className="flex flex-col  xl:items-start items-center">
                <h1 className="text-7xl font-bold">+8</h1>
                <div className="flex flex-col text-lg font-medium">
                  <p>HERE YOU</p>
                  <p>AND I GO!</p>
                </div>
              </div>
              <div className="flex flex-col  xl:items-start items-center">
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
            <div className="w-full flex justifiy-center">
              <div className="w-full flex flex-col items-center overflow-hidden align-middle gap-y-2">
                <h1 className="w-full text-center xl:text-6xl text-5xl xl:text-start">
                  Tools I use
                </h1>
                <div className="bg-amber-200  outer-slider overflow-hidden">
                  <ul className="flex overflow-hidden inner-slider">
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>React.js</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Next.js</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>MongoDB</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Express.js</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Node.js</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Git & Github</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Tailwind CSS</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Redux</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Mongoose</p>
                    </li>
                    <li className="flex flex-col justify-center slider items-center">
                      <div className="sm:w-36 w-28 h-28 sm:h-36 p-2 ">
                        <img src="" className="w-full h-full" alt="" />
                      </div>
                      <p>Postman</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <ProjectComponent />
    </>
  );
};

export default Home;
