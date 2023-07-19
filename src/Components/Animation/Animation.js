import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const AnimatedComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-component");
      const rect = element.getBoundingClientRect();
      const isVisible = rect.left < window.innerWidth;
      setIsVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const elements = document.querySelectorAll(".animate-component");
      elements.forEach((el, index) => {
        el.classList.add("animate-custom");
        el.style.animationDelay = `${(index + 1) * 10}s`; // Delay each element's animation
      });
    }
  }, [isVisible]);

  return (
    <div id="animated-component">
      <Transition
        show={isVisible}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterBetween="opacity-50"
        enterTo="opacity-100"
      >
        {children}
      </Transition>
    </div>
  );
};

export default AnimatedComponent;
