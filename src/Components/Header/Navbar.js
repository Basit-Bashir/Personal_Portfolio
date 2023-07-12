import React from "react";
import logo from "../../Assets/Imgs/logo.png";
const Navbar = () => {
  return (
    <nav className=" ">
      <div className="flex justify-between items-center p-4 shadow-md mb-2 shadow-orange-200 mx-2 rounded-lg   bg-gradient-to-b from-zinc-500  ">
        <div className="flex items-center gap-4 px-4 py-4 bg-transparent ">
          <img
            className="h-14 w-14 rounded-xl scale-100  "
            src={logo}
            alt="Logo"
          />
          <span className="bg-transparent text-orange-500 text-xl tracking-[.1em]">
            |Basit
          </span>
        </div>
        <div className=" md:block  py-4 rounded-lg  bg-transparent">
          <div className="ml-10  flex items-baseline space-x-4 bg-transparent tracking-[.1em]">
            <a
              href="#home"
              className="text-white hover:bg-orange-500 hover:text-black transition-all duration-500 px-4 py-2  text-sm font-medium rounded-lg "
            >
              Home
            </a>
            <a
              href="#works"
              className="text-white hover:bg-orange-500 hover:text-black px-4 py-2  text-sm font-medium rounded-lg transition-all duration-500 "
            >
              Works
            </a>
            <a
              href="#about"
              className="text-white rounded-lg hover:bg-orange-500 hover:text-black px-4 py-2  text-sm font-medium transition-all duration-500 "
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white rounded-lg hover:bg-orange-500 hover:text-black px-4 py-2  text-sm font-medium  transition-all duration-500 "
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
