import React from 'react';
import Button from '../common/Button';

const ImageUploader = ({ onUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => onUpload(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <input type="file" id="palm-upload" className="hidden" accept="image/*" onChange={handleChange} />
      <label htmlFor="palm-upload" className="w-full block">
        <Button variant="secondary" fullWidth as="div">Pick from Gallery</Button>
      </label>
    </div>
  );
};
export default ImageUploader;
