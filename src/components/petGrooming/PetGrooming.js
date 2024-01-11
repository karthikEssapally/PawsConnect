import React from "react";
import './PetGrooming.css';
const PetGrooming = () => {
  const contentStyle = {
    textAlign: 'left',
    maxWidth: '800px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
  };
  return (
    <div className="pet-grooming-container">
      <img
        src="../../img/team-4.jpg"
        alt="Pet Grooming"
        className="pet-grooming-image"
      />
       <div style={contentStyle} className="pet-grooming-content">
        <h3>Pet Grooming Essentials</h3>
        <p>
          Regular grooming is essential for maintaining your pet's health and
          overall well-being. Beyond aesthetics, grooming promotes cleanliness
          and helps prevent various health issues.
        </p>
        <p>
          Brushing your pet's coat is not only a delightful bonding activity but
          also crucial for preventing mats and reducing shedding. The frequency
          of brushing depends on your pet's breed and coat type.
        </p>
        <p>
          Pay special attention to your pet's ears during grooming. Clean ears
          prevent infections, and regular inspection helps identify signs of
          ear issues early. Use a gentle, vet-approved ear cleaner if necessary.
        </p>
        <p>
          Dental care is often overlooked but is a vital aspect of grooming.
          Regular brushing and providing dental treats contribute to good oral
          hygiene, preventing dental diseases and promoting fresh breath.
        </p>
        <p>
          Nail trimming is essential to prevent discomfort and potential
          injuries. Get your pet accustomed to nail trims gradually, and use
          proper tools to avoid cutting into the quick of the nail.
        </p>
        <p>
          Bathing your pet should be done when necessary, considering their
          activity level and coat type. Use pet-friendly shampoos, and ensure
          thorough rinsing to prevent skin irritation.
        </p>
        <p>
          Grooming sessions offer an excellent opportunity to check for any
          lumps, bumps, or abnormalities on your pet's skin. Early detection of
          skin issues is crucial for prompt veterinary attention if needed.
        </p>
        <p>
          Consider your pet's specific grooming needs based on their breed,
          age, and health conditions. Some pets may require professional
          grooming services for specialized care.
        </p>
        <p>
          Use grooming time to inspect your pet's eyes. Ensure they are clear
          and free from discharge. If you notice any issues, consult with your
          veterinarian promptly.
        </p>
        <p>
          Beyond physical grooming, pamper your pet with love and positive
          reinforcement during grooming sessions. Make it an enjoyable
          experience for both you and your furry friend.
        </p>
          {/* Form Section (you can customize this based on your needs) */}
          <form style={formStyle}>
          {/* Add form fields like name, email, phone, preferred date/time, etc. */}
          <label htmlFor="petName">Pet's Name:</label>
          <input type="text" id="petName" name="petName" required />

          <label htmlFor="ownerName">Your Name:</label>
          <input type="text" id="ownerName" name="ownerName" required />

          {/* Add more form fields as needed */}
          
          <label htmlFor="preferredDate">Preferred Date:</label>
          <input type="date" id="preferredDate" name="preferredDate" required />

          <label htmlFor="preferredTime">Preferred Time:</label>
          <input type="time" id="preferredTime" name="preferredTime" required />

          <button type="submit">Book Now</button>
        </form>
        {/* End of Form Section */}
      </div>
    </div>
  );
};

export default PetGrooming;
