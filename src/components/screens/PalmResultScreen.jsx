import React from 'react';
import Header from '../common/Header';
import Button from '../common/Button';
import Disclaimer from '../common/Disclaimer';

const PalmResultScreen = ({ screenData, navigate }) => {
  const { result } = screenData || {};

  return (
    <div className="screen">
      <Header title="Your Reading" />
      <div className="p-6">
        <div className="glass p-6 rounded-3xl animate-fadeInUp">
          <h3 className="text-xl font-heading mb-4 text-accent-glow">The Lines of Destiny</h3>
          <div className="text-secondary leading-relaxed space-y-4">
            {result?.raw || "Scanning the universe..."}
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <Button fullWidth onClick={() => navigate('home')}>Back to Home</Button>
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};
export default PalmResultScreen;
