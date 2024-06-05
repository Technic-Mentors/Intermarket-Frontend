import { React, useEffect, useState } from "react";
import Promiseimg from "../Assets/Images/promise-img.avif";
import { Link } from "react-router-dom";
import clientCentric from "../Assets/Images/client-centric-approach.avif";
import locationMap from "../Assets/Images/map.avif";
import Slider from "react-slick";
import LCCI from '../Assets/Images/Membership/LCCI-logo.avif'
import PHMA from '../Assets/Images/Membership/PHMA-logo.avif'
import BCI from '../Assets/Images/Membership/BCI-logo.avif'
import APTMA from '../Assets/Images/Membership/APTMA-logo.avif'
import Membership from '../Assets/Images/membership-img.avif'
// import Team from "./Team";
import ISO14001 from '../Assets/Images/Certificates/ISO-14001-2015.png'
import ISO45001 from '../Assets/Images/Certificates/ISO-45001-2018.png'
import ISO9001 from '../Assets/Images/Certificates/ISO-9001-2015.png'
import SA8000 from '../Assets/Images/Certificates/SA-8000.png'
import Sedex from '../Assets/Images/Certificates/Sedex.png'
import Wrapimg from '../Assets/Images/Certificates/Wrap.png'
import galleryBg from "../Assets/Images/sports-socks.avif"
import galleryBg1 from "../Assets/Images/gallery-bg1.avif"
import AOS from "aos";
import "aos/dist/aos.css";
import BOD from "./BOD";
import Companynew from "./Companynew";


