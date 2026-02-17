import React from 'react';

const Disclaimer = ({ text }) => (
  <p className="disclaimer-text">
    {text || "Guidance purposes only. No guarantees provided."}
  </p>
);
export default Disclaimer;
