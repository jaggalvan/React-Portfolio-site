import React, { useState } from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Berylls Group GmbH - Berlin, Germany",
      position: "Full-stack software developer",
      des: "I collaborated on the Trackwise SaaS application where I developed a frontend application using React js with Typescript, REST API, Chart.js, and Material UI. I did unit testing for the backend API using mocha and chai. I also usedStorybook to document React component.",
      year: "01/04/2022 – 30/09/2022",
      show: false,
      techskills: [
        {
          techname: "React JS",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Chart.JS",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "Mocha and chai",
        },
        {
          techname: "Storybook",
        },
      ],
    },

    {
      companyname: "Udemy",
      position: "Udemy Instructor",
      des: "Since May 2018 I have been teaching on Udemy. Over 100k+ Students are learning from my courses. I teach Software development and UI/UX Design.",
      year: "01/05/2018 – CURRENT",
      show: true,
      link: "https://www.udemy.com/user/yazdani-chowdhury/",

      techskills: [],
    },

    {
      companyname: "Skillshare",
      position: "Skillshare Instructor",
      des: "Since May 2018 I have been teaching on Skillshare. I have created several courses on Skillshare. I teach Software development and UI/UX Design.",
      year: "01/05/2018 – CURRENT",
      show: true,
      link: "https://www.skillshare.com/profile/Yazdani-Chowdhury/8145130",
      techskills: [],
    },
  ];

  const colors = [
    // "#800000",
    // "#FF8042",
    "#001CCE",
    // "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>

              {item.show === true && (
                <div className="view_button">
                  <a href={item.link} target="_blank">
                    Visit My Courses
                  </a>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
