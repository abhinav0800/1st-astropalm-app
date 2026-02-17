import React from 'react';

const Input = ({ label, type="text", ...props }) => (
  <div className="input-group">
    {label && <label>{label}</label>}
    <input type={type} className="glass-input" {...props} />
  </div>
);
export default Input;
