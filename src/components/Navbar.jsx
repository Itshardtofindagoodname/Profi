import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiBellOn, CiSearch } from "react-icons/ci";

function Navbar() {
  const location = useLocation();
  const getPageName = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/upload':
        return 'Upload';
      default:
        return 'Home';
    }
  };

  return (
    <div>
      <nav className="bg-white w-full shadow py-4">
        <div className="px-2 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10">
                  <span className="text-gray-900 hover:text-gray-400 px-3 py-2 rounded-md text-md font-medium underline underline-offset-8 decoration-4 decoration-blue-400">
                    {getPageName(location.pathname)}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex -mr-2">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                  <div className="relative">
                    <input type="text" id="Search" className="rounded-3xl border-black border-2 flex-1 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-gray-600 focus:border-gray-300" placeholder="Search"/>
                    <CiSearch className="text-2xl absolute right-2 top-1"/>
                  </div>
                  <div className="flex items-center justify-center">
                    <IoIosAddCircleOutline className="text-2xl"/>
                  </div>
                  <div className="flex items-center justify-center">
                    <CiBellOn className="text-2xl mr-10"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
