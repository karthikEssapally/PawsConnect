import React from 'react';
// import { BiGeoAlt, BiEnvelopeOpen, BiPhoneVibrate, BiArrowRight } from 'react-icons/bi';
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
     <div className="container-fluid custom-bg mt-5 py-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
              <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
              <p className="mb-2">Location, City, Country</p>
              <p className="mb-2">info@example.com</p>
              <p className="mb-0">+91 23456 07890</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="#">--Home</a>
                <a className="text-body mb-2" href="#">--About us</a>
                <a className="text-body mb-2" href="#">--Products</a>
                <a className="text-body mb-2" href="#">--Explore</a>
                {/* Add more links as needed */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
              <div className="d-flex flex-column justify-content-start">
              <a className="text-body mb-2" href="#">-->Home</a>
                <a className="text-body mb-2" href="#">-->About us</a>
                <a className="text-body mb-2" href="#">-->Products</a>
                <a className="text-body mb-2" href="#">-->Explore</a>
                {/* Add popular links here */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control p-3" placeholder="Your Email" />
                  <button className="btn btn-danger">Sign Up</button>
                </div>
              </form>
              <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a className="btn btn-outline-primary btn-square me-2" href="#"><AiFillTwitterSquare /></a>
                <a className="btn btn-outline-primary btn-square me-2" href="#"><AiFillFacebook /></a>
                <a className="btn btn-outline-primary btn-square me-2" href="#"><AiFillLinkedin /></a>
                <a className="btn btn-outline-primary btn-square" href="#"><AiFillYoutube /></a>
              </div>
            </div>
            <div className="col-12 text-center text-body">
              {/* Add additional links here */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; <a className="text-white" href="#">PawsConnect</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by <a className="text-white" href="/aboutus">About us</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Footer;