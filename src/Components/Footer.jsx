import React from 'react'
import LOGO from '../Assets/Images/inter-market-logo.png'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const scrollTopSamePage = (path) => {
    if (path === location.pathname) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={LOGO} alt="" className="img-fluid logo-footer mt-3 mb-3" />
              <div className="footer-about">
                <p>Founded in 1998 in Pakistan, through our knowledge and
                  expertise, accumulated over 2 decades, we are recognized as
                  innovative developers and a quality-centric company.  </p>
              </div>

            </div>
            <div className="col-md-3">
              <div className="useful-link">
                <h2 className='mt-3'>Useful Links</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <div className="use-links">
                  <ul style={{ padding: '0', margin: '0', listStyle: 'none', lineHeight: '2.5rem' }}>
                    <li><Link to="/" onClick={()=> scrollTopSamePage("/")}><i className="fa-solid fa-angles-right"></i> Home</Link></li>
                    <li><Link to="/about" onClick={()=> scrollTopSamePage("/about")}><i className="fa-solid fa-angles-right"></i> About Us</Link></li>
                    <li><Link to="/media" onClick={()=> scrollTopSamePage("/media")}><i className="fa-solid fa-angles-right"></i> Gallery</Link></li>
                    <li><Link to="/contact" onClick={()=> scrollTopSamePage("/contact")}><i className="fa-solid fa-angles-right"></i> Contact</Link></li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="social-links">
                <h2 className='mt-3'>Follow Us</h2>
                <img src="./assets/images/about/home_line.png" alt="" />
                <div className="social-icons">
                  <ul style={{ padding: '0', margin: '0', listStyle: 'none', lineHeight: '2.5rem' }}>
                    <li><a href="https://www.facebook.com/profile.php?id=100067104593279"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                    <li><a href="https://imlpk.com/"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/inter-market-knit-pvt-ltd./"><i className="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
                    <li><a href="http://knitinter/"><i className="fa-brands fa-twitter"></i> Twitter/X</a></li>
                    <li><a href="http://wa.me/923444442678" target='blank'><i className="fa-brands fa-whatsapp"></i> +92 344 444 2678</a></li>
                  </ul>
                </div>
              </div>


            </div>
            <div className="col-md-3">
              <div className="address">
                <h2 className='mt-3'>Address</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <div className="address-links">
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0', lineHeight: '2.5rem' }}>
                    <li className="address1"><i className="fa-solid fa-location-dot"></i> 120/S – Quaid-e-Azam Industrial Estate, Lahore 54770, Punjab, Pakistan
                    </li>
                    <li><a href="mailto:info@imlpk.com"><i className="fa-solid fa-envelope"></i> info@imlpk.com</a></li>
                    <li><a href="tel:+923444442678"><i className="fa-solid fa-phone"></i> +92 344 444 2678</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </footer>

      <section id="copy-right">
        <div className="copy-right-sec"><i className="fa-solid fa-copyright"></i>&nbsp;
          Copyright 2024 Inter Market. Developed With Love By <a href="https://technicmentors.com">Technic Mentors</a>
        </div>
      </section>
    </div>
  )
}

export default Footer
