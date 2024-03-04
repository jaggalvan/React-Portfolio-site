import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/a.jpg";

import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech } from "react-icons/md";

import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} /> Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} /> Introducción
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
<<<<<<< HEAD
                <FcFactory size={25} />Trabajos
=======
                <FcFactory size={25} /> Experience
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color="orange" /> Certificados
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={25} color="yellow" /> Educación
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} /> Projectos
              </Link>
            </li>
<<<<<<< HEAD
          {/*   <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcSalesPerformance size={25} /> Lenguajes
              </Link>
            </li>*/}
            <li className="nav-item">
              <Link
                to="contactsection"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} /> Contacto
              </Link>
            </li>
=======
           
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
         
         <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} /> Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={25} color="yellow" /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
           
          </ul>

        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
