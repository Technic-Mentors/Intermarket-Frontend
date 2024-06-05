import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../Assets/Images/inter-market-logo.png";

function MainHeader() {
  const [navColor, setNavColor] = useState("dark");
  const [itemColor, setItemColor] = useState("white");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  const activeLink = (path) => {
    if (location.pathname === path) {
      return "active";
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setNavColor("light");
      setItemColor("dark");
    }
  }, []);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${navColor} bg-${navColor} py-2`}
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-2">
            <Link to="/">
              {/* <img
                src={LOGO}
                alt="socks-manufacturer-logo"
                className="img-fluid logo-img"
              /> */}
            </Link>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
        >
          <div className="col-md-10 mobile-contact-info d-flex justify-content-end">
            <div className="row">
              <div className="col-md-4 header-icon">
                <div className="icon-box d-flex text-white align-items-center">
                  <div className="icon">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="icon-content">
                    <p> 9:00AM to 6:00PM</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 header-icon">
                <div className=" d-flex text-white ">
                  <i className="fa-regular fa-envelope-open "></i>
                  <p>info@imlpk.com</p>
                </div>
              </div>

              <div className="col-md-4 header-icon">
                <div className="icon-box d-flex text-white align-items-center">
                  <div className="icon">
                    <i className="fa-solid fa-phone "></i>
                  </div>
                  <div className="icon-content">
                    <p className="pg-2">+92 344 444 2678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10 koi-bhi-nam">
            <div className="menu-list" style={{ listStyle: "none" }}>
              <li className="nav-item me-1">
                <Link
                  to="/"
                  className={`nav-link ${activeLink("/")}`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>

              <div class="dropdown">
                <button
                  class="btn dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Are
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="nav-item me-1">
                    <Link
                      to="/about"
                      className={`nav-link ${activeLink("/about")}`}
                      onClick={handleLinkClick}
                    >
                      Company
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/our-system"
                      className={`nav-link ${activeLink("/our-system")}`}
                      onClick={handleLinkClick}
                    >
                      Our System
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/sustainability"
                      className={`nav-link ${activeLink("/sustainability")}`}
                      onClick={handleLinkClick}
                    >
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="nav-item me-1">
                <Link
                  to="/socks-manufacturing"
                  className={`nav-link ${activeLink("/socks-manufacturing")}`}
                  onClick={handleLinkClick}
                >
                  Socks Manufacturing
                </Link>
              </li>

              <div class="dropdown">
                <button
                  class="btn dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Textile Sourcing
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="nav-item me-1">
                <Link
                  to="/textile-sourcing"
                  className={`nav-link ${activeLink("/textile-sourcing")}`}
                >
                  Yarn/Textile Sourcing
                </Link>
              </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/cotton-yarn"
                      className={`nav-link ${activeLink("/cotton-yarn")}`}
                    >
                      Cotton Yarn
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/dty-yarns"
                      className={`nav-link ${activeLink("/dty-yarns")}`}
                    >
                      DTY Yarns/ATY Intermingled Yarns
                    </Link>
                  </li>
                </div>
              </div>

              <li className="nav-item me-1">
                <Link
                  to="/benefits"
                  className={`nav-link ${activeLink("/benefits")}`}
                  onClick={handleLinkClick}
                >
                  Benefits
                </Link>
              </li>

              <li className="nav-item me-1">
                <Link
                  to="/media"
                  className={`nav-link ${activeLink("/media")}`}
                  onClick={handleLinkClick}
                >
                  Media
                </Link>
              </li>

              <li className="nav-item me-1">
                <Link
                  to="/contact"
                  className={`nav-link ${activeLink("/contact")}`}
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>

              {/* Other menu items */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Navbar() {
  const location = useLocation();
  const activeLink = (path) => {
    if (location.pathname === path) {
      return "active";
    }
  };

  return (
    <div className="bg-white inter-main-nav">
      <div className="continer-fluid py-1 px-2">
        <div className="row d-flex align-items-center py-3">
          <div className="col-md-3">
          <Link to='/' class="navbar-brand">
            <img src={LOGO} alt="site-logo" className="img-fluid logo-img px-4" style={{width:"220px", height: '60px'}}/>
          </Link>
          </div>
          <div className="col-md-9 d-flex justify-content-end mt-2">
            <div
              className="menu-list"
              style={{ listStyle: "none", display: "flex" }}
            >
              <li className="nav-item me-1">
                <Link to="/" className={`nav-link ${activeLink("/")}`}>
                  Home
                </Link>
              </li>

              <div class="dropdown">
                <button
                  class="btn dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Are
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="nav-item me-1">
                    <Link
                      to="/about"
                      className={`nav-link ${activeLink("/about")}`}
                    >
                      Company
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/our-system"
                      className={`nav-link ${activeLink("/our-system")}`}
                    >
                      Our System
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/sustainability"
                      className={`nav-link ${activeLink("/sustainability")}`}
                    >
                      Sustainability
                    </Link>
                  </li>
                </div>
              </div>

              <li className="nav-item me-1">
                <Link
                  to="/socks-manufacturing"
                  className={`nav-link ${activeLink("/socks-manufacturing")}`}
                >
                  Socks Manufacturing
                </Link>
              </li>



              <div class="dropdown">
                <button
                  class="btn dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Yarn/Textile Sourcing
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="nav-item me-1">
                <Link
                  to="/textile-sourcing"
                  className={`nav-link ${activeLink("/textile-sourcing")}`}
                >
                  Textile Sourcing
                </Link>
              </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/cotton-yarn"
                      className={`nav-link ${activeLink("/cotton-yarn")}`}
                    >
                      Cotton Yarn
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/dty-yarns"
                      className={`nav-link ${activeLink("/dty-yarns")}`}
                    >
                      DTY/FDY Yarns
                    </Link>
                  </li>
                </div>
              </div>

              <li className="nav-item me-1">
                <Link
                  to="/benefits"
                  className={`nav-link ${activeLink("/benefits")}`}
                >
                  Benefits
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link
                  to="/media"
                  className={`nav-link ${activeLink("/media")}`}
                >
                  Media
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link
                  to="/contact"
                  className={`nav-link ${activeLink("/contact")}`}
                >
                  Contact
                </Link>
              </li>
              {/* <Link to="/contact">
              <button className="mt-2 me-2 main-button">Get A Quote</button>
            </Link> */}
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end align-items-center">
           
          </div>
        </div>
      </div>
    </div>
  );
}



export default Navbar;
