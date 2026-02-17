import { useState } from 'react';
import { imageService } from '../services/imageService';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleUpload = async (file) => {
    if (!file) return null;
    setIsUploading(true);
    try {
      const compressedBase64 = await imageService.compressImage(file);
      setPreview(compressedBase64);
      return compressedBase64;
    } catch (err) {
      console.error("Upload error", err);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return { handleUpload, isUploading, preview, setPreview };
};
