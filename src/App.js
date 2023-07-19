import React from "react";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Main Page/Main";
import Skills from "./Components/Main Page/Skills";
import Projects from "./Components/Main Page/Projects";
import Contact from "./Components/Main Page/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Main />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
