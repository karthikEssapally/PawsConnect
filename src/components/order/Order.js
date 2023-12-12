// Order.js

import React from 'react';
import ContactImage from '../../img/team-5.jpg';
import './Order.css';

const Order = () => {
  return (
    <div className="container1">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1 className="mb-5">Contact Us</h1>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input name="name" type="text" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input name="email" type="email" className="form-control" required />
                <div id="emailHelp" className="form-text">
                  Don't worry, we won't share it with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Phone (optional)</label>
                <input name="phone" className="form-control" />
                <div id="phoneHelp" className="form-text">
                  If you rather talk to a human directly.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea name="message" className="form-control" rows="3" required></textarea>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>

          <div className="col-1"></div>

          <div className="col-6 position-relative">
            <img src={ContactImage} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
