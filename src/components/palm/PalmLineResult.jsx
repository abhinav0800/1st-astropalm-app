import React from 'react';

const PalmLineResult = ({ label, interpretation }) => (
  <div className="mb-4">
    <h5 className="text-accent-glow font-bold text-sm mb-1">{label}</h5>
    <p className="text-sm text-secondary italic">{interpretation}</p>
  </div>
);
export default PalmLineResult;
