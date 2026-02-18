import React from 'react';
import Header from '../common/Header';

const PrivacyPolicyScreen = ({ goBack }) => (
  <div className="screen overflow-auto">
    <Header title="Privacy Policy" showBack onBack={goBack} />
    <div className="p-8 text-sm text-secondary space-y-4">
      <h2 className="text-xl font-bold">1. Data Collection</h2>
      <p>We do not store your palm images or personal data on our servers. All AI analysis is processed via API and transiently used.</p>
      <h2 className="text-xl font-bold">2. Usage</h2>
      <p>This app is for entertainment and symbolic guidance only. It does not collect identifiable metadata.</p>
    </div>
  </div>
);
export default PrivacyPolicyScreen;
