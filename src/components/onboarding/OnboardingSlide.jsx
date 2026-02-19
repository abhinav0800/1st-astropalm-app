import React from 'react';

const OnboardingSlide = ({ title, description, icon }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center h-full">
    <div className="text-8xl mb-12 animate-float">{icon}</div>
    <h2 className="text-3xl font-heading mb-4">{title}</h2>
    <p className="text-secondary leading-relaxed">{description}</p>
  </div>
);
export default OnboardingSlide;
