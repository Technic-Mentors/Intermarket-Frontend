import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <div>
      <section className="home-slider">
        <Slider {...settings}>
          <div>
            <div className="slider">
              <div className="first-overlay ">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-12 py-6 text-center mobile-col">
                    <h2 className="text-outline">Since 1998</h2>
                    <h1 className="slider-main-heading">Welcome To Inter Market <br/> Socks Manufacturers</h1>
                    <p className="text-white">Buy It, Wear It, Love It</p>
                    <Link to='/socks-manufacturing'><button className="main-button">Know More</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="slider-2">
              <div className="first-overlay">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-12 py-6 text-center mobile-col">
                    <h2 className="text-outline">Step Into Style</h2>
                    <h1 className="slider-main-heading">Elevating Comfort Stitch by Stitch, Seamlessly</h1>
                    <p className="text-white px-2">Experience the perfect fusion of comfort and style in every pair.</p>
                    <Link to='/contact'><button className="main-button">Contact Us </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="slider-3">
              <div className="slider-overlay">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-12 py-6 text-center mobile-col mob-slider">
                    <h2 className="text-outline mobile-outline">Yarn & Textile Sourcing</h2>
                    <h1 className="slider-main-heading px-3">Your Trustworthy Textile Sourcing Partner</h1>
                    <p className="text-white">Let's step into enhance your lifestyle like royalty</p>
                    <Link to='/textile-sourcing'><button className="main-button">Strategize Your Sourcing </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </section>
    </div>
  );
}

export default Header;
