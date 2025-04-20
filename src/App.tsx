import { Route,Routes } from 'react-router'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Tools from './pages/tools'
import Project from './pages/project'

function App() {
  <Routes>
    <Route index element={<Home/>}></Route>
    <Route index element={<Project/>}></Route>
    <Route index element={<Tools/>}></Route>
    <Route index element={<About/>}></Route>
  </Routes>
  return null;
}

export default App
