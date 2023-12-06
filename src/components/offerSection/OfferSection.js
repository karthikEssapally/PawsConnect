import React from 'react';
import './OfferSection.css'; // Import your custom CSS file

const OfferSection = () => {
  return (
    <div className="custom-offer-container">
      <div className="custom-offer-content">
        <div className="custom-offer-image">
          {/* Example Image */}
          <img
            className="custom-img"
            src="../../img/offer.jpg"
            alt="Special Offer Image"
          />
        </div>
        <div className="custom-content">
          <div className="custom-border ps-5 mb-5">
            <h1 className="text-dark text-uppercase">Special Offer</h1>
            <h1 className="custom-display text-uppercase text-white mb-0">
              Save 50% on all items your first order
            </h1>
          </div>
          <p className="text-white mb-3">
            Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo
            rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea
            dolore sed et.
          </p>
          <a href="/Products" className="custom-btn custom-btn-light me-3">
            Shop Now
          </a>
          <a href="/Aboutus" className="custom-btn custom-btn-outline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;