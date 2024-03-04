import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (

    <div className="container-fluid home">

    <div className="container" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
<<<<<<< HEAD:src/Components/Home/Home.js
          <h1>Mi nombre es José Adrián Galván García</h1>
=======
          <h1>Hi I'm MD NOOR E YAZDANI CHOWDHURY</h1>
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf:src/Components/Home/HomeSection.js
          <h3>
            <Typewriter
              options={{
                strings: [
<<<<<<< HEAD:src/Components/Home/Home.js
                  "Analista De Datos",
                  "Desarrollador Web",
                  "Cientifico De Datos",
                  "Desarrollo De sistemas",
                  "Soporte Técnico",
=======
                  "Full Stack Software Developer",
                  "MERN Stack",
                  "Typescript",
                  "React Js",
                  "Redux-Toolkit",
                  "AWS S3",
                  "Unit testing (Mocha and Chai)",
                  "Node js, Express Js"
                  
                  
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf:src/Components/Home/HomeSection.js
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
            {/* <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
<<<<<<< HEAD:src/Components/Home/Home.js
              <div className="hire-me-button">Contactame</div>
            </Link>
            <div className="get-resume-button">
              <a href={MyCv} download="José_Adrián_cv.pdf">
                Curriculum Vitae PDF
=======
              <div className="hire-me-button">Hire Me</div>
            </Link> */}
            <div className="get-resume-button">
              <a href="https://github.com/Yazdani1" target="_blank">
                Github Profile
              </a>
            </div>

            <div className="get-resume-button">
              <a
                href="https://www.linkedin.com/in/yazdani-chowdhury-650313110"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="get-resume-button">
              <a href={MyCv} download="Yazdani_cv.pdf" target="_blank">
                Get Resume
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf:src/Components/Home/HomeSection.js
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>

    </div>

  );
};

export default Home;
