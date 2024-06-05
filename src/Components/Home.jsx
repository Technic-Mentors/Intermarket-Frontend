import {React, useEffect} from "react";
import Header from "./Header";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import DiamondIcon from "@mui/icons-material/Diamond";
// import CheckIcon from '@mui/icons-material/Check';
import About1 from "../Assets/Images/about-image-1.avif";
import About2 from "../Assets/Images/about-image-2.avif";
import { Link } from "react-router-dom";
import Types from "./Types";
import CountUp from "react-countup";
import Client1 from "../Assets/Images/Clients/Client-1.avif";
import Client2 from "../Assets/Images/Clients/Client-2.avif";
import Client3 from "../Assets/Images/Clients/Client-3.avif";
import Client4 from "../Assets/Images/Clients/Client-4.avif";
import Client5 from "../Assets/Images/Clients/Client-5.avif";
import Client6 from "../Assets/Images/Clients/Client-6.avif";
import Client7 from "../Assets/Images/Clients/Client-7.avif";
import Client8 from "../Assets/Images/Clients/Client-8.avif";
import Client9 from "../Assets/Images/Clients/Client-9.avif";
import Client10 from "../Assets/Images/Clients/Client-10.avif";
import Client11 from "../Assets/Images/Clients/Client-11.avif";
import Client12 from "../Assets/Images/Clients/Client-12.avif";
import Client13 from "../Assets/Images/Clients/Client-13.avif";
import Client14 from "../Assets/Images/Clients/Client-14.avif";
// import Textilesourcingimg from '../Assets/Images/textile-sourcing.avif';
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />

      <section className="mission-vision py-5">
        <div className="container">
          <div className="row cards-row head-card">
            <div className="col-md-4" >
              <div className="card mission-vision-card card-soloution">
                <div className="card-content text-center">
                  <div className="icon-box">
                    <i class="fa-solid fa-binoculars "></i>
                    <br />
                    <br />
                  </div>
                  <div className="box-content">
                    <h5>Our Vision</h5>
                    <br />
                    <p>
                    To be the leading innovator celebrated for extraordinary commitment to sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mission-vision-card card-soloution">
                <div className="card-content text-center">
                  <div className="icon-box">
                    <CrisisAlertIcon
                      style={{
                        fontSize: "40px",
                        color: "var(--secondary-color)",
                      }}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="box-content">
                    <h5>Our Mission</h5>
                    <br />
                    <p>
                    Our mission is to elevate manufacturing to an art form. We craft with care, ensuring that our products are not merely worn but truly experienced. Committed to forging enduring partnerships, we strive to enrich our community and the environment, weaving a legacy of conscientiousness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mission-vision-card card-soloution">
                <div className="card-content text-center">
                  <div className="icon-box">
                    <DiamondIcon
                      style={{
                        fontSize: "40px",
                        color: "var(--secondary-color)",
                      }}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="box-content">
                    <h5>Core Values</h5>
                    <br />
                    <p>
                      Committed to innovation and dependable integrity, we
                      elevate customer luxury with every stitch, defining our
                      core values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company py-5">
        <div className="container">
          <div className="row g-5 d-flex align-items-center">
            <div className="col-md-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="about-images d-flex">
                <img src={About1} alt="" className="img-fluid img-1" />
                <img src={About2} alt="" className="img-fluid img-2" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="headings">
                <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Who We Are</h6>
                <h5 className="middle-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">An Ultimate Textile Brand In</h5>
                <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Market Since 1998</h2>
              </div>
              <br />
              <br />
              <p className="lead" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Discover the perfect fusion of innovation, quality with compliance and performance.</p>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Founded in 1998 Inter Market (IMK) has spent over 2 decades mastering the art of innovation, compliance, and teamwork. Whether you're an athlete pushing your limits, an outdoor enthusiast exploring the great outdoors, or someone who simply demands the best from their gear while being conscientious about our earth and sustainability we have you covered.
              </p>
              <br />
              <div className="row d-flex about-list">
                <div className="col-md-6">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      lineHeight: "2rem",
                    }}
                  >
                    <li className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Eco-friendly manufacturing
                    </li>
                    <li className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Fair labor practices
                    </li>
                    <li className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Community involvement
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      lineHeight: "2rem",
                    }}
                  >
                    <li className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Creative designs
                    </li>
                    <li className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Customer-centric approach
                    </li>
                    <li className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                      <i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Global presence
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="buttons" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                <Link to="/about">
                  <button className="main-button me-3">Learn More</button>
                </Link>
                <Link to="/contact">
                  <button className="second-button">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"
        className="cta"
        style={{ backgroundColor: "var(--secondary-color)" }}
      >
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-4 grad-col custom justify-content-center">
              <h2 className="fw-bold text-white px-3">
                Step into Comfort: Explore Our Stylish Socks!
              </h2>
              <p className="lead px-3 mb-4 mt-4 fw-bold text-white">
                Call Us At:  +92 344 444 2678
              </p>
              <Link className="px-3" to='/socks-manufacturing'><button className="cta-button"  style={{backgroundColor: '#fff', fontWeight: '600', color: 'var(--secondary-color)', border: 'none', padding: '15px 35px', borderRadius: '50px'}}>Socks Manufacturing</button></Link>
            </div>
            <div className="col-md-8 image-col"></div>
          </div>
        </div>
      </section>

      <section className="textile-home py-5" style={{backgroundColor: '#f8f8f8'}}>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center">
            <div className="col-md-9 mb-3" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="headings1 mb-4">
                <h6 className="subtitle">Meet The</h6>
                <h5 className="">
                  Leading Textile Sourcing Company In Pakistan
                </h5>
              </div>
              <p className="mt-5">
                Inter Market has taken a step further in providing our customers
                with yarn and textile sourcing. Our aim is to provide best
                services of supplier selection, Competitive price, Quality
                Assurance, inline inspection, Final inspection, compliance and
                complete solutions of buying for buyers and Supply Chain
                Management.
              </p>

              <Link to='/textile-sourcing'>
                <button className="main-button mt-3">Know More</button>
              </Link>
            </div>
            {/* <div className="col-md-6" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <img src={Textilesourcingimg} alt="textile-sourcing-company-in-pakistan" className="img-fluid b-shadow-img" />
            </div> */}
          </div>
        </div>
      </section>

      <Types />

      <section className="stats " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="stats-overlay py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 ">
                <div className="row">
                  <div className="col-md-3 mobile-col">
                    <div className="card stat-card text-center align-items-center">
                      <h6 className="subtitle">
                        Established <br />
                        In
                      </h6>
                      <CountUp
                        className="establishment counting-text"
                        start={0}
                        end={1998}
                        duration={2.75}
                        useEasing={true}
                        formattingFn={(value) => value.toString()}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 mobile-col">
                    <div className="card stat-card text-center align-items-center">
                      <h6 className="subtitle">ANNUAL CAPACITY OF PAIRS</h6>
                      <CountUp
                        className="pairs counting-text"
                        start={0}
                        end={250}
                        duration={2.75}
                        useEasing={true}
                        formattingFn={(value) => (value / 100).toFixed(2)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 mobile-col">
                    <div className="card stat-card text-center align-items-center">
                      <h6 className="subtitle">
                        Customers
                        <br /> Served
                      </h6>
                      <CountUp
                        className="customers counting-text"
                        start={0}
                        end={50}
                        duration={2.75}
                        useEasing={true}
                        formattingFn={(value) => value.toString()}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-3 mobile-col">
                    <div className="card stat-card text-center align-items-center">
                      <h6 className="subtitle">
                        Employee
                        <br /> Retention
                      </h6>
                      <CountUp
                        className="employee-retention counting-text"
                        start={0}
                        end={93}
                        duration={2.75}
                        useEasing={true}
                        formattingFn={(value) => value.toString()}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 mobile-col">
                    <div className="card stat-card text-center align-items-center">
                      <h6 className="subtitle">
                        Client Audit <br />
                        Success
                      </h6>
                      <CountUp
                        className="client-audit counting-text"
                        start={0}
                        end={100}
                        duration={2.75}
                        useEasing={true}
                        formattingFn={(value) => value.toString()}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 mobile-col">
                    <div className="card stat-card text-center align-items-center">
                      <h6 className="subtitle">Employee Trainings Conducted</h6>
                      <CountUp
                        className="employee-training counting-text"
                        start={0}
                        end={1000}
                        duration={2.75}
                        useEasing={true}
                        formattingFn={(value) => value.toString()}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="headings">
                  <h6 className="subtitle text-white">
                    Our Performance Metrics
                  </h6>
                  <h2 className="main-heading text-white">
                    Stats Speak Of Our Success
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients py-5">
        <div className="container">
          <div className="row g-5" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
            <div className="col-md-2 col-4">
              <img
                src={Client1}
                alt="client-1"
                className="img-fluid client-img client-1"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client2}
                alt="client-2"
                className="img-fluid client-img client-2"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client3}
                alt="client-3"
                className="img-fluid client-img client-3"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client4}
                alt="client-4"
                className="img-fluid client-img client-4"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client5}
                alt="client-5"
                className="img-fluid client-img client-5"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client6}
                alt="client-6"
                className="img-fluid client-img client-6"
              />
            </div>
          </div>
          <div className="row mt-2 justify-content-center g-5" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
            <div className="col-md-2 col-4">
              <img
                src={Client7}
                alt="client-7"
                className="img-fluid client-img client-7"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client8}
                alt="client-8"
                className="img-fluid client-img client-8"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client9}
                alt="client-9"
                className="img-fluid client-img client-9"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client10}
                alt="client-10"
                className="img-fluid client-img client-10"
              />
            </div>
            <div className="col-md-2 col-4">
              <img
                src={Client14}
                alt="client-11"
                className="img-fluid client-img client-11"
              />
            </div>
          </div>
          <div className="row g-5 justify-content-center mt-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
            <div className="col-md-1 col-3">
              <img
                src={Client12}
                alt="client-13"
                className="img-fluid client-img client-13"
              />
            </div>
            <div className="col-md-1 col-3">
              <img
                src={Client11}
                alt="client-14"
                className="img-fluid client-img client-14"
              />
            </div>
            <div className="col-md-1 col-3">
              <img
                src={Client13}
                alt="client-14"
                className="img-fluid client-img client-14"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
