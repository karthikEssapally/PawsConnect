import React from 'react';
import TreatmentDetails from '../treatmentDetails/TreatmentDetails';
import {
  FaHome,
  FaUtensils,
  FaCut,
  FaCat,
  FaDog,
  FaBiohazard,
} from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import './Services.css'; // Make sure to import your CSS file

function Services() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
          <h2 className="text text-uppercase">Services</h2>
          <h1 className="display-3 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
        </div>
        <div className="row g-5">
          <div className="col-md-6">
            <div className="service-item bg-light d-flex p-4">
              <FaHome className="display-1 me-4 icon-color" />
              <div>
                <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                <p>Experience top-notch pet care services with a team of dedicated professionals. Your pet's comfort is our priority, providing a safe and loving environment.</p>
                <a className="text-primary text-uppercase" href="#">
                  Read More<BiChevronRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item bg-light d-flex p-4">
              <FaUtensils className="display-1 me-4 icon-color" />
              <div>
                <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                <p>Ensure your pets receive nutritious meals tailored to their needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="text-primary text-uppercase" href="#">
                  Read More<BiChevronRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item bg-light d-flex p-4">
              <FaCut className="display-1 me-4 icon-color" />
              <div>
                <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                <p>Enhance your pet's well-being with our expert grooming services. Our skilled team provides top-notch care, ensuring your furry friend feels and looks their best.</p>
                <a className="text-primary text-uppercase" href="#">
                  Read More<BiChevronRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item bg-light d-flex p-4">
              <FaCat className="display-1 me-4 icon-color" />
              <div>
                <h5 className="text-uppercase mb-3">Pet Training</h5>
                <p>Enhance your pet's behavior and skills with our expert training services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="text-primary text-uppercase" href="#">
                  Read More<BiChevronRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item bg-light d-flex p-4">
              <FaDog className="display-1 me-4 icon-color" />
              <div>
                <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                <p>Engage your furry friend with stimulating activities. Whether it's a playful game of fetch or a refreshing walk, keeping your pet active is essential for their well-being.</p>
                <a className="text-primary text-uppercase" href="#">
                  Read More<BiChevronRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item bg-light d-flex p-4">
              <FaBiohazard className="display-1 me-4 icon-color" />
            <div>
               <h5 className="text-uppercase mb-3">Pet Treatment</h5>
               <p>
        Personalized care ensuring the well-being of your pet. Holistic treatments for their optimal health and happiness.
    </p>
             <a className="text-primary text-uppercase" href="/treatmentDetails">
              Read More<BiChevronRight />
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Services;
