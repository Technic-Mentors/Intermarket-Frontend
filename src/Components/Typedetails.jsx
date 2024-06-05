import React, { useState } from 'react'

function Typedetails() {
    const [activeTab, setActiveTab] = useState("dress-socks");

    const handleTabChange = (tabId, e) => {
      e.preventDefault();
      setActiveTab(tabId);
    };

  return (
    <div>
      <section
        className="pills-tab-section px-2  "
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="container-fluid pt-3 pb-2">
          
          <div className="row justify-content-center">
            <div className="col-md-10 mb-4">
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
                          activeTab === "dress-socks" ? "active" : ""
                        }`}
                        id="dress-socks-tab"
                        data-mdb-toggle="pill"
                        href="#dress-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("dress-socks", e)
                        }
                        aria-controls="dress-socks"
                        aria-selected={activeTab === "dress-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "dress-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "dress-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "dress-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Dress Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "wool-socks" ? "active" : ""
                        }`}
                        id="wool-socks-tab"
                        data-mdb-toggle="pill"
                        href="#wool-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("wool-socks", e)
                        }
                        aria-controls="wool-socks"
                        aria-selected={activeTab === "wool-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "wool-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "wool-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "wool-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Wool Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "sports-socks"
                            ? "active"
                            : ""
                        }`}
                        id="sports-socks-tab"
                        data-mdb-toggle="pill"
                        href="#sports-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("sports-socks", e)
                        }
                        aria-controls="corporate-matters"
                        aria-selected={
                          activeTab === "sports-socks"
                        }
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "sports-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "sports-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "sports-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Sports Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "work-socks" ? "active" : ""
                        }`}
                        id="work-socks-tab"
                        data-mdb-toggle="pill"
                        href="#work-socks"
                        role="tab"
                        onClick={(e) => handleTabChange("work-socks", e)}
                        aria-controls="work-socks"
                        aria-selected={activeTab === "work-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "pahrmacy"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "work-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "work-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Work Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "performance-socks" ? "active" : ""
                        }`}
                        id="performance-socks-tab"
                        data-mdb-toggle="pill"
                        href="#performance-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("performance-socks", e)
                        }
                        aria-controls="performance-socks"
                        aria-selected={activeTab === "performance-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "performance-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "performance-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "performance-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Performance Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "diabetic-socks" ? "active" : ""
                        }`}
                        id="diabetic-socks-tab"
                        data-mdb-toggle="pill"
                        href="#diabetic-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("diabetic-socks", e)
                        }
                        aria-controls="diabetic-socks"
                        aria-selected={activeTab === "diabetic-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "diabetic-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "diabetic-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "diabetic-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Diabetic Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "gradual-compression-socks" ? "active" : ""
                        }`}
                        id="gradual-compression-socks-tab"
                        data-mdb-toggle="pill"
                        href="#gradual-compression-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("gradual-compression-socks", e)
                        }
                        aria-controls="gradual-compression-socks"
                        aria-selected={activeTab === "gradual-compression-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "gradual-compression-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "gradual-compression-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "gradual-compression-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Gradual Compression Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "waterproof-socks" ? "active" : ""
                        }`}
                        id="waterproof-socks-tab"
                        data-mdb-toggle="pill"
                        href="#waterproof-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("waterproof-socks", e)
                        }
                        aria-controls="waterproof-socks"
                        aria-selected={activeTab === "waterproof-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "waterproof-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "waterproof-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "waterproof-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Waterproof Socks
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab mb-2 ${
                          activeTab === "football-socks" ? "active" : ""
                        }`}
                        id="football-socks-tab"
                        data-mdb-toggle="pill"
                        href="#football-socks"
                        role="tab"
                        onClick={(e) =>
                          handleTabChange("football-socks", e)
                        }
                        aria-controls="football-socks"
                        aria-selected={activeTab === "football-socks"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "football-socks"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "football-socks"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "football-socks"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Football Socks
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
                    activeTab === "dress-socks" ? "active" : ""
                  }`}
                  id="dress-socks"
                  role="tabpanel"
                  aria-labelledby="dress-socks-tab"
                >
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-9">
                        <h5 className='fw-bold'>
                        Subtle Style Expression:
                        </h5>
                        <p>
                        Indulge in personal style expression with our exquisite dress socks, which serve as a canvas for showcasing vibrant colors, bold patterns, and intricate designs. Whether you prefer classic elegance or contemporary flair, these socks allow you to infuse your ensemble with a touch of individual taste and personality.
                        </p>
                        <h5 className='fw-bold'>
                        Elevating Formal Attire:
                        </h5>
                        <p>
                        Elevate your formal attire to new heights with our meticulously crafted dress socks, designed to add a tasteful element of flair to any ensemble. Coordinating effortlessly with tie and pocket square colors, these socks demonstrate your attention to detail, professionalism, and sartorial finesse, making a lasting impression in any professional or social setting.
                        </p>
                        <h5 className='fw-bold'>
                        Versatility For Every Occasion:
                        </h5>
                        <p>
                        Beyond formal occasions, our dress socks seamlessly transition between casual and formal settings, offering unparalleled versatility that enhances both social and professional outfits. Whether you're attending a business meeting or a soirée, these socks effortlessly elevate your style with sophistication and refinement.
                        </p>
                        <h5 className='fw-bold'>
                        Comfort And Quality:
                        </h5>
                        <p>
                        Experience unrivaled comfort and luxury with our high-quality dress socks, meticulously crafted from fine cotton and silk blends. Engineered for superior durability and comfort, these socks feature reinforced heels, toes, and arch support, ensuring all-day comfort and support without compromising on style.
                        </p>
                        <h5 className='fw-bold'>
                        Cultivating Self-Confidence:
                        </h5>
                        <p>
                        Attention to outfit details, including dress socks, plays a pivotal role in cultivating self-confidence and elevating your overall presentation. By investing in thoughtful accessories that reflect your personality and style, you exude confidence and professionalism, leaving a lasting impression wherever you go.
                        </p>
                        <h5 className='fw-bold'>
                        Anti-Microbial / Intelligent Freshness:
                        </h5>
                        <p>
                        Our dress socks feature advanced anti-microbial technology, specifically engineered to ensure long-lasting freshness and hygiene. With the assurance of intelligent freshness, you can wear our socks confidently, knowing that they provide superior odor control and bacteria resistance, keeping your feet fresh and comfortable throughout the day.
                        </p>
                        
                      </div>
                     
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "wool-socks" ? "active" : ""
                  }`}
                  id="wool-socks"
                  role="tabpanel"
                  aria-labelledby="wool-socks-tab"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                        Sustainable Choice:
                        </h5>
                        <p>
                        Embrace sustainability with wool socks, which align seamlessly with an eco-conscious lifestyle. Wool is a renewable and biodegradable material, making it an environmentally friendly choice for conscientious consumers.
                        </p>
                      <h5 className='fw-bold'>
                        Versatility:
                        </h5>
                        <p>
                        Experience unparalleled versatility with wool socks, suitable for a wide range of activities and occasions. Whether you're hiking in the mountains or strolling through the city streets, these socks adapt effortlessly to different lifestyles and preferences.
                        </p>
                      <h5 className='fw-bold'>
                      Outdoor Adventure Companion:
                        </h5>
                        <p>
                        Embark on outdoor adventures with confidence, knowing that wool socks provide the perfect blend of protection and comfort. Designed to withstand rugged terrain and harsh conditions, these socks are the ultimate companion for hiking, camping, and exploring the great outdoors.
                        </p>
                      <h5 className='fw-bold'>
                      Natural Insulation:
                        </h5>
                        <p>
                        Stay cozy and warm in any weather with wool socks, which provide natural insulation by trapping air within the fibers. This creates a layer of warmth around your feet, ensuring comfort and protection against the elements, even in the coldest of climates.
                        </p>
                      <h5 className='fw-bold'>
                      Moisture Management:
                        </h5>
                        <p>
                        Keep your feet dry and comfortable throughout the day with wool socks, which excel in moisture management. Wool has the unique ability to absorb moisture from your feet and release it into the air, preventing sweat build-up and maintaining optimal comfort levels.
                        </p>
                      <h5 className='fw-bold'>
                      Breathability:
                        </h5>
                        <p>
                        Enjoy breathable comfort without compromising on warmth with wool socks. Despite their insulating properties, wool socks allow air to circulate freely around your feet, promoting breathability and preventing the accumulation of odor-causing bacteria.
                        </p>
                      <h5 className='fw-bold'>
                      Odour Resistance:
                        </h5>
                        <p>
                        Say goodbye to foot odour with wool socks, which naturally repel odor-causing bacteria. Thanks to wool's inherent antimicrobial properties, these socks keep your feet feeling fresh and odor-free, even after a long day of wear.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "sports-socks" ? "active" : ""
                  }`}
                  id="sports-socks"
                  role="tabpanel"
                  aria-labelledby="sports-socks-tab"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      Performance Enhancement:
                        </h5>
                        <p>
                        Elevate your athletic performance with our meticulously designed sports socks, engineered with advanced technologies to enhance your capabilities on the field or court. Featuring strategic cushioning, arch support, and moisture-wicking properties, these socks provide unparalleled comfort and support, allowing you to perform at your best with every stride.
                        </p>
                      <h5 className='fw-bold'>
                      Style and Fashion:
                        </h5>
                        <p>
                        Make a statement both on and off the field with our stylish sports socks, which have evolved into a fashion staple with trendy designs, vibrant colors, and eye-catching patterns. Whether you're training at the gym or running errands around town, these socks add a pop of personality to your ensemble, reflecting your unique sense of style and fashion-forward mindset.
                        </p>
                      <h5 className='fw-bold'>
                      Active Lifestyle Symbol:
                        </h5>
                        <p>
                        Embrace an active and health-conscious lifestyle with our sports socks, which serve as a symbol of your commitment to physical fitness and well-being. By wearing these socks, you showcase your dedication to staying active, energized, and ready to tackle any challenge that comes your way.
                        </p>
                      <h5 className='fw-bold'>
                      Versatitlity:
                        </h5>
                        <p>
                        Experience versatility like never before with our sports socks, tailored to cater to a wide range of activities and sports. Whether you're hitting the track for a run, shooting hoops on the basketball court, or perfecting your downward dog in yoga class, these socks provide specialized support and comfort to optimize your performance and enjoyment.
                        </p>
                      <h5 className='fw-bold'>
                      Athleisure Trend:
                        </h5>
                        <p>
                        Stay on-trend with our sports socks, which seamlessly blend fashion and function to contribute to the athleisure movement. From gym sessions to brunch dates, these socks effortlessly transition from workout to streetwear, adding a sporty-chic vibe to your everyday ensemble and keeping you comfortable and stylish around the clock.
                        </p>
                      <h5 className='fw-bold'>
                      Self Expression:
                        </h5>
                        <p>
                        Express your personality and interests with our sports socks, which serve as a canvas for self-expression through bold patterns, iconic logos, and motivational messages. Whether you're a team player, a fitness enthusiast, or a trendsetter, these socks allow you to showcase your individuality and make a statement wherever you go.
                        </p>
                      <h5 className='fw-bold'>
                      Comfort And Protection:
                        </h5>
                        <p>
                        Prioritize comfort and protection with our sports socks, meticulously crafted to deliver unparalleled cushioning, support, and durability. Designed to reduce the risk of blisters, foot fatigue, and injuries, these socks ensure optimal comfort and performance, allowing you to push your limits and achieve your goals with confidence and ease.
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "work-socks" ? "active" : ""
                  }`}
                  id="work-socks"
                  role="tabpanel"
                  aria-labelledby="work-socks"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      All-Day Comfort:
                        </h5>
                        <p>
                        Experience unparalleled comfort during long hours on your feet with our specially designed work socks. Featuring sole cushioning, arch support, and padding in high-impact areas, these socks minimize fatigue and ensure maximum comfort throughout the workday, allowing you to stay focused and productive.
                        </p>
                      <h5 className='fw-bold'>
                      Moisure Management:
                        </h5>
                        <p>
                        Stay dry and comfortable with our moisture-wicking work socks, which draw sweat away from the feet and promote better breathability. By minimizing excess moisture, these socks reduce the risk of potential foot issues, such as blisters and fungal infections, ensuring your feet stay fresh and healthy even during the most demanding tasks.
                        </p>
                      <h5 className='fw-bold'>
                      Enhanced Durability:
                        </h5>
                        <p>
                        Rely on the durability of our work socks, built to withstand the rigors of labor-intensive activities. Crafted from high-quality materials and reinforced at the heels and toes, these socks are designed to resist wear and tear, ensuring long-lasting performance and reliability in any work environment.
                        </p>
                      <h5 className='fw-bold'>
                      Temperature Regulation:
                        </h5>
                        <p>
                        Stay comfortable in any climate with our versatile work socks, which provide temperature regulation to suit your needs. Whether you're working in cold conditions or hot environments, these socks offer insulation to keep your feet warm or employ moisture-wicking and breathability to keep them cool, ensuring optimal comfort year-round.
                        </p>
                      <h5 className='fw-bold'>
                      Work Safety:
                        </h5>
                        <p>
                        Prioritize safety in the workplace with our work socks, which come equipped with additional safety features. From reinforced soles for added slip resistance to high-visibility colors for increased visibility in low-light conditions, these socks enhance workplace safety and contribute to a secure work environment, protecting you from potential hazards.
                        </p>
                      <h5 className='fw-bold'>
                      Anti-Microbial Technology:
                        </h5>
                        <p>
                        Enjoy unmatched freshness and hygiene with our work socks, featuring advanced anti-microbial technology. By effectively controlling bacteria that can cause unpleasant odors and infections, these socks provide intelligent freshness, ensuring your feet stay clean and odor-free even after a long day on the job.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "performance-socks" ? "active" : ""
                  }`}
                  id="performance-socks"
                  role="tabpanel"
                  aria-labelledby="performance-socks"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      Moisure Management:
                        </h5>
                        <p>
                        Stay dry and comfortable during intense physical activity with our performance socks, featuring advanced moisture-wicking technology. This innovative feature effectively draws sweat away from the feet, preventing discomfort and chafing, and ensuring optimal comfort throughout your workout.
                        </p>
                      <h5 className='fw-bold'>
                      Cushioning And Impact Absorption:
                        </h5>
                        <p>
                        Stay dry and comfortable during intense physical activity with our performance socks, featuring advanced moisture-wicking technology. This innovative feature effectively draws sweat away from the feet, preventing discomfort and chafing, and ensuring optimal comfort throughout your workout.
                        </p>
                      <h5 className='fw-bold'>
                      Arch And Ankle Support:
                        </h5>
                        <p>
                        Enhance your stability and performance with our performance socks, designed with built-in arch and ankle support. This feature promotes proper foot alignment, reduces strain, and improves balance and agility, allowing you to move with confidence and precision during every activity.
                        </p>
                      <h5 className='fw-bold'>
                      Breathability And Ventilation:
                        </h5>
                        <p>
                        Keep your feet cool and dry with our performance socks, crafted from breathable materials and featuring ventilation channels. This ensures optimal air circulation and heat dissipation, regulating foot temperature and preventing excess moisture buildup, even during the most intense workouts.
                        </p>
                      <h5 className='fw-bold'>
                      Reduced Friction And Blisters:
                        </h5>
                        <p>
                        Enjoy a friction-free experience with our performance socks, which feature seamless, smooth materials that minimize friction and reduce the likelihood of blisters, hot spots, and chafing. This allows you to focus on your performance without distractions, maximizing your potential in every workout.
                        </p>
                      <h5 className='fw-bold'>
                      Anti-Microbial Technology:
                        </h5>
                        <p>
                        Experience long-lasting freshness and hygiene with our performance socks, featuring advanced anti-microbial technology. Engineered to control bacteria and odor-causing microbes, these socks provide unmatched freshness and confidence, allowing you to wear them with assurance during even the most rigorous activities.
                        </p>
                     
                      
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "diabetic-socks" ? "active" : ""
                  }`}
                  id="diabetic-socks"
                  role="tabpanel"
                  aria-labelledby="diabetic-socks"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      We Care:
                        </h5>
                        <p>
                        Prioritize your comfort and well-being with our diabetic socks, meticulously crafted from extra soft cotton and non-irritating fabrics. Designed to prevent irritation and friction-related issues, these socks are gentle on the skin, making them ideal for individuals with diabetic neuropathy who require extra care and attention for their sensitive feet.
                        </p>
                      <h5 className='fw-bold'>
                      Seamless Construction:
                        </h5>
                        <p>
                        Experience unparalleled comfort and protection with our diabetic socks, featuring seamless construction that minimizes friction and reduces the risk of blisters, ulcers, and other skin irritations. By eliminating seams, these socks provide a smooth, irritation-free surface that helps protect sensitive feet and promotes overall foot health.
                        </p>
                      <h5 className='fw-bold'>
                      Anti-Microbial Technology:
                        </h5>
                        <p>
                        Enjoy long-lasting freshness and hygiene with our diabetic socks, which feature advanced anti-microbial technology. Engineered to control bacteria and odor-causing microbes, these socks provide unmatched freshness and confidence, ensuring your feet stay clean and odor-free, even during extended wear.
                        </p>
                      <h5 className='fw-bold'>
                      Better Blood Circulation:
                        </h5>
                        <p>
                        Promote better circulation and prevent discomfort with our diabetic socks, which feature a non-binding, loose-fitting top. By preventing constriction and allowing for better circulation, these socks minimize the risk of circulatory issues, discomfort, and foot injuries, providing optimal support and comfort for individuals with diabetes.
                        </p>
                      <h5 className='fw-bold'>
                      Moisure Management:
                        </h5>
                        <p>
                        Keep your feet dry and comfortable with our diabetic socks, equipped with moisture-wicking properties that help regulate moisture levels and reduce the risk of fungal infections. By effectively managing moisture, these socks ensure optimal comfort and foot health, even in humid or sweaty conditions.
                        </p>
                      <h5 className='fw-bold'>
                      Padding And Cushioning:
                        </h5>
                        <p>
                        Experience superior comfort and protection with our diabetic socks, which offer extra padding and cushioning in key areas such as the heel and ball of the foot. This helps reduce pressure points, protect against foot ulcers and sores, and provide the support and comfort needed for individuals with diabetes to navigate their daily activities with confidence and ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "gradual-compression-socks" ? "active" : ""
                  }`}
                  id="gradual-compression-socks"
                  role="tabpanel"
                  aria-labelledby="gradual-compression-socks"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      Circulatory Support:
                        </h5>
                        <p>
                        Our gradual compression socks provide gentle yet effective support to promote healthy blood circulation throughout your legs. By applying graduated pressure from the ankle up towards the calf, these socks help improve venous return and reduce the risk of swelling and discomfort, supporting your overall circulatory wellness.
                        </p>
                      <h5 className='fw-bold'>
                      Muscle Recovery:
                        </h5>
                        <p>
                        Accelerate your muscle recovery process with our gradual compression socks, which aid in flushing out lactic acid and metabolic waste from your muscles. By enhancing circulation and oxygen delivery to tired muscles, these socks reduce soreness and fatigue, allowing you to recover faster and perform at your best, day after day.
                        </p>
                      <h5 className='fw-bold'>
                      Comfortable Fit:
                        </h5>
                        <p>
                        Experience superior comfort with our gradual compression socks, crafted from soft and breathable materials that contour to the shape of your legs. Featuring a snug yet comfortable fit, these socks provide support without feeling restrictive, ensuring all-day comfort and wearability, even during extended periods of use.
                        </p>
                      <h5 className='fw-bold'>
                      Versatile Wear:
                        </h5>
                        <p>
                        From long workdays to intense workouts, our gradual compression socks are suitable for a variety of activities and lifestyles. Whether you're on your feet all day at work, hitting the gym for a workout, or traveling on a long journey, these socks provide the support and comfort you need to stay energized and pain-free, no matter where life takes you.
                        </p>
                      <h5 className='fw-bold'>
                      Enhanced Performance:
                        </h5>
                        <p>
                        Boost your performance and endurance with our gradual compression socks, which help improve blood flow, reduce muscle vibration, and enhance proprioception. By providing targeted support to key muscle groups, these socks optimize your biomechanics and efficiency, allowing you to move with greater speed, agility, and confidence, whether you're on the track, field, or court.
                        </p>
                      <h5 className='fw-bold'>
                      Rejuvenating Relief:
                        </h5>
                        <p>
                        Experience rejuvenating relief from leg fatigue and discomfort with our gradual compression socks, which help alleviate swelling, achiness, and heaviness in the legs. Whether you're recovering from a long day on your feet or seeking relief from chronic circulatory issues, these socks provide gentle yet effective compression therapy to help you feel revitalized and refreshed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "waterproof-socks" ? "active" : ""
                  }`}
                  id="waterproof-socks"
                  role="tabpanel"
                  aria-labelledby="waterproof-socks"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      Dry And Protected:
                        </h5>
                        <p>
                        Experience ultimate protection against water with our waterproof socks, which create a reliable barrier to keep your feet dry and comfortable in wet and rainy conditions. By preventing moisture from seeping in, these socks ensure your feet stay dry and protected, allowing you to tackle any outdoor adventure with confidence.
                        </p>
                      <h5 className='fw-bold'>
                      Outdoor Adventures:
                        </h5>
                        <p>
                        Embark on your life's adventures with confidence, knowing that our waterproof socks are ideal for a wide range of outdoor activities. Whether you're hiking through rugged terrain, snowboarding down slopes, camping in the wilderness, fishing by the river, hunting in the woods, or enjoying water sports on the lake, these socks allow you to fully immerse yourself in your outdoor pursuits without worrying about wet feet dampening your experience.
                        </p>
                      <h5 className='fw-bold'>
                      Breathability:
                        </h5>
                        <p>
                        Stay cool and comfortable even in waterproof socks with our innovative breathable design. Despite being waterproof, our socks are engineered to allow moisture and sweat to escape, while still keeping water out. This ensures optimal breathability and comfort during extended wear, so you can stay focused on your adventures without feeling stifled or uncomfortable.
                        </p>
                      <h5 className='fw-bold'>
                      Convenience:
                        </h5>
                        <p>
                        Say goodbye to cumbersome layers and plastic bags with our convenient waterproof socks, which eliminate the need for additional protection in wet conditions. With our socks, you can enjoy hassle-free outdoor excursions, knowing that your feet are fully protected against water without the need for extra gear or accessories.
                        </p>
                      <h5 className='fw-bold'>
                      Built to Last:
                        </h5>
                        <p>
                        Rely on the durability of our waterproof socks, which are built to withstand the rigors of outdoor exploration. Crafted from high-quality, durable materials, these socks are designed to withstand wear and tear, ensuring long-lasting performance and reliability in any environment.
                        </p>
                      <h5 className='fw-bold'>
                      Protection:
                        </h5>
                        <p>
                        In addition to keeping your feet dry, our waterproof socks offer an added layer of protection against waterborne hazards, such as bacteria and fungi, that may be present in wet environments. By creating a barrier between your feet and the elements, these socks help safeguard your foot health and ensure a safe and enjoyable outdoor experience, no matter where your adventures take you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "football-socks" ? "active" : ""
                  }`}
                  id="football-socks"
                  role="tabpanel"
                  aria-labelledby="football-socks"
                >
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-9">
                      <h5 className='fw-bold'>
                      Stay-Put Fit:
                        </h5>
                        <p>
                        Experience unrivaled stability with our football socks, meticulously designed to stay in place during even the most vigorous movements on the field. Featuring elastic cuffs and ribbed construction, these socks ensure a secure fit that stays put throughout the game, preventing them from slipping down and causing distractions during play.
                        </p>
                      <h5 className='fw-bold'>
                      Moisture Management:
                        </h5>
                        <p>
                        Keep your feet dry and comfortable with our football socks, engineered with advanced moisture-wicking properties. Designed to draw sweat away from the skin, these socks help regulate temperature and prevent discomfort and blisters, allowing you to stay focused and perform at your best, even during intense physical activity.
                        </p>
                      <h5 className='fw-bold'>
                      Cushioning And Impact Absorption:
                        </h5>
                        <p>
                        Protect your feet from impact and reduce the risk of injuries with our football socks, which feature cushioned areas in the heel and toe for extra padding and shock absorption. This innovative design helps minimize the impact on your feet and lower limbs, ensuring optimal comfort and protection throughout the game.
                        </p>
                      <h5 className='fw-bold'>
                      Arch And Ankle Support:
                        </h5>
                        <p>
                        Optimize your performance and minimize fatigue with our football socks, which offer built-in arch support and compression around the ankle. This targeted support helps provide stability, reduce muscle fatigue, and lower the risk of sprains and strains, allowing you to move with confidence and agility on the field.
                        </p>
                      <h5 className='fw-bold'>
                      Over-the-Calf Length:
                        </h5>
                        <p>
                        Experience superior coverage and protection with our football socks, which boast an over-the-calf length that extends above the calf muscle. This extra length offers added protection against scrapes and turf burns, while also providing additional support to the lower leg muscles, ensuring maximum comfort and performance during every game.
                        </p>
                      <h5 className='fw-bold'>
                      Breathability And Ventilation:
                        </h5>
                        <p>
                        Experience unmatched comfort with our football socks, which feature breathable materials and strategically placed ventilation panels to promote air circulation. This innovative design helps keep your feet cool and dry, reducing sweat buildup and minimizing the potential for odor-causing bacteria, so you can stay focused and confident on the field.
                        </p>
                      <h5 className='fw-bold'>
                      Seamless Construction:
                        </h5>
                        <p>
                        Enjoy seamless comfort with our football socks, crafted with seamless toe construction to minimize discomfort and irritation. By reducing friction and eliminating seams that can cause blisters, these socks enhance overall comfort during play, allowing you to move freely and confidently without distraction.
                        </p>
                      <h5 className='fw-bold'>
                      Durability:
                        </h5>
                        <p>
                        Rely on the durability of our football socks, engineered to withstand the rigors of the sport. Crafted from high-quality materials and reinforced with sturdy stitching, these socks are built to endure frequent use, washing, and the demands of the game, ensuring long-lasting performance and reliability.
                        </p>
                      <h5 className='fw-bold'>
                      Anti-Microbial Technology:
                        </h5>
                        <p>
                        Experience long-lasting freshness and hygiene with our football socks, featuring advanced anti-microbial technology. Engineered to control bacteria and odor-causing microbes, these socks provide unmatched freshness and confidence, allowing you to wear them with assurance and comfort, game after game.
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
  )
}

export default Typedetails
