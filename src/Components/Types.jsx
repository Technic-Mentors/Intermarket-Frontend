import React from "react";
import sportsSocks from "../Assets/Images/sports-socks.avif";
import workWear from "../Assets/Images/work-wear-socks.avif";
import footballSocks from "../Assets/Images/football-socks.avif";
import casualSocks from "../Assets/Images/casual-socks.avif";
import dressSocks from "../Assets/Images/dress-socks.avif";
import Leggings from "../Assets/Images/leggings.avif";
import { Link } from "react-router-dom";

function Types() {
  return (
    <div>
      <section className="what-we-offer py-5">
        <div className="container">
          <div className="headings1 text-center mb-5">
            <h6 className="subtitle">Catering To Every Need</h6>
            <h2 className="main-heading">
              Diverse Sock Manufacturing Solutions
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4 socks-mobile">
              <div className="card socks-card">
                <div className="card-content">
                  <img
                    src={sportsSocks}
                    alt="sports-socks"
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <h4 className="middle-heading">Sports Socks</h4>
                    <p>
                      Engineered for performance and durability, our sports
                      socks provide unparalleled comfort and support during
                      every workout, ensuring you reach peak performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 socks-mobile"socks-mobile>
              <div className="card socks-card">
                <div className="card-content">
                  
                    <img
                      src={workWear}
                      alt="sports-socks"
                      className="img-fluid"
                    />
                  
                  <div className="card-body">
                    <h4 className="middle-heading">Work Wear Socks</h4>
                    <p>
                      Designed for long-lasting comfort and durability, our work
                      wear socks ensure your feet stay dry and comfortable
                      throughout the day, keeping you focused on the task at
                      hand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 socks-mobile"socks-mobile>
              <div className="card socks-card">
                <div className="card-content">
                  
                    <img
                      src={footballSocks}
                      alt="sports-socks"
                      className="img-fluid"
                    />
                  
                  <div className="card-body">
                    <h4 className="middle-heading">Football Socks</h4>
                    <p>
                      Tailored for the pitch, our football socks offer a blend
                      of cushioning and breathability, keeping you focused on
                      the game with superior comfort and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 socks-mobile"socks-mobile>
              <div className="card socks-card">
                <div className="card-content">
                  
                    <img
                      src={casualSocks}
                      alt="sports-socks"
                      className="img-fluid"
                    />
                  
                  <div className="card-body">
                    <h4 className="middle-heading">Casual Socks</h4>
                    <p>
                      Perfect for everyday wear, our casual socks combine style
                      and comfort to keep you feeling relaxed and fashionable
                      all day long, wherever your day takes you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 socks-mobile"socks-mobile>
              <div className="card socks-card">
                <div className="card-content">
                  
                    <img
                      src={dressSocks}
                      alt="sports-socks"
                      className="img-fluid"
                    />
                 
                  <div className="card-body">
                    <h4 className="middle-heading">Dress Socks</h4>
                    <p>
                      {" "}
                      Elevate your formal attire with our dress socks, crafted
                      with premium materials for a sophisticated look and
                      luxurious feel, adding the perfect finishing touch to your
                      ensemble.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 socks-mobile"socks-mobile>
              <div className="card socks-card">
                <div className="card-content">
                  
                    <img
                      src={Leggings}
                      alt="sports-socks"
                      className="img-fluid"
                    />
                  
                  <div className="card-body">
                    <h4 className="middle-heading">Legging</h4>
                    <p>
                      Embrace warmth and flexibility with our leggings, designed
                      to provide the perfect balance of comfort and style for
                      any occasion, ensuring you stay comfortable and chic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="text-center mt-3">
            <Link to="/socks-manufacturing">
              <button className="main-button">View All</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Types;
