import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Tools from "./pages/tools";
import Project from "./pages/project";
import PersonalCard from "./components/personalcard";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex w-full justify-center pt-10 flex-col xl:flex-row xl:gap-y-0 gap-y-8 gap-x-8 p-4 md:p-2 xl:p-0">
        <PersonalCard/>
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
