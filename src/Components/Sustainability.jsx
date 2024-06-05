import {React, useEffect} from "react";
import SustainabilityImg from '../Assets/Images/sustainability.avif'
import AOS from "aos";
import "aos/dist/aos.css";
import Sustainabilitytabs from "./Sustainabilitytabs";


function Sustainability() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="all-header-bg" style={{backgroundImage: `url(${SustainabilityImg})`, backgroundPosition: 'center center'}}>
        <div className="inner-page-overlay py-8">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">
                Sustainable Socks: Walking Towards A Greener Future
                </h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2678</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="sustain py-5" style={{backgroundColor: '#f8f8f8'}}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="headings1 mb-3 text-center">
                <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  Initiatives for a Sustainable Tomorrow
                </h6>
                <h2 className="main-headings" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  Embracing Eco-Conscious Practices
                </h2>
              </div>
              <p className="mt-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Inter Market Knit is committed to preserving the environment for
                future generations. Protecting today and tomorrow by our gentle
                approach to nature, we make sure that our natural resources are
                used responsibly and efficiently. We have set definite,
                quantifiable goals for our business and we work persistently
                towards meeting them. We have created a clear strategy to
                inculcate healthy business practices into our corporate culture.
                <br /><br />
                We have reduced our carbon emissions and water footprint,
                decreased our energy utilization, and lowered our wastages. Our
                sustainable practices have helped reduce our costs, while
                increasing our productivity. With sincere contribution of all
                our employees, we have significantly reduced the amount of waste
                that is generated from items such as plastic bags, cardboard
                boxes, and computer paper. We believe in the efficient use of
                natural resources and we collect recyclable items and send them
                back to our suppliers for recycling. We use both sides of a
                paper for printing for internal usage. <br /><br />When we add a new
                machinery or replace an old one, we communicate our need to our
                vendors to provide us with the most energy-efficient machinery.
                We understand that our dedication to sustainability is a
                continuous process and we encourage our stakeholders to be
                responsible contributors to the environment as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="collab">
        <div className="collab-overlay py-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 text-light" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <h5 className="fw-bold">Collaboration With GIZ</h5><br />
              <p style={{textAlign: 'justify'}}>Our commitment towards sustainability is explicit in the Sustainable Pakistan Project by German Federal Ministry for Economic Cooperation & Development. We are proud to be enlisted amongst the top 5 companies of Pakistan selected by Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH in the dialogue for sustainability and compliance. </p>
            </div>
            <div className="col-md-4 text-light" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1200">
              <h5 className="fw-bold">Innovation With Sustainability</h5><br />
              <p style={{textAlign: 'justify'}}>At Inter Market Knit, we push the boundaries of our potential in unprecedented ways. We’re developing products in a manner that we achieve minimal environmental impact. </p>
            </div>
            <div className="col-md-4 text-light" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <h5 className="fw-bold">Measurement Tools</h5><br />
              <p style={{textAlign: 'justify'}}>We evaluate our sustainability performance through The Higg Index and BEPI Platform. These help us make meaningful improvements for protecting the well-being of our workers, our communities, and the environment. </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* <section className="committment py-5">
        <div className="container">
          <div className="headings1 mb-5 text-center">
            <h2 className="main-heading text-center">Committment To Sustainability</h2>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              <p className="text-center">At INTER MARKET KNIT (PVT) LTD, sustainability isn't just a buzzword – it's a core value that guides everything we do.  We invite you to join us in making a positive impact on the planet by choosing products that are not only of the highest quality but also environmentally responsible.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="headings mb-4">
                <h3>Eco-Friendly Materials</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Sustainabilitytabs />
      
      <section className="product-range">
        <div className="container">
          <div className="headings1 text-center mb-5">
            <h2 className="main-heaidng">Our Product Range</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 range-col">
              <h5 className="fw-bold">Versatility</h5>
              <p>Our casual crew socks epitomize versatility, seamlessly complementing a range of casual outfits. From jeans to shorts, skirts to dresses, these socks effortlessly enhance your ensemble, offering a relaxed and laid-back aesthetic that suits any occasion.</p>
            </div>
            <div className="col-md-4 range-col">
              <h5 className="fw-bold">Style Statement</h5>
              <p>Elevate your everyday attire with our collection of casual socks boasting unique patterns, vibrant colors, and captivating designs. Whether you prefer bold prints or subtle motifs, these socks serve as a canvas for expressing your individuality and adding a distinctive touch to your ensemble.</p>
            </div>
            <div className="col-md-4 range-col">
              <h5 className="fw-bold">Fashion Forward</h5>
              <p>Embrace the trend of mismatched socks and unconventional pairings, empowering you to flaunt your non-conformist attitude and infuse your wardrobe with a playful edge. Embracing unexpected combinations has become a hallmark of contemporary fashion, allowing you to showcase your creativity and personality with confidence.</p>
            </div>
            <div className="col-md-4 range-col">
              <h5 className="fw-bold">Superior Fit</h5>
              <p>Crafted with meticulous attention to detail, our crew socks offer a superior fit that exudes elegance and refinement. Designed to accentuate your silhouette, these socks effortlessly elevate your style, ensuring a chic and sophisticated look with every wear.</p>
            </div>
            <div className="col-md-4 range-col">
              <h5 className="fw-bold">Comfortable Daily Wear</h5>
              <p>Experience unparalleled comfort with our lightweight crew socks, expertly crafted from premium ring-spun cotton. Engineered to minimize abrasion and prevent blisters, these socks provide all-day comfort, allowing you to navigate your daily activities with ease and confidence.</p>
            </div>
            <div className="col-md-4 range-col">
              <h5 className="fw-bold">Anti-Microbial Technology</h5>
              <p>Our socks feature advanced anti-microbial technology, meticulously engineered to ensure long-lasting freshness and hygiene. With the assurance of odor control and bacteria resistance, you can confidently wear our socks day in and day out, knowing that you're prioritizing both comfort and cleanliness.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Sustainability;