function About() {

  const [mediaImage, setMediaImage] = useState("")

  useEffect(() => {
    AOS.init();
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMediaImage(galleryBg)
      } else {
        setMediaImage(galleryBg1)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return (() => {
      window.removeEventListener("resize", handleResize)
    })
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="all-header-bg" style={{ backgroundImage: `url(${mediaImage})`, backgroundPosition: 'left center' }}>
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">
                  Explore Who We Are
                </h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="headings1 text-center mb-5">
                <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Who We Are</h6>
                <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Get To Know About Inter Market</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                We are one of the finest socks manufacturers in Pakistan
                producing outstanding quality socks since 1998. With our
                flexible production capacity and state-of-the-art machinery, we
                offer an extensive range of socks with hundreds of custom
                designs for all age groups. Our professional excellence, our
                consistency and reliability, and our core values set us apart
                from our competitors. Complete customer satisfaction is our
                driving force. Inter Market offers you a seamless solution for
                your socks supply.
                <br />
                <br /> With a well-established research & innovation center,
                driven by a team of technical experts, we serve Inter Market’s
                customers’ needs with utmost joy and precision. We share a
                passion with our clients for leading change and creating an
                ever-more comfortable experience. <br />
                <br />
                Our fearless leadership works on development that directly
                address global issues of sustainability. Inter Market Knit is
                aware of the challenges the planet faces today and we work
                towards being a socially responsible and environment-friendly
                company taking care of all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Companynew />

      <section className="promise py-5" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <div className="headings mb-5">
                <h6 className="subtitle" >Promises Made, Values Delivered</h6>
                <h2 className="main-heading" >
                  What We Promise - Our Commitment
                </h2>
              </div>
              <p >
                Our promise is to Develop outstanding socks and use the best
                quality yarns that provide the best value for money. We
                Guarantee peace of mind by ensuring consistent socks material .{" "}
                <br />
                <br />
                We promise to Constantly innovate to bring comfort to every
                foot. We will Collaborate with our partners to obtain long-term,
                sustainable growth, while remaining open to new ventures. We
                promise to Adhere to all applicable laws and ethical standards.{" "}
                <br />
                <br />
                We Use the best socks material/Yarns like cotton, polyester,
                nylon, spandex, wool and bamboo. Constantly focus on minimizing
                our environmental footprint.
              </p>
              <Link to="/contact">
                <button className="main-button mb-3">Contact Us</button>
              </Link>
            </div>
            <div className="col-md-5" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <img src={Promiseimg} alt="" className="img-fluid b-shadow-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="certifications py-4">
        <div className="container">
          <div className="headings1 mb-5">
            <h2 className="main-heading text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Our Certifications</h2>
          </div>
          <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
            <div className="col-md-2 col-4 mb-3">
              <img src={ISO14001} alt="iso-14001" className="img-fluid certificate" />
            </div>
            <div className="col-md-2 col-4 mb-3">
              <img src={ISO45001} alt="iso-45001" className="img-fluid certificate" />
            </div>
            <div className="col-md-2 col-4 mb-3">
              <img src={ISO9001} alt="iso-9001" className="img-fluid certificate" />
            </div>
            <div className="col-md-2 col-4 mb-3">
              <img src={SA8000} alt="sa-8000" className="img-fluid certificate" />
            </div>
            <div className="col-md-2 col-4 mb-3">
              <img src={Wrapimg} alt="wrap" className="img-fluid certificate" />
            </div>
            <div className="col-md-2 col-4 mb-3">
              <img src={Sedex} alt="sedex" className="img-fluid certificate" />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <hr style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>

      <section className="promise py-5" >
        <div className="container">
          <div className="row g-5 d-flex align-items-center">
            <div className="col-md-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={clientCentric} alt="" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <div className="headings mb-5">
                <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Customer-Centric Excellence</h6>
                <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  Tailored Solutions: Fulfilling Your Desires
                </h2>
              </div>
              <h5 className="" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Market Analysis:</h5>

              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                {" "}
                We conducted more than 34 independent Market Analysis to
                ascertain end consumer requirements. Developed independent
                product lines to match results of consumer analysis. Specialized
                products aimed at providing targeted comfort to customers.{" "}
              </p>

              <h5 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Supply Chain</h5>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Developed unconventional supply chains to meet customer needs.
                Using BCI cotton, nylon from plastic recovered from the oceans
                and numerous sustainability efforts.
              </p>

              <h5 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Costs</h5>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                We worked hard to meet tough pricing demands of customers round the world.
              </p>

              <Link to="/contact" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                <button className="main-button">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BOD />

      <section className="values py-5">
        <div className="container">
          <div className="headings1 text-center mb-5">
            <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Our Core Values</h6>
            <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Our Values, Our Legacy</h2>
          </div>
          <div className="row" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
            <div className="col-md-4 mb-3 text-center">
              <div className="card value-card">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box d-flex align-items-center justify-content-center">
                    <i class="fa-regular fa-lightbulb value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Innovation</h5>
                  <p>
                    Dream, Create and Inspire. Discover, Learn, Change and the
                    rest will follow
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 text-center">
              <div className="card value-card">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-user-tag value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Customer Luxury</h5>
                  <p>
                    Our Customers are our Elite. Meeting fine detailed
                    requirements from them in a short time excite us. Intense
                    Customer focus for learning and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 text-center">
              <div className="card value-card">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box d-flex align-items-center justify-content-center">
                    <i class="fa-regular fa-handshake value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Dependable Integrity</h5>
                  <p>Being responsible, honest and transparent is our style.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
            <div className="col-md-4 mb-3 text-center">
              <div className="card value-card">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-medal value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Excellence</h5>
                  <p>
                    We will practice humility in acknowledging a problem. We
                    will seek perfection through incremental and step
                    improvement. We will elevate scientific and systematic
                    thinking. We will focus on processes and concentrate on the
                    flow & pull value.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card value-card">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-hand-holding-heart value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Care And Respect</h5>
                  <p>
                    We hold in highest esteem customers and people. We are
                    acutely aware of the responsibility we have toward the
                    environment. We listen to understand and follow through on
                    our commitments. We will involve everyone in achieving
                    sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map py-4" style={{ backgroundColor: "#f8f8f8" }} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <img
                src={locationMap}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="membership py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="headings mb-5">
                <h6 className="subtitle">Our Membership</h6>
                <h2 className="main-heading">Connected For Excellence</h2>
              </div>
              <p className="mb-3">
                Proud members of esteemed organizations, our affiliations
                reflect our dedication to industry standards and continuous
                improvement. Through these partnerships, we ensure the highest
                quality products and services for our customers.
              </p>

              <Slider {...settings}>
                <div>
                  <img src={LCCI} alt="lahore-chamber-of-commerce" className="img-fluid member" />
                </div>
                <div>
                  <img src={PHMA} alt="pakistan-hosiery-manufacturers-association" className="img-fluid member" />
                </div>
                <div>
                  <img src={BCI} alt="better-cotton-initiative" className="img-fluid member" />
                </div>
                <div>
                  <img src={APTMA} alt="all-pakistan-textile-mills-association" className="img-fluid member" />
                </div>
              </Slider>

            </div>

            <div className="col-md-5">
              <img src={Membership} alt="company-membership" className="img-fluid b-shadow-img" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
