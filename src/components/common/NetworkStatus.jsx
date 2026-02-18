import React from 'react';

const NetworkStatus = ({ isOnline }) => {
  if (isOnline) return null;
  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-xs text-center py-1 z-max">
      You are offline. Some features may not work.
    </div>
  );
};
export default NetworkStatus;
