import React from 'react';
import Button from '../common/Button';

const CameraCapture = ({ onCapture }) => {
  const handleCamera = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => onCapture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <input type="file" capture="environment" accept="image/*" id="palm-cam" className="hidden" onChange={handleCamera} />
      <label htmlFor="palm-cam" className="w-full block">
        <Button variant="primary" fullWidth as="div">Open Camera</Button>
      </label>
    </div>
  );
};
export default CameraCapture;
