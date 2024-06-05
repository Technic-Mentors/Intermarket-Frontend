import React, { useState } from "react";
import ecoFriendlyMaterials from "../Assets/Images/eco-friendly-materials.avif";
import waterlessWashing from "../Assets/Images/waterless-washing-techniques.avif";

function Sustainabilitytabs() {
  const [activeTab, setActiveTab] = useState("eco-friendly-materials");

  const handleTabChange = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div>
      <section
        className="pills-tab-section px-2 py-5 "
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container-fluid pt-3 pb-2">
          <div className=" text-center headings1 mb-5">
            <h2 className="main-heading">Committment To Sustainability</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 mb-4">
              <p>
                At INTER MARKET KNIT (PVT) LTD, sustainability isn't just a
                buzzword – it's a core value that guides everything we do. We
                invite you to join us in making a positive impact on the planet
                by choosing products that are not only of the highest quality
                but also environmentally responsible
              </p>
            </div>
            <div className="col-md-3 jutify-content-center align-items-center">
              <div className="row">
                <ul
                  className="nav nav-tabs industries nav-justified"
                  id="ex1"
                  role="tablist"
                >
                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab  mb-2 ${
                          activeTab === "eco-friendly-materials" ? "active" : ""
                        }`}
                        id="eco-friendly-materials-tab"
                        data-mdb-toggle="pill"
                        href="#eco-friendly-materials"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("eco-friendly-materials", e)
                        }
                        aria-controls="eco-friendly-materials"
                        aria-selected={activeTab === "eco-friendly-materials"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "eco-friendly-materials"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "eco-friendly-materials"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "eco-friendly-materials"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Eco-Friendly Materials
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "sustainable-packaging" ? "active" : ""
                        }`}
                        id="sustainable-packaging-tab"
                        data-mdb-toggle="pill"
                        href="#sustainable-packaging"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("sustainable-packaging", e)
                        }
                        aria-controls="sustainable-packaging"
                        aria-selected={activeTab === "sustainable-packaging"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "sustainable-packaging"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "sustainable-packaging"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "sustainable-packaging"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Sustainable Packaging
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "waterless-washing-techniques"
                            ? "active"
                            : ""
                        }`}
                        id="waterless-washing-techniques-tab"
                        data-mdb-toggle="pill"
                        href="#waterless-washing-techniques"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("waterless-washing-techniques", e)
                        }
                        aria-controls="corporate-matters"
                        aria-selected={
                          activeTab === "waterless-washing-techniques"
                        }
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "waterless-washing-techniques"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "waterless-washing-techniques"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "waterless-washing-techniques"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Waterless Washing Techniques
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "anti-microbial" ? "active" : ""
                        }`}
                        id="anti-microbial-tab"
                        data-mdb-toggle="pill"
                        href="#anti-microbial"
                        role="tab"
                        onClick={(e) => handleTabChange("anti-microbial", e)}
                        aria-controls="anti-microbial"
                        aria-selected={activeTab === "anti-microbial"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "pahrmacy"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "anti-microbial"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "anti-microbial"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Anti Microbial Finish
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "continuous-improvement" ? "active" : ""
                        }`}
                        id="continuous-improvement-tab"
                        data-mdb-toggle="pill"
                        href="#continuous-improvement"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("continuous-improvement", e)
                        }
                        aria-controls="continuous-improvement"
                        aria-selected={activeTab === "continuous-improvement"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "continuous-improvement"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "continuous-improvement"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "continuous-improvement"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Continuous Improvement
                      </a>
                    </li>
                  </div>
                  
                </ul>
              </div>
            </div>

            <div className="col-md-9 tab-detail">
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${
                    activeTab === "eco-friendly-materials" ? "active" : ""
                  }`}
                  id="eco-friendly-materials"
                  role="tabpanel"
                  aria-labelledby="eco-friendly-materials-tab"
                >
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-9">
                        <p>
                          We are proud to use sustainable materials in our
                          products, including:
                        </p>

                        <ul>
                          <li>
                            <strong>Organic Cotton:</strong> Grown without
                            harmful pesticides or synthetic fertilizers, organic
                            cotton reduces the environmental footprint of our
                            products and supports healthier ecosystems.
                          </li>
                          <li>
                            <strong>BCI Cotton:</strong> By sourcing cotton
                            through the Better Cotton Initiative (BCI), we
                            support more sustainable cotton farming practices
                            that minimize water usage, reduce chemical inputs,
                            and promote the well-being of cotton farmers.
                          </li>
                          <li>
                            <strong>Recycled Materials:</strong> Our commitment
                            to reducing waste extends to using recycled cotton
                            and polyester, including polyester made from
                            recycled plastic bottles. By giving new life to
                            existing materials, we help divert waste from
                            landfills and reduce the need for virgin resources.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <img
                          src={ecoFriendlyMaterials}
                          alt="healthTech"
                          className="img-fluid"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "sustainable-packaging" ? "active" : ""
                  }`}
                  id="sustainable-packaging"
                  role="tabpanel"
                  aria-labelledby="sustainable-packaging-tab"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                        <p>
                          We recognize the importance of sustainable packaging
                          in minimizing our environmental impact. That's why we
                          opt for eco-friendly packaging solutions, such as:
                        </p>
                        <ul>
                          <li>
                            <strong>Recycled Paper:</strong> Our packaging
                            materials are made from recycled paper, reducing the
                            demand for new paper production and decreasing
                            deforestation.
                          </li>
                          <li>
                            <strong>Cardboard Hooks:</strong> In place of
                            traditional plastic hooks, we utilize cardboard
                            hooks that are recyclable and biodegradable, further
                            reducing plastic waste in the environment.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "waterless-washing-techniques" ? "active" : ""
                  }`}
                  id="waterless-washing-techniques"
                  role="tabpanel"
                  aria-labelledby="waterless-washing-techniques-tab"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                        <p>
                          Our manufacturing process incorporates innovative
                          waterless washing techniques, significantly reducing
                          water consumption and minimizing our environmental
                          footprint. By optimizing our processes, we strive to
                          conserve this precious resource while maintaining the
                          highest standards of quality and cleanliness.
                        </p>
                      </div>
                      <div className="col-md-3">
                        <img
                          src={waterlessWashing}
                          alt="edTech"
                          className="img-fluid"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "anti-microbial" ? "active" : ""
                  }`}
                  id="anti-microbial"
                  role="tabpanel"
                  aria-labelledby="anti-microbial"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                        <p>
                          To prolong the lifespan of our products and reduce the
                          frequency of washing, we apply anti-microbial finishes
                          that inhibit the growth of odor-causing bacteria. This
                          not only extends the life cycle of our products but
                          also contributes to water conservation by reducing the
                          need for frequent washing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "continuous-improvement" ? "active" : ""
                  }`}
                  id="continuous-improvement"
                  role="tabpanel"
                  aria-labelledby="continuous-improvement"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                        <p>
                          We are committed to ongoing research and development
                          to further enhance the sustainability of our products
                          and processes. By staying at the forefront of
                          innovation and embracing new technologies, we aim to
                          continuously reduce our environmental impact and
                          promote a more sustainable future for generations to
                          come.<br /><br /><p className="lead"> At INTER MARKET KNIT (PVT) LTD, sustainability
                          isn't just a goal – it's a journey that we're proud to
                          be on.</p> Together, we can create a more sustainable
                          future, one step at a time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                

              </div>
              {/* Tab content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sustainabilitytabs;
