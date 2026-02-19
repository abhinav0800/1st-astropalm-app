import React from 'react';

const OnboardingDots = ({ current, total }) => (
  <div className="flex gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <div 
        key={i} 
        className={`h-1.5 rounded-full transition-all ${current === i ? 'w-8 bg-accent-glow' : 'w-1.5 bg-white/20'}`} 
      />
    ))}
  </div>
);
export default OnboardingDots;
