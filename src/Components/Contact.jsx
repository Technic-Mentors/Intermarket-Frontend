import { React, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactBg from "../Assets/Images/contact-bg.avif";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [contactFormPadding, setContactFormPadding] = useState(5);
  useEffect(() => {
    AOS.init();
    if (window.innerWidth <= 600) {
      setContactFormPadding(2);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const params = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const companyError = document.getElementById("company-error")
    const contactError = document.getElementById("contact-error")
    const messageError = document.getElementById("message-error")
    let error = false;
    if(params.name === ""){
      nameError.innerText = "Name Field is Empty!"
      error = true
    } else{
      nameError.innerText = ""
    }
    if(params.email === ""){
      emailError.innerText = "Email Is Required"
      error = true
    }
    else{
      emailError.innerText = ""
    }
    if(params.company === ""){
      companyError.innerText = "Companny Name Is Required"
      error = true
    }
    else{
      companyError.innerText = ""
    }
    if(params.phone === ""){
      contactError.innerText = "Contact Is Required"
      error = true
    }
    else{
      contactError.innerText = ""
    }
    if(params.message === ""){
      messageError.innerText = "Message Is Required"
      error = true
    }
    else{
      messageError.innerText = ""
    }
    if(error){
      return;
    }
    
    emailjs
      .send("service_j20fv3p", "template_s7n7c4i", params, "o1W27mZ8t_ZsGHWgO")
      .then((response) => {
        formRef.current.reset();
        setMessage("Your Message Sent Successfully!");
        setTimeout(() => {
          setMessage("")
        }, 3000);
      });
  };

  return (
    <div>
      <section
        className="all-header-bg"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading" style={{ color: "transparent" }}>
                  Have A Query? Talk To Us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form  py-5">
        <div
          className="container form-row"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          <div className="row ">
            <div className={`col-md-12 p-${contactFormPadding}`}>
              <div className="headings1 text-center mb-5">
                <h6 className="subtitle">Lets hear from you</h6>
                <h2 className="main-heading">
                  Want To Work With Us? Drop A Message Here
                </h2>
              </div>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <input
                      className="form-control my-contact"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <div className="text-danger" id="name-error"></div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <input
                      className="form-control my-contact"
                      type="email"
                      name="email"
                      placeholder="Email"
                      Required
                    />
                    <div className="text-danger" id="email-error"></div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6 mb-2">
                    <input
                      className="form-control my-contact"
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      
                    />
                    <div className="text-danger" id="company-error"></div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <input
                      className="form-control my-contact"
                      type="tel"
                      name="phone"
                      placeholder="Contact"
                      
                    />
                    <div className="text-danger" id="contact-error"></div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12 mb-2">
                    <input
                      className="form-control my-contact"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="10"
                      type="text"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <div className="text-danger" id="message-error"></div>
                  </div>
                  <div className="col-md-12 text-center mt-5">
                    <div className="submit-form">
                      <button type="submit" className="main-button">
                        Send Message
                      </button>
                      <br />
                      <br />
                      <span className="text-success fw-bold">{message}</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-md-5"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <iframe
                className="locationIframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.302015377043!2d74.31616261231846!3d31.437509450554465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906c5eda7615d%3A0x2c1624930a0c66a0!2sInter%20Market%20Knit%20(Pvt.)%20Ltd!5e0!3m2!1sen!2s!4v1714023269500!5m2!1sen!2s"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              className="col-md-7"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="headings mb-3">
                <h6 className="subtitle">Our Contact Info</h6>
                <h2 className="main-heading">Get In Touch</h2>
              </div>
              <p className="mt-5">
                Reach out to us for any inquiries, feedback, or collaboration
                opportunities. We're here to assist you and look forward to
                hearing from you soon!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-box d-flex">
                    <div className="contact-icon">
                      <i
                        className="fa-solid fa-location-dot fa-2x"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="address">
                      <h6 className="fw-bold">Address:</h6>
                      <p>
                        120/S – Quaid-e-Azam Industrial Estate, Lahore 54770,
                        Punjab, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-box d-flex">
                    <div className="contact-icon">
                      <i
                        className="fa-solid fa-envelope fa-2x"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="address">
                      <h6 className="fw-bold">Email:</h6>
                      <p>
                        Write to us on the given email, we will hear you:
                        <br /> info@imlpk.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="contact-box d-flex">
                    <div className="contact-icon">
                      <i
                        className="fa-solid fa-mobile-retro fa-2x"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="address">
                      <h6 className="fw-bold">Our Contact:</h6>
                      <p>
                        Want to fix a meeting via call? Here's our business
                        contact:
                        <br />
                        +92 344 444 2678
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-box d-flex">
                    <div className="contact-icon">
                      <i
                        className="fa-solid fa-share-nodes fa-2x"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                    </div>
                    &nbsp;&nbsp;
                    <div className="address">
                      <h6 className="fw-bold">Social Links:</h6>
                      <p>
                        Follow our social media channels:
                        <br />{" "}
                        <div className="social mt-2">
                          <a href="https://www.facebook.com/profile.php?id=100067104593279">
                            <i className="fab fa-facebook-f me-2 inter-social"></i>
                          </a>
                          <a href="https://imlpk.com/">
                            <i className="fab fa-instagram me-2 inter-social"></i>
                          </a>
                          <a href="http://knitinter/">
                            <i className="fab fa-twitter me-2 inter-social"></i>
                          </a>
                          <a href="https://www.linkedin.com/company/inter-market-knit-pvt-ltd./">
                            <i className="fab fa-linkedin-in me-2 inter-social"></i>
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
