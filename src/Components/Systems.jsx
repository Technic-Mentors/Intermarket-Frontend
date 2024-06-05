import {React, useEffect} from "react";
import ERP from "../Assets/Images/erp-system.avif";
import vendorEnrichment from "../Assets/Images/vendor-enrichment.avif";
import Training from "../Assets/Images/training-and-development.avif";
import qualityManagement from "../Assets/Images/quality-management.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import systemBg from "../Assets/Images/company-bg.avif"

function Systems() {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="all-header-bg" style={{backgroundImage: `url(${systemBg})`}}>
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">How We Work?</h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-body py-5 bg-white" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="headings1 mb-5 text-center">
          <h6 className="subtitle">Evolution of Excellence</h6>
          <h2 className="main-heading">
            Operational Evolution: Yearly Improvements
          </h2>
        </div>
        <ul className="timeline-ul">
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              2004
            </div>
            <div class="title">
            </div>
            <div class="descr">

              <p>Implementation of Internationally approved Social and Health Compliance systems backed by a comprehensive HR management structure and ISO Procedures.</p>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              2007
            </div>
            <div class="title">
            </div>
            <div class="descr">
              <p> 
              Implementation of Counter Terrorism Procedures and Protocols
              </p>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              2008
            </div>
            <div class="title">
            </div>
            <div class="descr">
              <p> 
              LEAN intervention: Six Sigma Black Belt Training, Hazzard Assessments
              </p>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              2012
            </div>
            <div class="title">
            </div>
            <div class="descr">
              <p> 
              Successfully conducted vocational training classes for the region where more than 250 students graduated and were hired by the organization
              </p>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              2014
            </div>
            <div class="title">
            </div>
            <div class="descr">
              <p> 
              LEAN Intervention: LEAN Master Training.
              </p>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              2020
            </div>
            <div class="title">
            </div>
            <div class="descr">
              <p> 
              Navigating Successfully through Covid: 
              </p>
              <ul>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>ZERO Out Break.</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Full Capacity Working</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Rigorous International trainings for all employees and Family members.</li>
              </ul>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              2022
            </div>
            <div class="title">
            </div>
            <div class="descr">
              
              <ul className="internal-list" style={{lineHeight: '1rem'}}>
              <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Inter Market was placed in the Elite 5 factories in Punjab for innovation.</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Won the GIZ innovation contest.</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Won the award for Dialogue for sustainability.</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Successfully implemented sustainable strategic HR practices.</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Trained maximum staff on sustainability. </li>
              </ul>
            </div>
          </li>
          <li>
            <div
              class="date"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              2023
            </div>
            <div class="title">
            </div>
            <div class="descr">
              <p>Focus on Sustainable Systems <br />Eco Friendly Materials.</p>
              <ul className="internal-list" style={{lineHeight: '1rem'}}>
              <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Organic Cotton</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>BCI Cotton.</li>
                <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Recycled Materials.</li>
              </ul><br />
              <p>Sustainable Packaging</p>
              <ul className="internal-list" style={{lineHeight: '1rem'}}>
              <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Recycled Papers</li>
              <li className="d-flex"><i
                    className="fas fa-check me-2"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>Carboard Hooks</li>
           
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="timeline-mobile py-4"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="container">
          <div className="headings mb-5">
            <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Evolution of Excellence</h6>
            <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Operational Evolution: Yearly Improvements
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4 fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2004</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Implementation of Internationally approved Social and Health Compliance systems backed by a comprehensive HR management structure and ISO Procedures.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2007</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Implementation of Counter Terrorism Procedures and Protocols.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2008</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              LEAN intervention: Six Sigma Black Belt Training, Hazzard Assessments.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2012</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Successfully conducted vocational training classes for the region where more than 250 students graduated and were hired by the organization.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2014</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              LEAN Intervention: LEAN Master Training.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2020</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Navigating Successfully through Covid: 
              <ul>
                <li>ZERO Out Break</li>
                <li>Full Capacity Working</li>
                <li>Rigorous International trainings for all employees and Family members.</li>
              </ul>
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2022</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Sustainability and Innovation Drive: 
              <ul>
                <li>	Inter Market was placed in the Elite 5 factories in Punjab for innovation.</li>
                <li>	Won the GIZ innovation contest.</li>
                <li>Won the award for Dialogue for sustainability.</li>
                <li>Successfully implemented sustainable strategic HR practices.</li>
                <li>Trained maximum staff on sustainability. </li>
              </ul>
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">2023</h3>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Focus on Sustainable Systems<br />Eco Friendly Materials. 
              <ul>
                <li>Organic Cotton</li>
                <li>BCI Cotton</li>
                <li>Recycled Materials</li>
              </ul>
              </p>
              <p>Sustainable Packaging
                <ul>
                  <li>Recycled Papers</li>
                  <li>Carboard Hooks</li>
                </ul>
              </p>
            </div>
           
          </div>
        </div>
      </section>

      <section
        className="corrective-action py-4"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="headings1 text-center">
                <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Process Optimization</h6>
                <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                ICAR System – Internal Corrective Action Request System.
                </h2>
              </div>
              <p className="mt-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                We have an ICAR System in place to eliminate the root cause of a
                problem, preventing future issues. Through our ICAR System we
                collect and analyze information, identify and investigate
                product and quality problems, and take appropriate corrective
                and / or preventive actions to prevent their recurrence. We have
                been able to resolve over 100 cases through our ICAR system.
                This has reduced our operational bottlenecks and has increased
                our teams’ confidence and trust for one another.
              </p>
              <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                  <ul>
                    <li>Faster Resolution Of Issues</li>
                    <li>Enhanced Customer Trust</li>
                    <li>Better Customer Support</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>Proactive Communication</li>
                    <li>Innovation</li>
                    <li>Customization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="erp-system py-5">
        <div className="container">
          <div className="headings1 text-center mb-3">
            <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Explore Our</h6>
            <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Enterprise Resource Planning System
            </h2>
          </div>

          <p className="mt-5 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
            Since 1998, the ERP system at Inter Market Knit is fully implemented
            at all functions of the organization ranging from Planning,
            Procurement, Production, Sales, Marketing, Finance to Human
            Resource.
          </p>
          <div className="row mt-4 d-flex align-items-center">
            <div className="col-md-4">
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Inter Market’s fully integrated ERP system provides it with:
              </p>

              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.9rem",
                }}
              >
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Management Reports
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Production Lead Time
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Customer Order Status
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Financial Dashboards
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Common Database
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Customer Relationship Management (CRM)
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Visibility into Key Performance Indicators
                </li>
              </ul>
              <p className="mt-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                The overriding corporate objective of maintaining an ERP system
                is predicting customer needs and exceeding customer
                satisfaction.
              </p>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={ERP} alt="" className="img-fluid" />
            </div>

            <div className="col-md-4 mt-3">
              <p>With its ERP system, Inter Market Knit has:</p>

              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.9rem",
                }}
              >
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Reduced operational costs by streamlining business
                  processes
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Enhanced business insight and analytics
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Increased collaboration throughout the organization
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Improved data integrity and financial controls
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Ensured smooth and efficient production
                </li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Provided timely delivery of orders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="vendor-enrichment"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="vendor-overlay py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-7" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
                <div className="headings mb-3">
                  <h6 className="subtitle">Explore Our</h6>
                  <h2 className="main-heading">Vendor Enrichment System</h2>
                </div>
                <p className="mt-5">
                  We find it a duty to generate value for our suppliers and
                  vendors along with our customers. We have assisted our vendors
                  in bringing their practices in accordance with the global
                  standards of ISO14001, ISO9001, OEKO-TEX, Zero Discharge for
                  Hazardous Chemicals (ZDHC), and Better Cotton Initiative
                  (BCI). Our vendors and suppliers make use of the Higg Index to
                  accurately measure and score their sustainability performance.
                  <br />
                  <br />
                  We have collaborated with several of our yarn suppliers and
                  have developed new shades and trends of yarn that are
                  environmental friendly. We only commence business with our
                  vendors after signing an ethical trade form.
                </p>
              </div>
              <div className="col-md-5" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
                <img
                  src={vendorEnrichment}
                  alt="vendor-enrichment"
                  className="img-fluid b-shadow-img"
                />
              </div>
            </div>
            <div className="row training-wali mt-5 d-flex justify-content-center align-items-center">
              <div className="col-md-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                <img
                  src={Training}
                  alt="vendor-enrichment"
                  className="img-fluid b-shadow-img"
                />
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                <div className="headings mb-3">
                  <h6 className="subtitle">Investing In Growth</h6>
                  <h2 className="main-heading">Advanced HR Strategies</h2>
                </div>
                <p className="mt-5">
                  The focus of our training mechanism is on continuous
                  development of our employees. We facilitate our employees to
                  learn their jobs to a level of expertise where they can
                  support and contribute to the development of others.
                  <br />
                  <br />
                  Our Training and Development are applicable to all our
                  permanent, full-time, and part-time employees. Employees with
                  temporary/short-term contracts might attend training at their
                  manager’s discretion.
                  <br />
                  <br />
                  We have engage experts to provide training on:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul
                      style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                        lineHeight: "1.9rem",
                      }}
                    >
                      <li>
                        <i
                          className="fas fa-check"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        &nbsp;OD Diagnostics
                      </li>
                      <li>
                        <i
                          className="fas fa-check"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        &nbsp;HR Calculators
                      </li>
                      <li>
                        <i
                          className="fas fa-check"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        &nbsp;Value Based Management
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-12" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                <p className="text-center mt-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  We hold the privilege of being amongst the top 20
                  organizations in the textile sector of the province (Punjab)
                  that work in collaboration with the government of Pakistan,
                  through the platform of PSDF (Punjab Skills Development Fund),
                  for the training and development of unskilled and unemployed
                  labor. We have trained 500+ unemployed and unskilled labor
                  making them capable of securing a job in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qms py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <div className="headings mb-3">
                <h6 className="subtitle">Elevating Standards</h6>
                <h2 className="main-heading">
                  Quality Management System (QMS)
                </h2>
              </div>
              <p className="mt-5">
                Maintaining and improving the quality of our products is the
                corner stone of our quality policy. We have implemented a
                Quality Management System and maintain the certification of
                ISO9001 (For Quality Management Systems) since 2004. The
                objective is to manufacture premium quality socks according to
                customer requirements. ISO9001 provides a process-oriented
                approach to documenting and reviewing the structure,
                responsibilities and procedures required to achieve effective
                quality management in an organization.
                <br />
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "1.9rem",
                }}
              >
                <li>
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Improved customer satisfaction
                </li>
                <li>
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Enhanced quality of products and services
                </li>
                <li>
                  <i
                    className="fas fa-check"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  &nbsp;Ensuring a culture of continuous development
                </li>
              </ul>
              <br />
              <p>
                Additional benefits include defining, improving, and controlling
                processes, reducing wastages, preventing mistakes, lowering
                costs, facilitating and identifying training opportunities,
                engaging staff, setting organization-wide direction and
                communicating a readiness to produce consistent results. We have
                an audit success rate of 100%.
              </p>
            </div>
            <div className="col-md-5" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={qualityManagement}
                alt="quality-management"
                className="img-fluid b-shadow-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Systems;
