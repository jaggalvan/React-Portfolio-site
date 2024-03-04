import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
<<<<<<< HEAD
      name: "Estudio De Optimización del TSP Dinámico para la planeación de rutas de entrega de mercancias",
      des: "Problema del vendedor ambulante dinámico (DTSP) en un ambiente esperimental estocástico y dinámico",
      projectlink: "",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "Google Colab",
        },
        {
          techname: "Jupyter",
=======
      name: "Video-Streaming-Platform (MERN Stack)",
      des: "This is a video streaming platform project, where user can register to this site and they can create video posts. This is a complete MERN Stack project with Typescript and AWS S3",
      projectlink: "https://video-streaming-platform.vercel.app/",
      techused: [
        {
          techname: "MERN Stack",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Context API",
        },
        {
          techname: "Redux-Toolkit",
        },
        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "MongoDB",
        },
        {
          techname: "AWS S3",
        },
        {
          techname: "AWS SES",
        },
        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Vercel",
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
        },
      ],
    },

    {
<<<<<<< HEAD
      name: "Sistema De Consumo Y Costos, Suelas y Ensambles Unión",
      des: "Desarrollo del sistema dentro de la organización que permita el control eficaz de las actividades que se realizan de gran importancia para el buen funcionamiento de la organización",
      projectlink: "",
      techused: [
        {
          techname: "Visual Fox Pro",
        },
        {
          techname: "Dbase",
=======
      name: "Multi-User-Portal (MERN Stack)",
      des: "This is a Multi-User-Portal project. This is a complete MERN Stack project with Typescript and AWS S3",
      projectlink: "https://multi-user-portal.vercel.app/",
      techused: [
        {
          techname: "MERN Stack",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Context API",
        },
        {
          techname: "Redux-Toolkit",
        },
        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "MongoDB",
        },
        {
          techname: "AWS S3",
        },
        {
          techname: "AWS SES",
        },
        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Vercel",
>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
        },

      ],
    },

    {
      name: "Job Portal (MERN Stack)",
      des: "This is a job portal web app. Where company can publish their jobs and employees can apply for the job. It's a complete MERN stack project",
      projectlink: "https://mern-job-portal.herokuapp.com/",
      techused: [
        {
<<<<<<< HEAD
          techname: "Node JS",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Nuxt Js",
        },
      ],
    },
   
=======
          techname: "MERN Stack",
        },

        {
          techname: "React Js",
        },
        {
          techname: "Context API",
        },

        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "MongoDB",
        },

        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Heroku",
        },
      ],
    },
    {
      name: "Single Page Company Portfolio",
      des: "This is a complete single page company portfolio web application using React JS",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
       
        {
          techname: "Javascript",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Git and Github",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Netlify",
        },
      ],
    },


>>>>>>> b327d9bf7e4fcae3f6310a751e04f470280b35bf
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
