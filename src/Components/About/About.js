import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";

const About = () => {
  return (
<<<<<<< HEAD
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>Resumen</h5>
                <span className="line"></span>
=======
      <div className="container about-section" id="about">
        <div className="row">
          <Fade bottom>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about-image">
                <img src={ProfilePic} alt="Profile Photo" />
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
              </div>
            </div>
          </Fade>

<<<<<<< HEAD
            <Fade right>
              <p>
              Profesional en el Área de Sistemas
Computacionales con cerca de 18 años
de experiencia ocupando posiciones
como ejecutivo de desarrollo de
sistemas, Soporte técnico, Sistemas
informaticos, Encargado de sistemas
enfocados a resultados basado en mi
capacidad de análisis, habilidades de
programación, trabajo ene quipo y
desarrollo de estrategias, he logrado la
administración efectiva del
departamento de sistemas, busco
consolidarme en mi profesión
              </p>
            </Fade>
=======
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <Flip left>
                <div className="about-title">
                  <h5>About Me</h5>
                  <span className="line"></span>
                </div>
              </Flip>

              <Fade right>
                <p>
                  I am a full-stack software developer (MERN Stack), Udemy, and
                  Skillshare Instructor. I did my bachelor's in Software
                  Engineering and currently, I am doing my Master's in Data
                  Science at TU Dortmund University, Germany. I have worked in
                  several international software companies where I have learned
                  enough knowledge about software development and worked on
                  several large-scale software.
                </p>
                <p>
                  I have been teaching programming, web development, mobile
                  development, and UI/UX on Udemy and skillshare since 2018. I
                  taught over 100k+ students on Udemy from around the world. I
                  love to share my knowledge with others.
                </p>
              </Fade>
            </div>
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
          </div>
        </div>
      </div>
  );
};

export default About;
