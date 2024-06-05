import { React, useEffect } from "react";
import DtyYarns from "../Assets/Images/dty-yarns-header-bg.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function Dtyyarns() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className="all-header-bg"
        style={{
          backgroundImage: `url(${DtyYarns})`,
          backgroundPosition: " center",
        }}
      >
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">DTY/FDY Yarns</h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2696</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section
        className="other-services py-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="row d-flex justify-content-between ">
            
            <div className="col-md-5">
            <div className="headings mb-5">
              <h2 className="main-heading">DTY Yarns/ATY Intermingled Yarns</h2>
            </div>
              <ul
              className="cotton-yarn-list"
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "3rem",
                }}
              >
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;NIM, SIM, HIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Carded Combed
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;100d/144f SIM Him Nim Ddb RW AA A Grade
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;68d/72f SIM HIM NIM AA
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;150d/48f HIM AA
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;150d/48f NIM AA
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;150d/48f DDB HIM AA
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;100d/48f HIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;300d/96f HIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;150d/144f SIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;100d/144f SIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;100d/36f NIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;150d/288f SIM
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp; 300d/576f SIM
                </li>
              </ul>

            </div>

            <div className="col-md-5 mt-3">
            <div className="headings mb-5">
              <h2 className="main-heading">FDY (Fully Drawn Yarns)</h2>
            </div>
            <ul
              className="cotton-yarn-list"
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "3rem",
                }}
              >
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp; 50d/36f TBR
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;75d/36f TBR
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;FDY 109d/48f TBR
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;300d/96f TBR
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;50d/24f SD
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;75d/36f SD
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;75d/72f SD
                </li>
                <li
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;100d/48f HIM
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="quote ">
        <div className="quote-overlay py-latest">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className="text-uppercase text-center fw-bold text-white quote-heading">
                        We are sourcing <span style={{color: 'var(--secondary-color)'}}>A-Grade</span>  raw cotton flannel fabrics
                        </h2>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="fabric py-5" >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="headings1 text-center mb-5"><h2 className="main-heading"> Our Fabrics
                    </h2>
                    </div>
                    <p>Our each supplier has around 500 looms including air-jet, dobby & jacquard as well as rapier looms, with the ability to produce more than 100 million meters of fabric annually of varying widths and flexibility, producing all kinds of greige fabric.</p>
                </div>
            </div>
        </div>
      </section>

      
    </div>
  );
}

export default Dtyyarns;
