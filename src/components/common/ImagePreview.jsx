import React from 'react';

const ImagePreview = ({ src, onRemove }) => (
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent-glow">
    <img src={src} alt="Preview" className="w-full h-full object-cover" />
    <button onClick={onRemove} className="absolute top-2 right-2 bg-red-500 rounded-full p-2">✕</button>
  </div>
);
export default ImagePreview;
