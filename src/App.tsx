import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Tools from "./pages/tools";
import Project from "./pages/project";
import Navbar from "./components/navbar";
import PersonalCard from "./components/personalcard";
import Services from "./pages/services";

function App() {
  const currentPath = useLocation().pathname;
  return (
    <>
      {currentPath !== "/services" ? (
        <>
          <Navbar />
          <div className="flex w-full justify-center sm:pt-10 flex-col xl:flex-row xl:gap-y-0 gap-y-8 gap-x-8 sm:p-4 md:p-2 xl:p-0">
            <span className="xl:block hidden">
              <PersonalCard />
            </span>
            <Routes>
              <Route index element={<Home />} />
              <Route path="project" element={<Project />} />
              <Route path="tools" element={<Tools />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
            </Routes>
          </div>
        </>
      ) : (
        <Services />
      )}
    </>
  );
}

export default App;
