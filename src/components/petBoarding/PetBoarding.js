// PetBoarding.js
import React from "react";
import './PetBoarding.css';
const PetBoarding = () => {
  return (
    <div className="pet-boarding-container">
      <img
        src="../../img/team-4.jpg"
        alt="Pet Boarding"
        className="pet-boarding-image"
      />
      <div className="pet-boarding-content">
        <h3>Pet Boarding Services</h3>
        <p>
          Welcome to our premier pet boarding services where your furry friends
          receive top-notch care and attention in a comfortable environment.
        </p>
        <p>
          Our spacious and secure facilities ensure that your pets feel at home
          during their stay. We provide regular exercise, playtime, and personal
          attention to keep them happy and healthy.
        </p>
        <p>
          Our experienced and caring staff is dedicated to meeting the unique
          needs of each pet. Rest assured that your pets are in safe hands while
          you're away.
        </p>
        <p>
          We offer flexible boarding options to accommodate various needs and
          ensure a stress-free experience for both pets and owners.
        </p>
        <p>
          Trust us for a reliable and caring pet boarding experience. Your pets
          deserve the best, and we are here to provide it.
        </p>
      </div>
    </div>
  );
};

export default PetBoarding;
