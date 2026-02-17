import Compressor from 'compressorjs';

export const imageService = {
  compressImage(file) {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1024,
        maxHeight: 1024,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = () => resolve(reader.result);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }
};
