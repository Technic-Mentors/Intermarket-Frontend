import { React, useEffect } from "react";
import cottonYarn from "../Assets/Images/cotton-yarn.avif";
import GOTS from "../Assets/Images/Certificates/gots-logo.avif";
import BCI from "../Assets/Images/Membership/BCI-logo.avif";
import CMIA from "../Assets/Images/Certificates/cmia-logo.avif";
import PIMA from "../Assets/Images/Certificates/pima-cotton.avif";
import cottonYarnImg from "../Assets/Images/cotton-yarn-list-img.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function Cottonyarn() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className="all-header-bg"
        style={{
          backgroundImage: `url(${cottonYarn})`,
          backgroundPosition: " center",
        }}
      >
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">Cotton Yarn</h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2696</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="other-services py-5"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-5 cot-orig-col mb-3">
              <div className="headings">
                <h2 className="main-heading">
                  Cotton Origin And Certifications
                </h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row cert-card">
                <div className="col-md-3">
                  <div className="services-button-new card gots">
                    <img src={GOTS} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="services-button-new d-flex align-items-center card ">
                    <img
                      src={BCI}
                      alt=""
                      className="img-fluid"
                      style={{ padding: "20px 0" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="services-button-new card ">
                    <img
                      src={CMIA}
                      alt=""
                      className="img-fluid"
                      style={{ padding: "20px 0" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="services-button-new card ">
                    <img
                      src={PIMA}
                      alt=""
                      className="img-fluid"
                      style={{ padding: "30px 0" }}
                    />
                  </div>
                </div>
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
          <div className="row d-flex justify-content-between align-items-center">
            <div className="headings mb-5">
              <h2 className="main-heading">Conventional Cotton Yarns</h2>
            </div>

            <div className="col-md-4">
              <ul
              className="cotton-yarn-list mb-3"
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
                  &nbsp;Carded Compact
                </li>
                {/* <li
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
                </li> */}
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
                  &nbsp;Combed Compact
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
                  &nbsp;Open End
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
                  &nbsp;Zero Twist Yarns
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
                  &nbsp;Linen Blended
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
                  &nbsp;Melange
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
                  &nbsp;Vortex
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
                  &nbsp;Viscose
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
                  &nbsp;Modal
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
                  &nbsp;Gassed Mercerized
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
                  &nbsp;Poly Cotton
                </li>
              </ul>

              <div className=" mb-3">
              <h4 className="">Regenerated Yarns</h4>
            </div>

            <ul className="mb-3" style={{listStyle: 'none', padding: '0', margin: '0'}}> 
            <li><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;RG Yarns-A grade</li>
            </ul>
              <div className=" mb-2">
              <h4 className="">Wool</h4>
            </div>

            <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
              <li><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Acrylic Wool</li>
            </ul>

            </div>

            <div className="col-md-5 mt-3">
                <img src={cottonYarnImg} alt="cotton-yarn" className="img-fluid b-shadow-img" />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Cottonyarn;
