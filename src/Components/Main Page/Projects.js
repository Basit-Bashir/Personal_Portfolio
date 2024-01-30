import React from "react";
import "tailwindcss/tailwind.css";
import travel from "../../Assets/Imgs/travel.png";
import titanic from "../../Assets/Imgs/titanic.png";
import north from "../../Assets/Imgs/north.png";
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent p-8">
            <MotionComponent>
              <div className="bg-white rounded shadow-md overflow-hidden shadow-md shadow-white h-full">
                <img
                  src={titanic}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2"
                />
                <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    e-commerce Website.
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    The interface was designed to be intuitive for an e-commerce
                    site.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: JavaScript, ReactJS, TailwindCSS
                  </p>
                  <a
                    href="https://www.titanicservices.in"
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
              <div className="bg-white rounded shadow-md overflow-hidden shadow-md shadow-white h-full">
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
              <div className=" rounded overflow-hidden shadow-md shadow-white h-full">
                <img
                  src={travel}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2"
                />
                <div className="p-6 bg-gradient-to-r from-zinc-500 h-full">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    Travel To-Do List website.
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    User can add items to the list and he can also mark the
                    items which he/she has packed.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: HTML, CSS, JavaScript
                  </p>
                  <a
                    href="https://travel-todo-list.vercel.app/"
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
              <div className=" rounded shadow-md overflow-hidden shadow-md shadow-white h-full">
                <img
                  src={north}
                  alt="omnifood"
                  className="h-64 w-full object-scale-down md:object-cover border-b-2"
                />
                <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
                  <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                    E-commerce Lifestyle website.
                  </h3>
                  <p className="text-white mb-6 bg-transparent">
                    User can search for lifestyle clothes, Shoes and much more
                    according to his needs from a variety of things.
                  </p>
                  <p className="text-white mb-6 bg-transparent">
                    <span className="text-orange-500 bg-transparent">
                      Tech{" "}
                    </span>
                    Used: NextJS,Tailwindcss, Stripe, Sanity.io
                  </p>
                  <a
                    href="https://e-commerce-next-js-lyart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link block text-center py-2 px-4 rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent font-bold text-white"
                  >
                    Click here!
                  </a>
                </div>
              </div>
            </MotionComponent>
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

export default Projects;
