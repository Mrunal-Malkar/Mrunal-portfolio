import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Tools from "./pages/tools";
import Project from "./pages/project";

function App() {
  return (
    <>
      <div className="w-full p-14 flex justify-center align-middle items-center h-32 bg-amber-300">
        <nav className="h-12 bg-green-500 text-white p-2 gap-x-6 flex">
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            a
          </div>
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            b
          </div>
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            c
          </div>
          <div className="w-8 bg-cyan-700 flex justify-center align-middle items-center">
            d
          </div>
        </nav>
      </div>
      <div className="flex w-full justify-center pt-10 flex-col xl:flex-row xl:gap-y-0 gap-y-8 gap-x-8 p-4 md:p-2 xl:p-0">
        <div className="p-8 bg-green-300 xl:w-[344px] md:h-[570] h-[640px] min-w-[280px] w-full flex justify-center items-start xl:sticky xl:top-20">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="w-full gap-y-4">
              <div className="flex justify-center w-full align-middle px-2">
                <img src="" alt="" />
                <div className="bg-slate-600 h-64 w-64">a</div>
              </div>
              <div className="flex justify-center w-full align-middle flex-col gap-y-2">
                <div className="w-full flex justify-center">
                  <p className="font-bold text-center text-3xl text-white">
                    Mrunal Malkar
                  </p>
                </div>
                <div className="flex justify-center w-full align-middle flex-col">
                  <p className="font-semibold text-center text-xl text-white">
                    Full-stack Developer{" "}
                    <span className="text-lg">-INDIA,Maharashtra</span>
                  </p>
                </div>
                <div className="flex justify-center align-middle bg-red-200 flex-row gap-x-7">
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    a
                  </div>
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    b
                  </div>
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    c
                  </div>
                  <div className="w-8 h-8 bg-red-400 flex justify-center align-middle">
                    d
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-amber-200 flex justify-center align-middle">
              <button className="p-2 text-xl font-mono bg-violet-500 text-gray-200">
                Let's talk
              </button>
            </div>
          </div>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="tools" element={<Tools />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
