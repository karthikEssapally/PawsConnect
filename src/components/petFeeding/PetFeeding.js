import React from "react";
import './PetFeeding.css';
const PetFeeding = () => {
  return (
    <div className="pet-feeding-container">
      <img
       src="../../img/team-4.jpg" // Replace with the correct image URL
        alt="Pet Feeding"
        className="pet-feeding-image"
      />
      <div className="pet-feeding-content">
        <h3>Feeding Your Pet</h3>
        <p>
          Providing the right nutrition is crucial for your pet's well-being.
          Choose a balanced diet that meets their specific dietary needs and
          supports their overall health.
        </p>
        <p>
          Consider factors such as your pet's age, size, and activity level
          when selecting the appropriate food. Consult with your veterinarian
          for personalized feeding recommendations.
        </p>
        <p>
          Ensure access to fresh and clean water at all times. Hydration is
          essential for your pet's health and helps prevent various health issues.
        </p>
        <p>
          Be mindful of portion sizes to prevent overfeeding or underfeeding.
          Follow the recommended feeding guidelines on the pet food packaging.
        </p>
        <p>
          Monitor your pet's weight and adjust their diet accordingly. Regular
          veterinary check-ups can help assess and adjust their nutritional needs.
        </p>
        {/* Add more paragraphs as needed */}
      </div>
    </div>
  );
};

export default PetFeeding;
