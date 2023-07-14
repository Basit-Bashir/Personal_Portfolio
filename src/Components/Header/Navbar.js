import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../Assets/Imgs/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="space-x-4 p-6 shadow-sm shadow-white mb-2 bg-gradient-to-b from-zinc-500">
        <div className="flex place-items-center justify-between bg-transparent">
          <img src={logo} alt="logo" className="h-14 w-auto rounded-xl" />

          <div className="hidden md:flex gap-8 bg-transparent">
            {[
              ["Home", "/dashboard"],
              ["Team", "/team"],
              ["Projects", "/projects"],
              ["Reports", "/reports"],
            ].map(([title, url]) => (
              <a
                key={url}
                href={url}
                className="rounded-lg px-3 py-2 text-white transition-all duration-500 hover:bg-orange-500 hover:text-black"
              >
                {title}
              </a>
            ))}
          </div>

          <div className="md:hidden bg-transparent text-xl">
            <button onClick={toggleNavBar}>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-white bg-transparent"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-white bg-transparent"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`flex flex-col items-center transition-all duration-500 ease-in-out bg-gradient-to-b from-zinc-500 ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            key={url}
            href={url}
            className="rounded-lg px-3 py-2 text-white transition-all duration-500 hover:bg-orange-500 hover:text-black bg-transparent"
          >
            {title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
