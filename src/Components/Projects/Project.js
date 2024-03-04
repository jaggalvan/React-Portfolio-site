import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
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
        },
      ],
    },

    {
      name: "Sistema De Consumo Y Costos, Suelas y Ensambles Unión",
      des: "Desarrollo del sistema dentro de la organización que permita el control eficaz de las actividades que se realizan de gran importancia para el buen funcionamiento de la organización",
      projectlink: "",
      techused: [
        {
          techname: "Visual Fox Pro",
        },
        {
          techname: "Dbase",
        },

      ],
    },

    {
      name: "MERN Stack Social Media",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
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
   
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
