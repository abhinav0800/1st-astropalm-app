import React from 'react';

const Avatar = ({ name, src, size = 'md' }) => (
  <div className={`avatar avatar-${size}`}>
    {src ? <img src={src} alt={name} /> : <span>{name?.charAt(0)}</span>}
  </div>
);
export default Avatar;
