import React from "react";
import Textilesourcingimg from '../Assets/Images/textile-sourcing.avif'
import textileSourcingHead from '../Assets/Images/textile-sourcing-head.avif'
import Quality from '../Assets/Images/quality-and-inspection.avif'

function Textilesourcing() {
  return (
    <div>
      
      <section className="all-header-bg" style={{backgroundImage: `url(${textileSourcingHead})`, backgroundPosition: 'center center'}}>
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">
                Your Trustworthy Textile Sourcing Partner
                </h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2696</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sourcing py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="headings mb-4">
                <h6 className="subtitle">Meet The</h6>
                <h5 className="main-heading">
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
              <div className="row d-flex">
                <div className="col-md-6">
                  <ul style={{ listStyle: "none", padding: "0", margin: "0", lineHeight: '2.5rem' }}>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Evaluation and selection of suppliers</li>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Material and products</li>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Competitive Price</li>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Quality Assurance</li>
                    
                  </ul>
                </div>
                <div className="col-md-6">
                <ul style={{ listStyle: "none", padding: "0", margin: "0", lineHeight: '2.5rem' }}>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;	Inline inspection </li>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Final inspection</li>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Compliance</li>
                    <li><i
                        className="fas fa-check"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      &nbsp;Production And Logistics</li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Textilesourcingimg} alt="textile-sourcing-company-in-pakistan" className="img-fluid b-shadow-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="values py-4" style={{backgroundColor: '#f8f8f8'}}>
        <div className="container">
         
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="card value-card bg-transparent ">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box bg-white d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-medal value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Quality Checks</h5>
                  <p>
                  With our more than 2 decants of experience with high quality yarns and related textile items our team conducts rigorous quality checks to ensure they meet the highest standards of excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card value-card bg-transparent">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box bg-white d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-user-tag value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Understanding Customer Requirements</h5>
                  <p>
                  With our research based need assessments we provide in-depth strategic insight to our customers this assures customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card value-card bg-transparent">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box bg-white d-flex align-items-center justify-content-center">
                    <i class="fa-regular fa-lightbulb value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Innovation</h5>
                  <p>We continuously invest in research and development to stay at the forefront of industry trends and technological advancements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card value-card bg-transparent">
                <div className="whole-box d-flex justify-content-center">
                  <div className="my-values-icon-box bg-white d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-globe value-icon"></i>
                  </div>
                </div>
                <br />
                <div className="value-content">
                  <h5>Global Reach</h5>
                  <p>With a robust distribution network, we cater to clients worldwide, ensuring timely delivery and unparalleled service.</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <section className="sourcing-bottom-sec py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5">
              <img src={Quality} alt="quality-and-inspection" className="img-fluid b-shadow-img" />
            </div>
            <div className="col-md-7">
              <div className="supplier-section">
              <h5 className=" mb-3">Supplier Selection</h5>
              <p>We know, judge and contract with perfect suppliers to maximize overall value to the purchaser.</p>
              </div>
              <div className="Inspection">
              <h5 className=" mb-3">Quality Control & Inspection</h5>
              <p>We have professionals team with a strong textile background to provide our clients with quality & inspection services.</p>
              </div>
              <div className="Inspection">
              <h5 className=" mb-3">Production & Logistics</h5>
              <p>We have professionals team with a strong textile background to provide our clients with quality & inspection services.</p>
              </div><br />
              <p className="fw-bold">For more details:</p> 
             <p> <strong>Email:</strong>&nbsp;atif.naseer@imlpk.com<br />
               <strong>Whatsapp:</strong>&nbsp;+92 344 444 2696</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Textilesourcing;
