import React from 'react';
import '../css/bloodFacts.css';

const BloodFacts = () => {
  const facts = [
    {
      icon: "🩸",
      title: "One Donation = Three Lives",
      description: "A single blood donation can be separated into red cells, plasma, and platelets, potentially saving up to three different patients."
    },
    {
      icon: "⏰",
      title: "Donation Takes 8-10 Minutes",
      description: "The actual blood donation process takes only 8-10 minutes, though the entire process including registration takes about an hour."
    },
    {
      icon: "🔄",
      title: "Donate Every 56 Days",
      description: "Healthy adults can donate whole blood every 56 days, or up to 6 times a year safely."
    },
    {
      icon: "💪",
      title: "Health Benefits for Donors",
      description: "Regular blood donation helps reduce iron levels, may lower risk of heart disease, and provides free health screening."
    },
    {
      icon: "🌡️",
      title: "Body Replaces Blood Quickly",
      description: "Your body replaces the plasma within 24-48 hours and red blood cells within 4-6 weeks."
    },
    {
      icon: "📊",
      title: "Only 3% Population Donates",
      description: "Despite 38% of population being eligible, only 3% actually donate blood regularly in India."
    }
  ];

  const bloodTypes = [
    { type: "O-", compatibility: "Universal Donor", color: "#dc3545" },
    { type: "AB+", compatibility: "Universal Receiver", color: "#28a745" },
    { type: "A+", compatibility: "Most Common (35.7%)", color: "#007bff" },
    { type: "O+", compatibility: "High Demand (37.4%)", color: "#fd7e14" }
  ];

  return (
    <div className="blood-facts-container">
      <div className="container">
        <div className="section-header">
          <h2>Blood Donation Facts</h2>
          <p>Learn important facts about blood donation and its impact</p>
        </div>

        {/* Facts Grid */}
        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div key={index} className="fact-card">
              <div className="fact-icon">{fact.icon}</div>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Blood Types Section */}
        <div className="blood-types-section">
          <h3>Blood Type Compatibility</h3>
          <div className="blood-types-grid">
            {bloodTypes.map((blood, index) => (
              <div key={index} className="blood-type-card" style={{borderColor: blood.color}}>
                <div className="blood-type" style={{color: blood.color}}>
                  {blood.type}
                </div>
                <div className="compatibility">{blood.compatibility}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="emergency-section">
          <div className="emergency-card">
            <h3>🚨 Emergency Blood Request</h3>
            <div className="emergency-numbers">
              <div className="number-item">
                <strong>IIT Kanpur:</strong> +91 98765 43212
              </div>
              <div className="number-item">
                <strong>24/7 Helpline:</strong> +91 98765 BLOOD
              </div>
            </div>
            <p>Available 24/7 for emergency blood requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodFacts;