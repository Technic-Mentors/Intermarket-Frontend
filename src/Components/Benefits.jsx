import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import benefitsBg from "../Assets/Images/company-bg.avif"

function Benefits() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="all-header-bg" style={{backgroundImage: `url(${benefitsBg})`}}>
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">
                  Why Are We The Best Socks Manufacturer In Pakistan?
                </h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-intro py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="headings1 mb-3 text-center">
                <h6
                  className="subtitle"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  Exploring Key Advantages for Success
                </h6>
                <h2
                  className="main-heading"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  Unveiling the Golden Benefits: Discover Nine Essential
                  Advantages
                </h2>
              </div>
              <p
                className="mt-5 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1200"
              >
                Dive into the meticulous craftsmanship of our products, curated
                by top-tier textile artisans. Renowned as the premier socks
                manufacturer, we uphold uncompromising standards of quality,
                comfort, and style, ensuring an unmatched experience with every
                pair. With a legacy of excellence ingrained in our ethos, we
                continually innovate to exceed expectations, delivering
                unparalleled satisfaction to our clientele. Trust in our
                commitment to redefine industry standards as we craft each pair
                with precision and care. Elevate your wardrobe with our premium
                collections, where every stitch reflects our dedication to
                excellence. Experience the perfect blend of luxury, durability,
                and innovation with every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-tty benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>24/7 Communication</h5>
                    <h5 className="float-end number text-muted">1</h5>
                  </div>
                  <p>
                    Our Business Development team remains in communication with
                    you till the order is confirmed. Our dedicated team of
                    Merchandizers take the process forward and stay in
                    communication with you till the delivery of your order. We
                    are always there for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-brands fa-yarn benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Yarn As Per Requirements</h5>
                    <h5 className="float-end number text-muted">2</h5>
                  </div>
                  <p>
                    We are aware of the diverse range of modern yarns present in
                    the market and we only make use of yarns which are required
                    by our customers. We play our part as responsible citizens
                    by making use of Better Cotton Initiative (BCI) Yarn and we
                    make sure that our yarn suppliers are BCI certified. We
                    constantly do our research, consult with yarn developers all
                    over the world, and have established firm partnerships with
                    yarn leaders
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-business-time benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Ethical Business Check</h5>
                    <h5 className="float-end number text-muted">3</h5>
                  </div>
                  <p>
                    We have provided anti-bribery trainings to our employees and
                    have conveyed our policy to our stake holders. Our policy
                    applies to all our stake holders which consist of our
                    Employees, Business Partners, Suppliers, Service Providers,
                    Third Parties, and Consultants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-book benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Researc And Development</h5>
                    <h5 className="float-end number text-muted">4</h5>
                  </div>
                  <p>
                    Our highly skilled R&D Team has developed a range of Green
                    Products with each component of the sock being environmental
                    friendly. Our team has developed socks with materials like
                    Nomex® (heat and fire resistant), anti-cut socks from
                    Kevlar®, and environment friendly socks from Castor Oil
                    yarn.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-star benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Maximum Value Addition</h5>
                    <h5 className="float-end number">5</h5>
                  </div>
                  <p>
                    As practitioners of Lean Manufacturing Systems, we have
                    minimized our Muda (wasteful activities) to increase our
                    efficiency and produce socks that offer the best value for
                    money.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-socks benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Sustainable Socks</h5>
                    <h5 className="float-end number text-muted">6</h5>
                  </div>
                  <p>
                    We guarantee that your socks are made with care to the
                    society and environment. This way, you can wear your socks
                    with contentment and pride.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-circle-exclamation benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Attention To Details</h5>
                    <h5 className="float-end number text-muted">7</h5>
                  </div>
                  <p>
                    Socks need to be made out of precision. We pay attention to
                    the minute details of our socks being produced so that even
                    a basic stitch is produced in complete harmony.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-face-grin-stars benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Costant Quality Check</h5>
                    <h5 className="float-end number text-muted">8</h5>
                  </div>
                  <p>
                    Our Quality Assurance team is dedicated to excellence and
                    has a strict Quality Control. The team inspects the socks at
                    all production stages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">
                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-swatchbook benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Customized Design Solutions</h5>
                    <h5 className="float-end number text-muted">9</h5>
                  </div>
                  <p>
                    Tailored to your specifications, our design experts work
                    closely with you to create unique sock designs that reflect
                    your brand identity and vision, ensuring a standout presence
                    in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 d-flex justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card benefits-cards">

                <div className="card-body">
                <div className="card-content">
                  <i class="fa-solid fa-truck benefit-icon mb-2"></i>
                </div>
                  <div className="ben-headings align-items-center d-flex justify-content-between">
                    <h5>Timely Delivery Guarantee</h5>
                    <h5 className="float-end number text-muted">10</h5>
                  </div>
                  <p>
                    With a commitment to punctuality, we guarantee timely
                    delivery of your orders, ensuring that your products reach
                    you exactly when you need them, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
