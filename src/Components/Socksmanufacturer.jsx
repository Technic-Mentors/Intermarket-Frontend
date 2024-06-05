import { React, useEffect } from "react";
// import sportsSocks from "../Assets/Images/sports-socks.avif";
// import workWear from "../Assets/Images/work-wear-socks.avif";
// import footballSocks from "../Assets/Images/football-socks.avif";
// import casualSocks from "../Assets/Images/casual-socks.avif";
// import dressSocks from "../Assets/Images/dress-socks.avif";
// import Leggings from "../Assets/Images/leggings.avif";
// import thermalSocks from "../Assets/Images/thermal-socks.avif";
// import diabeticsSocks from "../Assets/Images/diabetics-socks.avif";
// import gradualCompression from "../Assets/Images/gradual-compression-socks.avif";
import socksManufacturer from "../Assets/Images/socks-manufacturer-header.avif";

import AOS from "aos";
import "aos/dist/aos.css";
import Typedetails from "./Typedetails";

function Socksmanufacturer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className="all-header-bg"
        style={{
          backgroundImage: `url(${socksManufacturer})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">
                  Leading Socks Manufacturing Company In Pakistan
                </h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-5 pb-1">
        <div className="headings1 text-center mb-5">
          <h6
            className="subtitle"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1200"
          >
            Catering to Every Need
          </h6>
          <h2
            className="main-heading"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1200"
          >
            Diverse Sock Manufacturing Solutions
          </h2>
        </div>
        <p
          className="mt-4 mb-4 text-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          Discover the breadth of possibilities in our sock manufacturing
          solutions. From athletic performance socks to elegant dress socks, we
          pride ourselves on offering a diverse range of styles, materials, and
          designs to meet every need and preference. With a commitment to
          quality and innovation, we ensure that each pair of socks is crafted
          with precision and care, delivering comfort, durability, and style
          with every step.
        </p>
      </div>

      <Typedetails />

      {/* <section className="what-we-offer py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 socks-mobile socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={sportsSocks} alt="sports-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Sports Socks</h4>
                                <p>Engineered for performance and durability, our sports socks provide unparalleled comfort and support during every workout, ensuring you reach peak performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={workWear} alt="sports-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Work Wear Socks</h4>
                                <p>Designed for long-lasting comfort and durability, our work wear socks ensure your feet stay dry and comfortable throughout the day, keeping you focused on the task at hand.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={footballSocks} alt="sports-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Football Socks</h4>
                                <p>Tailored for the pitch, our football socks offer a blend of cushioning and breathability, keeping you focused on the game with superior comfort and performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={casualSocks} alt="sports-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Casual Socks</h4>
                                <p>Perfect for everyday wear, our casual socks combine style and comfort to keep you feeling relaxed and fashionable all day long, wherever your day takes you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={dressSocks} alt="sports-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Dress Socks</h4>
                                <p> Elevate your formal attire with our dress socks, crafted with premium materials for a sophisticated look and luxurious feel, adding the perfect finishing touch to your ensemble.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={Leggings} alt="sports-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Legging</h4>
                                <p>Embrace warmth and flexibility with our leggings, designed to provide the perfect balance of comfort and style for any occasion, ensuring you stay comfortable and chic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={thermalSocks} alt="thermal-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Thermal Socks</h4>
                                <p>Beat the cold with our thermal socks, featuring advanced insulation to keep your feet warm and cozy in the harshest conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={diabeticsSocks} alt="diabetics-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Diabetics Socks</h4>
                                <p> Engineered with diabetic-friendly features, our socks offer gentle support and seamless construction for ultimate comfort and protection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 socks-mobile">
                    <div className="card socks-card">
                        <div className="card-content">
                            
                                <img src={gradualCompression} alt="gradual-compression-socks" className="img-fluid" />
                            
                            <div className="card-body">
                                <h4 className="middle-heading">Gradual Compression Socks</h4>
                                <p>Enhance circulation and reduce fatigue with our gradual compression socks, crafted to provide targeted support and comfort for all-day wear.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            
        </div>
      </section> */}
    </div>
  );
}

export default Socksmanufacturer;
