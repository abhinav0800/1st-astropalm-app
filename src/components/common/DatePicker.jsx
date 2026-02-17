import React from 'react';

const DatePicker = ({ label, ...props }) => (
  <div className="input-group">
    {label && <label>{label}</label>}
    <input type="date" className="glass-input" {...props} />
  </div>
);
export default DatePicker;
