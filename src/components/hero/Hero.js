import React from "react";
import { BiGeoAlt, BiEnvelopeOpen, BiPhoneVibrate } from "react-icons/bi";
import heroImage from "../../img/hero.jpg"; // Import your hero image
import "./Hero.css"; // Import a separate CSS file for hero styles

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    color: "white",
    zIndex: 1, // Ensure content appears on top of the image
  };

  return (
    <>
      {/* Hero Start */}
      <div className="hero-container">
        <div className="container-fluid bg-primary py-4 mb-4 hero-header" style={heroStyle}>
          <div className="container py-4">
            <div className="row justify-content-start">
              <div className="col-lg-8 text-center text-lg-start">
                {/* Hero content */}
                <h1 className="display-1 text-uppercase text-dark mb-lg-3" style={{ fontSize: "3rem" }}>
                  Discover Your New Best Friend
                </h1>
                <h1 className="text-uppercase text-white mb-lg-3" style={{ fontSize: "1.5rem" }}>
                  Find the Perfect Canine Companion
                </h1>
                <p className="fs-5 text-white mb-lg-3" style={{ fontSize: "1rem" }}>
                  Welcome to our exclusive collection of lovable dogs, each waiting to bring joy and companionship to your home. At Dog Haven, we specialize in connecting families with their ideal furry friends, ensuring a lifetime of love and happiness.
                </p>
                <p className="fs-5 text-white mb-lg-3" style={{ fontSize: "1rem" }}>
                  Explore our diverse range of breeds, each carefully selected for their unique qualities. Whether you're looking for a playful puppy, a loyal guardian, or a cuddly companion, we have the perfect match for every family and lifestyle.
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-4">
                  <a href="/shop" className="btn btn-outline-light border-2 py-md-3 px-md-4 me-4" style={{ fontSize: "1rem" }}>
                    Browse Our Dogs
                  </a>
                  <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                    <span></span>
                  </button>
                  <h5 className="font-weight-normal text-white m-0 ms-3 d-none d-sm-block" style={{ fontSize: "0.9rem" }}>
                    Meet Our Canine Family
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
    </>
  );
};

export default Hero;
