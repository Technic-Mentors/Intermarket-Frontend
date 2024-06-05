import { React, useEffect } from "react";
import Slider from "react-slick";
import Director from "../Assets/Images/director-img.avif";
import femaleDirector from "../Assets/Images/alia-lodhi.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,

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
      <section
        className="directors pt-5"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="container">
          <div className="headings1 text-center mb-5">
            <h6
              className="subtitle"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              Our Team
            </h6>
            <h2
              className="main-heading"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              Meet Our Board Of Directors
            </h2>
          </div>
          <Slider
            {...settings}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1200"
          >
            <div>
              <div className="row g-5">
                <div className="col-md-12 text-center">
                  <div className="team-card-img mb-3 ms-">
                    <img
                      src={Director}
                      alt="lahore-chamber-of-commerce"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="card team-card">
                    <h3
                      className="fw-bold"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      Assad Ali Lodhi
                    </h3>
                    <p className="mt-3">
                      Mr. Lodhi is a Director at Inter Market Knit and is
                      regarded as a mentor to many people working in various
                      fields in Pakistan. Working and learning from him is a
                      privilege as he is always ready to help, guide and advise.
                      He has counselled and led many who have achieved success
                      in their respective industries. He is considered as a
                      promoter of sustainability and believes that there is no
                      task that is worth any work without sustainability. <br />
                      <br />A graduate in Mechanical Engineering from one of the
                      leading universities in the country, University of
                      Engineering and Technology (UET), he has hands-on
                      experience in setting up an entire business. He is well
                      versed in Project Management, Risk Analysis, Supply Chain
                      Performance, Lean Manufacturing Systems, Strategy
                      Deployment and possesses very strong leadership and
                      people’s management skills. Being instrumental in bringing
                      creativity into life, Mr. Lodhi is a leader in change
                      management who has successfully cultivated the paradigm
                      shift.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row g-5">
                <div className="col-md-12 text-center">
                  <div className="team-card-img mb-3 ms-">
                    <img
                      src={Director}
                      alt="lahore-chamber-of-commerce"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="card team-card">
                    <h3
                      className="fw-bold"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      Ahmed Khan
                    </h3>
                    <p className="mt-3">
                      Mr. Khan is a seasoned professional with an international
                      portfolio of experiences. He is a Director at Inter Market
                      Knit and is involved in strategy formulation and
                      implementation at the organization. Mr. Khan has worked
                      hand-in-hand with the board to implement a full Enterprise
                      Resource Planning (ERP) System (Payroll, Finance,
                      Inventory, HR & Production modules) at the organization
                      facilitated by various certifications including WRAP,
                      SA8000 and ISO9001. <br /> <br />
                      Mr. Khan did his M.Phil. from the University of Cambridge
                      and has worked at top management positions of large
                      enterprises. He is the founder of Cheetay Logistics (Pvt.)
                      Ltd. and also a faculty member at the Lahore University of
                      Management Sciences (LUMS).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row g-5">
                <div className="col-md-12 text-center">
                  <div className="team-card-img mb-3 ms-">
                    <img
                      src={femaleDirector}
                      alt="lahore-chamber-of-commerce"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="card team-card">
                    <h3
                      className="fw-bold"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      Alia Lodhi
                    </h3>
                    <p className="mt-3">
                      Ms. Lodhi is a distinguished professional with over 2
                      decades of extensive experience in textile industry.
                      Currently she serves on the Board of Inter Market along
                      with being the company secretary. In the business
                      operations she is heading the HR and Compliance
                      department.<br /><br /> She has an Engineering Degree and holds an MBA
                      from LUMS. She is a certified Board Member having
                      completed the BOD training program from LUMS. Ms Lodhi has
                      successfully governed and lead corporate negotiations at
                      business executive level managing complex transactions of
                      share transfers, acquisition, and loan settlement areas.
                      She handled large projects in her career including the
                      setting up of the first ever offshore call centre in
                      Pakistan. In the realms of HR and compliance, Ms. Lodhi
                      has trained and developed many professionals who are
                      serving successfully in many local and international
                      organizations. She is a pioneer in developing policies and
                      implementing HR standards in local textile organizations.
                      She is a certified Compliance Professional in numerous
                      areas of compliance and sustainability from CSI Germany.<br /><br />
                      In her leadership role in Inter Market several
                      international businesses were able to develop trust in the
                      locally managed companies in Pakistan. Ms. Lodhi is
                      revered as a role model for women in the SME sector where
                      she has contributed significantly for more than two
                      decades. She actively advocates for the integration and
                      advancement of women in the workplace, establishing
                      herself as a thought leader. Her efforts have established
                      her as a role model and thought leader in empowering women
                      within the textile industry and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Team;
