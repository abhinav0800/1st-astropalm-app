import React from 'react';
import Button from '../common/Button';

const ErrorScreen = ({ navigate }) => (
  <div className="screen flex items-center justify-center p-8 text-center">
    <div>
      <div className="text-6xl mb-6">☄️</div>
      <h2 className="text-2xl font-bold mb-4">A Cosmic Error Occurred</h2>
      <p className="text-secondary mb-8">The celestial alignment was disrupted. Please try restarting the journey.</p>
      <Button onClick={() => window.location.reload()}>Refresh App</Button>
    </div>
  </div>
);
export default ErrorScreen;
