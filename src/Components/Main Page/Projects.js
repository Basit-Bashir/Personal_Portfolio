import React from "react";
import "tailwindcss/tailwind.css";
import omni from "../../Assets/Imgs/omni.png";
import northstar from "../../Assets/Imgs/northstar.png";
import weather from "../../Assets/Imgs/weather.png";
import kashmir from "../../Assets/Imgs/kashmir.png";

import MotionComponent from "../Animation/Animation";

const Projects = () => {
  return (
    <MotionComponent>
      <section className="py-16 tracking-[.15em]" id="works">
        <h2 className="text-4xl md:text-7xl text-5xl font-bold text-center mb-8 text-orange-500 underline underline-offset-[18px] animate-wiggle bg-transparent">
          My Projects
        </h2>
        <div className="container p-6 bg-transparent mx-auto tracking-[.1em]">
          <div className="grid grid-cols-1  md:grid-cols-2  gap-10  bg-transparent p-8 ">
            {/* Project 1 */}
            <MotionComponent>
              <div className="bg-white rounded shadow-md overflow-hidden shadow-md shadow-white">
                <img
                  src={northstar}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2"
                />
                <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    Developed the frontend interface for e-commerce site.
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    The interface was designed to be intuitive for an e-commerce
                    site.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: HTML, CSS-Modules, ReactJS
                  </p>
                  <a
                    href="https://north-star-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link block text-center py-2 px-4 rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent font-bold text-white"
                  >
                    Click here!
                  </a>
                </div>
              </div>
            </MotionComponent>
            <MotionComponent>
              <div className="bg-white rounded shadow-md overflow-hidden shadow-md shadow-white">
                <img
                  src={kashmir}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2 "
                />
                <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    Travel Booking website interface
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    Search across various places of Kashmir and it beauty also
                    packages.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: ReactJS, TailwindCSS, Framer-Motion
                  </p>
                  <a
                    href="https://kashmir-tour.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white btn-link block text-center py-2 px-4 rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent font-bold"
                  >
                    Click here!
                  </a>
                </div>
              </div>
            </MotionComponent>
            <MotionComponent>
              <div className=" rounded overflow-hidden shadow-md shadow-white">
                <img
                  src={omni}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2"
                />
                <div className="p-6 bg-gradient-to-r from-zinc-500 h-full">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    Developed the frontend for a Food ordering website.
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    Also includes various sections related to Pricing, Gallery
                    of food.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: HTML, CSS, JavaScript
                  </p>
                  <a
                    href="https://omnifood-basits.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link block text-center py-2 px-4 rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent font-bold text-white"
                  >
                    Click here!
                  </a>
                </div>
              </div>
            </MotionComponent>

            <MotionComponent>
              <div className=" rounded shadow-md overflow-hidden shadow-md shadow-white">
                <img
                  src={weather}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2"
                />
                <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    A Weather App.
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    Enter the location and get the weather details for the
                    current day.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: HTML, CSS, JavaScript
                  </p>
                  <a
                    href="https://basit-weather-app.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link block text-center py-2 px-4 rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent font-bold text-white"
                  >
                    Click here!
                  </a>
                </div>
              </div>
            </MotionComponent>
            {/* Project 4 */}
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

export default Projects;
