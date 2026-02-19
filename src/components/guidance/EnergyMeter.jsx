import React from 'react';

const EnergyMeter = ({ level, label }) => (
  <div className="w-full">
    <div className="flex justify-between text-xs mb-1 uppercase tracking-widest text-muted">
      <span>{label}</span>
      <span>{level}%</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div className="h-full bg-accent-glow transition-all" style={{ width: `${level}%` }} />
    </div>
  </div>
);
export default EnergyMeter;
