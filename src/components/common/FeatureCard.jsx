import React from 'react';

const FeatureCard = ({ title, icon, onClick }) => (
  <div className="feature-card" onClick={onClick}>
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
  </div>
);
export default FeatureCard;
