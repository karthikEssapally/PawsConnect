
import React from 'react';
import './PetExerciseGrid.css'
import { FaBiohazard } from 'react-icons/fa';

const PetExerciseGrid = () => {
  return (
    <div className="service-item bg-light d-flex p-4">
      <FaBiohazard className="display-1 me-4 icon-color" />
      <div>
      <h5 className="text-uppercase mb-5 mt-4">Pet Exercise</h5>
        <div className="d-flex align-items-center mb-3">
          <img
            src="../../img/team-4.jpg" // Update the path to your image
            alt="Pet Exercise"
            className="rounded-circle me-3 img-fluid w-100" // Make the image responsive
            style={{ maxWidth: '200px', maxHeight: '200px' }} // Set max width and height as needed
          />
        </div>
        <p>
           Engage in mindful meditation with your pet in a peaceful outdoor setting. Find a quiet spot, sit together, and enjoy the calming atmosphere. This practice not only benefits you but also brings tranquility to your pet's mind and body.
        </p>
        <p>
          With a commitment to excellence, we offer a range of services including
          vaccinations, dental care, and nutritional counseling. Our compassionate
          team is dedicated to providing the best possible care for your beloved pets.
        </p>
        <p>
           Start your day with leisurely morning strolls with your pet. Explore your neighborhood and let your furry companion sniff around. Morning walks are a great way to kickstart their day and ensure a positive and energetic start.",

        </p>
      </div>
    </div>
  );
};

export default PetExerciseGrid;
