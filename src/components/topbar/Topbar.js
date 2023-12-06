import React from "react";
import { BsGeoAlt, BsEnvelopeOpen, BsPhoneVibrate } from "react-icons/bs";
import "./Topbar.css"; // Import a separate CSS file for styles

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="container-fluid border-bottom d-none d-lg-block fixed-topbar">
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <BsGeoAlt className="fs-1 text-primary me-3 icon-color" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>Location, City, Country</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <BsEnvelopeOpen className="fs-1 text-primary me-3 icon-color" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <BsPhoneVibrate className="fs-1 text-primary me-3 icon-color" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
