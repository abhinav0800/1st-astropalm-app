import React from 'react';

const TimePicker = ({ label, ...props }) => (
  <div className="input-group">
    {label && <label>{label}</label>}
    <input type="time" className="glass-input" {...props} />
  </div>
);
export default TimePicker;
