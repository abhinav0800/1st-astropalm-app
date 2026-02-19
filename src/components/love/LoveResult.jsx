import React from 'react';
import Header from '../common/Header';

const LoveResult = ({ reading }) => (
  <div className="animate-fadeIn">
    <div className="glass p-6 rounded-3xl">
      <p className="text-secondary italic leading-loose">{reading}</p>
    </div>
  </div>
);
export default LoveResult;
