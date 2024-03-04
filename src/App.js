import React, { useState, createContext } from "react";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import Home from "./Components/Home/HomeSection.js";
import Navbar from "./Components/Navbar/Navbar";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
<<<<<<< HEAD
      <div id={theme} >
        <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
=======
      <div id={theme}>
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf

        <Navbar/>


        <NavbarMobileView changeTheme={changeTheme} theme={theme} />

        <Home changeTheme={changeTheme} theme={theme}/>

        {/* <Sidebar changeTheme={changeTheme} theme={theme} /> */}
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Project />
<<<<<<< HEAD
       {/* <Testimonial />*/}
        <Contact />
=======
        {/* <Testimonial /> */}
        {/* <Contact /> */}
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
      </div>

      <ScrollToTop
        smooth={true}
        top="20"
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
