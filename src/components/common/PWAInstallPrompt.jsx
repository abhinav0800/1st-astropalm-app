import React from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import Button from './Button';

const PWAInstallPrompt = () => {
  const { isInstallable, installPWA } = usePWAInstall();
  if (!isInstallable) return null;

  return (
    <div className="glass p-4 rounded-xl flex items-center justify-between m-4">
      <span className="text-sm">Install App for better experience</span>
      <Button onClick={installPWA} variant="primary" className="btn-sm">Install</Button>
    </div>
  );
};
export default PWAInstallPrompt;
