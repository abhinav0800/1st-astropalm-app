import React, { useState } from 'react';
import Header from '../common/Header';
import PartnerInput from '../love/PartnerInput';
import Button from '../common/Button';
import { loveReadingService } from '../../services/loveReadingService';
import { useLanguage } from '../../context/LanguageContext';

const LoveReadingScreen = ({ goBack }) => {
  const { language } = useLanguage();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const calculate = async (p1, p2) => {
    setLoading(true);
    const res = await loveReadingService.getCompatibility(p1, p2, language);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="screen overflow-auto">
      <Header title="Love Compatibility" showBack onBack={goBack} />
      <div className="p-6 flex flex-col gap-6">
        {!result ? (
          <PartnerInput onCalculate={calculate} loading={loading} />
        ) : (
          <div className="glass p-6 rounded-3xl animate-fadeIn">
            <h3 className="text-xl mb-4 font-heading">Love Alignment</h3>
            <p className="text-secondary leading-relaxed">{result}</p>
            <Button className="mt-6" onClick={() => setResult("")} fullWidth variant="secondary">Check Another</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default LoveReadingScreen;
