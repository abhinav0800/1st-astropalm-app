import React, { useState } from 'react';
import Header from '../common/Header';
import HandSelector from '../palm/HandSelector';
import ImageUploader from '../palm/ImageUploader';
import CameraCapture from '../palm/CameraCapture';
import Button from '../common/Button';
import { palmAnalysisService } from '../../services/palmAnalysisService';
import { useLanguage } from '../../context/LanguageContext';

const PalmScanScreen = ({ navigate, goBack }) => {
  const { language } = useLanguage();
  const [hand, setHand] = useState('right');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const startAnalysis = async () => {
    setLoading(true);
    try {
      const result = await palmAnalysisService.processScan(image, hand, language);
      navigate('palm-result', { result });
    } catch (e) {
      alert("Analysis failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="screen">
      <Header title="Palm Scan" showBack onBack={goBack} />
      <div className="p-6 flex flex-col gap-6">
        {!image ? (
          <>
            <HandSelector selected={hand} onSelect={setHand} />
            <CameraCapture onCapture={setImage} />
            <div className="divider-text">OR</div>
            <ImageUploader onUpload={setImage} />
          </>
        ) : (
          <div className="animate-fadeIn">
            <img src={image} className="rounded-2xl w-full border-2 border-accent-primary" />
            <div className="flex gap-4 mt-6">
              <Button variant="secondary" className="flex-1" onClick={() => setImage(null)}>Retake</Button>
              <Button variant="primary" className="flex-1" loading={loading} onClick={startAnalysis}>Analyze</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PalmScanScreen;
