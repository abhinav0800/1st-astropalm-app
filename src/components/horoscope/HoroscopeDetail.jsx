import React from 'react';

const HoroscopeDetail = ({ sign, reading }) => (
  <div className="animate-fadeIn">
    <div className="text-center mb-6">
      <div className="text-5xl mb-2">♈</div>
      <h2 className="text-2xl font-bold">{sign}</h2>
    </div>
    <div className="glass p-6 rounded-3xl leading-relaxed text-secondary">
      {reading}
    </div>
  </div>
);
export default HoroscopeDetail;
