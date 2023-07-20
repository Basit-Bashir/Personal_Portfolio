import React from "react";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import MotionComponent from "../Animation/Animation";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className="relative border-t-4 py-8 tracking-[.1em]">
      <MotionComponent>
        <div className="container mx-auto p-8 shadow-md shadow-white rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-orange-500 animate-wiggle underline underline-offset-4 text-4xl font-bold mb-4">
                Contact at:
              </h3>
              <p className="text-orange-500 text-lg mb-4">
                Email:{" "}
                <a
                  href="mailto:wbhat56@gmail.com"
                  className="cursor-pointer underline text-white"
                >
                  wbhat56@gmail.com
                </a>
              </p>
              <p className="text-orange-500 text-lg">
                Phone:{" "}
                <a
                  href="tel:7006352455"
                  className="cursor-pointer underline text-white"
                >
                  +91 7006352455
                </a>
              </p>
            </div>
            <div className="md:text-center">
              <h3 className="text-orange-500 mt-6 text-4xl font-bold mb-4 underline underline-offset-4 animate-wiggle">
                Follow Me:
              </h3>
              <div className="grid grid-cols-2 gap-6 place-items-center space-x-4 mt-2 text-md">
                <a
                  href="https://twitter.com/basit__bhatt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500  p-2 rounded-lg hover:bg-orange-500 hover:text-black"
                >
                  Twitter
                  <FontAwesomeIcon
                    icon={faTwitter}
                    beat
                    className="ml-2 text-blue-500 bg-transparent"
                  />
                </a>
                <a
                  href="https://www.instagram.com/basit__bhat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500 p-2 rounded-lg hover:bg-orange-500 hover:text-black"
                >
                  Instagram
                  <FontAwesomeIcon
                    icon={faInstagram}
                    beat
                    className="ml-2 text-red-700 bg-transparent"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/basit-bashir-6b732b204"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500 p-2 rounded-lg hover:bg-orange-500 hover:text-black"
                >
                  LinkedIn
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    beat
                    className="ml-2 text-blue-800 bg-transparent"
                  />
                </a>
                <a
                  href="https://github.com/Basit-Bashir"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500 p-2 rounded-lg hover:bg-orange-500 hover:text-black"
                >
                  Github
                  <FontAwesomeIcon
                    icon={faGithub}
                    beat
                    className="ml-2 text-white bg-transparent"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faArrowTurnUp}
          onClick={scrollToTop}
          fade
          className="text-orange-500 absolute right-[.1%] top-[80%] p-4 bg-transparent text-4xl cursor-pointer"
        />
      </MotionComponent>
    </footer>
  );
};

export default Footer;
