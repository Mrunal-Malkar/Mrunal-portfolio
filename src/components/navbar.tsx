import React from 'react';
import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import { AiTwotoneTool } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";


const getNavClassName: NavLinkProps['className'] = ({ isActive }) =>
  `w-10 h-10 flex justify-center p-2 items-center rounded transition ${
    isActive ? 'bg-blue-700' : 'bg-cyan-700 hover:bg-cyan-600'
  }`;

const Navbar = () => {
  return (
    <div className="w-full pb-24 py-14 flex justify-center items-center h-32 bg-amber-300">
      <nav className="h-12 bg-green-500 text-white p-2 gap-x-6 flex justify-center items-center">

        <NavLink to="/" className={getNavClassName}>
          <FiHome className='w-full h-full' />
        </NavLink>

        <NavLink to="/project" className={getNavClassName}>
          <FaRegFolder className='w-full h-full' />
        </NavLink>

        <NavLink to="/tools" className={getNavClassName}>
          <AiTwotoneTool className='w-full h-full' />
        </NavLink>

        <NavLink to="/about" className={getNavClassName}>
          <IoPersonOutline className='w-full h-full' />
        </NavLink>

      </nav>
    </div>
  );
};

export default Navbar;
