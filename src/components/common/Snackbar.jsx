import React from 'react';

const Snackbar = ({ show, message }) => (
  <div className={`snackbar ${show ? 'show' : ''}`}>
    {message}
  </div>
);
export default Snackbar;
