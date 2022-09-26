import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default About;
