import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { IoHomeSharp, IoCalendar } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <div className="relative left-0 top-0 bottom-0 bg-white w-60">
      <div className="h-screen flex flex-col justify-between p-2">
        <div>
          <div className="flex items-center justify-start mt-4">
            <span className="text-blue-400 ml-4 text-2xl font-medium flex flex-row items-center">
              <IoCalendar/>
              <span className="ml-2">planit</span>
            </span>
          </div>
          <nav className="mt-10">
            <NavLink to="/" className={({ isActive }) => isActive ? 'group flex items-center my-2 transition-colors duration-200 rounded-lg bg-gray-100' : 'group flex items-center my-2 transition-colors duration-200 rounded-lg'} end>
              <span className="text-sm font-semibold flex items-center w-full rounded-xl p-2">
                <IoHomeSharp className="mr-2 group-focus:text-blue-400"/>
                <span className="flex-grow group-focus:text-blue-400">Home</span>
                <button type="button" className="hidden group-focus:inline-block text-xs">
                  <CiMenuKebab/>
                </button>
              </span>
            </NavLink>
            <NavLink to="/upload" className={({ isActive }) => isActive ? 'group flex items-center my-2 transition-colors duration-200 rounded-lg bg-gray-100' : 'group flex items-center my-2 transition-colors duration-200 rounded-lg'}>
              <span className="text-sm font-semibold flex items-center w-full rounded-xl p-2">
                <FaChartPie className="mr-2 group-focus:text-blue-400"/>
                <span className="flex-grow group-focus:text-blue-400">Upload</span>
                <button type="button" className="hidden group-focus:inline-block text-xs">
                  <CiMenuKebab/>
                </button>
              </span>
            </NavLink>
          </nav>
        </div>
        <div className="mb-10">
          <a className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center py-2 px-8" href="#">
            <span className="mx-4 font-medium group-focus:text-blue-400 flex flex-row justify-center items-center">
              <IoIosLogOut className="mr-2 group-focus:text-blue-400"/>
              Log Out
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
