import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Fade from "react-reveal/Fade";

const Contact = () => {
  const API = "http://localhost:8080/sendemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {

          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contactsection">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-iamge">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="contact form image"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contactame</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Tipo de trabajo</label>
                  <select
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option>Tiempo completo</option>
                    <option>Proyecto</option>
                    <option>Contrato</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Mensaje</label>
                  <textarea
                    rows="4"
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={sendemailInfo}>
                  <p>
                    Enviar <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>

      <ToastContainer draggable autoClose={8000} />
    </div>
  );
};

export default Contact;
