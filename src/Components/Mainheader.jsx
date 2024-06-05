import { React, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../Assets/Images/inter-market-logo.png";

export default function Mainheader() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef()

  const activeLink = (path) => {
    if (location.pathname === path) {
      return "active";
    }
  };

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavbarOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return (() => {
      document.removeEventListener("click", handleClick)
    })
  })
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light yes-1"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div class="container-fluid">
          <span className="text-light">Welcome To Inter Market Socks Manufacturers</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse px-2" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto d-flex align-items-center">
              <div className="icon-box d-flex text-dark">
                <div className="icon">
                  <i className="fa-solid me-2 fa-clock"></i>
                </div>
                <div className="icon-content">
                  <span className="text-light"> 9:00AM to 6:00PM</span>
                </div>
              </div>
              <div className="icon-box d-flex text-dark">
                <div className="icon">
                  <i className="fa-solid me-2 fa-envelope-open "></i>
                </div>
                <div className="icon-content">
                  <span className="text-light">info@imlpk.com</span>
                </div>
              </div>
              <div className="icon-box1 d-flex text-dark">
                <div className="icon">
                  <i className="fa-solid me-2 fa-phone text-light"></i>
                </div>
                <div className="icon-content">
                  <span className="text-light">+92 344 444 2678</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light yes-2" ref={navRef}>
        <div class="container-fluid">
          <Link to='/' class="navbar-brand" onClick={handleLinkClick}>
            <img src={LOGO} alt="site-logo" className="img-fluid logo-img" style={{width:"120px",marginLeft:"1%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 yes1 mb-lg-0">
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
                <ul class="dropdown-menu dropdown-small-menu" aria-labelledby="dropdownMenuButton1">
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
                  onClick={handleLinkClick}
                >
                  Yarn/Textile Sourcing
                </Link>
              </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/cotton-yarn"
                      className={`nav-link ${activeLink("/cotton-yarn")}`}
                      onClick={handleLinkClick}
                    >
                      Cotton Yarn
                    </Link>
                  </li>

                  <li className="nav-item me-1">
                    <Link
                      to="/dty-yarns"
                      className={`nav-link ${activeLink("/dty-yarns")}`}
                      onClick={handleLinkClick}
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
