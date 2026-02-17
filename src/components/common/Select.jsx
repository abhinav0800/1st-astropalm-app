import React from 'react';

const Select = ({ label, options, ...props }) => (
  <div className="input-group">
    {label && <label>{label}</label>}
    <select className="glass-select" {...props}>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);
export default Select;
