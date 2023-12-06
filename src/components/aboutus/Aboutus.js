import React from 'react';
import './Aboutus.css';
import Footer from '../footer/Footer';
function Aboutus() {
  return (
    <div className="container-fluid py-5" style={{ marginTop: '30px' }}>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded"
                src="../../img/about.jpg"
                style={{ objectFit: 'cover' }}
                alt="About"
              />
            </div>
          </div>
          <div className="col-lg-7">
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{ borderColor: 'black' }}>
              <h3 className="text-uppercase">About Us</h3>
              <h1 className="display-5 text-uppercase mb-0">Connecting You with Your Perfect Pet</h1>
            </div>
            <h4 className="text-body mb-4">
              Welcome to PetHaven, your go-to destination for finding your ideal furry companion. We specialize in connecting loving families with pets of all breeds. Whether you're looking for a loyal canine friend, a playful feline companion, or any other wonderful pet, we've got you covered.
            </h4>
            <div className="bg-light p-4">
              <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                <li className="nav-item w-50" role="presentation">
                  <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">
                    Our Mission
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                  <p className="mb-0">
                    Our mission is to make the process of finding and welcoming a new pet into your home a joyful and memorable experience. We are committed to offering not only quality pets but also providing a range of nutritious food options to keep your pets healthy and happy throughout their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Aboutus;
