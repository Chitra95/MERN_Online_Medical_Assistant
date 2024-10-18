import React from 'react';

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="About MediConnect" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          MediConnect is a revolutionary online medical assistant platform designed to streamline healthcare access for patients and healthcare providers alike. Founded with the vision of enhancing the patient experience, MediConnect utilizes advanced technologies to facilitate symptom checking, doctor recommendations, and appointment management.
        </p>
        <p>
          Our team comprises dedicated professionals with backgrounds in healthcare, technology, and user experience design. We are committed to providing an intuitive interface that empowers users to take control of their healthcare journey. With features like real-time appointment tracking and secure data handling, we prioritize user satisfaction and security.
        </p>
        <p>
          MediConnect serves a diverse range of users, from patients seeking quick medical advice to healthcare professionals looking to manage their appointments efficiently. Our platform enables patients to easily check their symptoms, receive personalized doctor suggestions, and book appointments seamlessly.
        </p>
        
      </div>
    </div>
  );
}

export default Biography;
