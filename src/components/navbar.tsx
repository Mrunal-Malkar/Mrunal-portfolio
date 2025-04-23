import React from 'react';
import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';

const getNavClassName: NavLinkProps['className'] = ({ isActive }) =>
  `full sm:w-20 flex justify-center items-center rounded transition ${
    isActive ? 'bg-blue-700' : 'bg-cyan-700 hover:bg-cyan-600'
  }`;

const Navbar = () => {
  return (
    <div className="w-full p-14 flex justify-center items-center h-32 bg-amber-300">
      <nav className="h-12 bg-green-500 text-white p-2 gap-x-6 flex">

        <NavLink to="/" className={getNavClassName}>
          Home
        </NavLink>

        <NavLink to="/project" className={getNavClassName}>
          Project
        </NavLink>

        <NavLink to="/tools" className={getNavClassName}>
          Tools
        </NavLink>

        <NavLink to="/about" className={getNavClassName}>
          About
        </NavLink>

      </nav>
    </div>
  );
};

export default Navbar;
