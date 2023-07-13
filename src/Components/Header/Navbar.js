import React from "react";
import logo from "../../Assets/Imgs/logo.png";

const Navbar = () => {
  return (
    <nav className=" space-x-4 p-6 shadow-sm shadow-white mb-2  bg-gradient-to-b from-zinc-500">
      <div className="flex place-items-center justify-between  bg-transparent">
        <img src={logo} alt="logo" className="h-14 w-auto rounded-xl" />

        <div className="flex gap-8  bg-transparent">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="rounded-lg px-3 py-2 text-white transition-all duration-500 hover:bg-orange-500 hover:text-black "
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
