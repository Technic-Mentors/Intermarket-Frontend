import { React, useEffect, useState } from "react";
import Galleryimg1 from "../Assets/Images/Gallery/gallery-img1.avif";
import Galleryimg2 from "../Assets/Images/Gallery/gallery-img2.avif";
import Galleryimg3 from "../Assets/Images/Gallery/gallery-img3.avif";
import Galleryimg4 from "../Assets/Images/Gallery/gallery-img4.avif";
import Galleryimg5 from "../Assets/Images/Gallery/gallery-img5.avif";
import Galleryimg6 from "../Assets/Images/Gallery/gallery-img6.avif";
import Galleryimg7 from "../Assets/Images/Gallery/gallery-img7.avif";
import Galleryimg8 from "../Assets/Images/Gallery/gallery-img8.avif";
import Galleryimg9 from "../Assets/Images/Gallery/gallery-img9.avif";
import Galleryimg10 from "../Assets/Images/Gallery/gallery-img10.avif";
// import Galleryimg11 from "../Assets/Images/Gallery/gallery-img11.avif";
import Galleryimg12 from "../Assets/Images/Gallery/gallery-img12.avif";
import galleryBg from "../Assets/Images/gallery-bg.avif"
import galleryBg1 from "../Assets/Images/gallery-bg1.avif"
function Media() {
  const [showImage, setShowImage] = useState();
const [mediaImage,setMediaImage] = useState("")
  const handleImage = (image) => {
    setShowImage(image);
  };
useEffect(()=>{
  const handleResize = ()=>{
    if(window.innerWidth>600){
      setMediaImage(galleryBg)
    } else{
      setMediaImage(galleryBg1)
    }
  }
  handleResize()
  window.addEventListener("resize",handleResize)
  return(()=>{
    window.removeEventListener("resize",handleResize)
  })
},[])
  const [downloadLinks] = useState([
    { name: "Socks Catalogue", url: "/src/Assets/Downloads/Socks-Catalogue-1-1.pdf" },
    { name: "Company Profile", url: "/src/Assets/Downloads/Inter-Market-Company-Profile.pdf" },
    { name: "Green Socks - Loom", url: "/src/Assets/Downloads/Green-Socks-LOOM.pdf" }
  ]);

  const handleDownload = (url) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    // Set the download attribute to force download
    link.download = '';
    // Append the anchor to the body
    document.body.appendChild(link);
    // Trigger a click event on the anchor
    link.click();
    // Remove the anchor from the body
    document.body.removeChild(link);
  }


  return (
    <div>
      <section className="all-header-bg" style={{backgroundImage: `url(${mediaImage})`}}>
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row py-8 d-flex justify-content-center align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading text-white">
                  Our Media Visuals And Resources
                </h2>
                <p className="fw-bold text-light">WhatsApp:&nbsp;+92 344 444 2678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-gallery py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headings1 mb-5 text-center">
                <h6 className="subtitle">Our Gallery</h6>
                <h2 className="main-heading">Inter Market Knit At A Glance</h2>
              </div>

              <section className>
                {/* Section: Images */}
                <section className>
                  <div className="row">
                    <div className="col-md-4 item col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg1}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg1)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg2}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg2)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal2"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg3}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg3)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal3"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg4}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos gallery-photos"
                          onClick={() => handleImage(Galleryimg4)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal1"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg5}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg5)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal2"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg6}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg6)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal3"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg7}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg7)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal1"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg8}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg8)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal2"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg9}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg9)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal3"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg10}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg10)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal1"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg11}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg11)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal2"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div> */}
                    <div className="col-md-4 col-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={Galleryimg12}
                          alt="socks-manufacturer"
                          className="w-100 gallery-photos"
                          onClick={() => handleImage(Galleryimg12)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <a
                          href="#!"
                          data-mdb-modal-init
                          data-mdb-target="#exampleModal3"
                        >
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="downloads py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              <div className="headings1 mb-5">
                <h2 className="main-heading text-center">Our Catalogues</h2>
              </div>
              <div className="row download-row  justify-content-center">
              {downloadLinks.map((link, index) => (
                <div className="col-md-4 mt-2" key={index}>
                  <div className="download-box">
                    {/* Use a button instead of anchor tag */}
                    <button className="download-button" onClick={() => handleDownload(link.url)}>
                      <div className="icon-box d-flex">
                        <i className="fa-solid fa-download"></i>&nbsp;&nbsp;
                        {link.name}
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog my-modal modal-lg">
          <div className="modal-content transparent-background">
            <div className="d-flex justify-content-end text-light">
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="image-container">
                <img
                  src={showImage}
                  alt=""
                  className="img-fluid"
                  id="zoomedImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
