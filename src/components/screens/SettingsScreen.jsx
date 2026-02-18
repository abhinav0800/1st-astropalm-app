import React from 'react';
import Header from '../common/Header';
import SettingsItem from '../settings/SettingsItem';
import LanguageSelector from '../settings/LanguageSelector';
import BottomNav from '../common/BottomNav';

const SettingsScreen = ({ navigate }) => (
  <div className="screen screen-with-nav">
    <Header title="Settings" />
    <div className="p-6 space-y-4">
      <div className="settings-section">
        <h3 className="settings-section-title">Preference</h3>
        <LanguageSelector />
      </div>
      <div className="settings-section">
        <h3 className="settings-section-title">Legal</h3>
        <SettingsItem label="Privacy Policy" onClick={() => navigate('privacy-policy')} />
        <SettingsItem label="Terms of Service" />
      </div>
      <div className="settings-section">
        <h3 className="settings-section-title">App</h3>
        <SettingsItem label="Share App" />
        <SettingsItem label="Rate Us" />
        <div className="p-4 text-center text-xs text-muted">Version 1.0.0</div>
      </div>
    </div>
    <BottomNav activeTab="settings" onTabChange={(tab) => navigate(tab)} />
  </div>
);
export default SettingsScreen;
