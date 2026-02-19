import React from 'react';

const SettingsItem = ({ label, icon, onClick, subtext }) => (
  <div onClick={onClick} className="flex items-center justify-between p-4 glass rounded-2xl mb-3 cursor-pointer">
    <div className="flex items-center gap-4">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-sm font-medium">{label}</div>
        {subtext && <div className="text-[10px] text-muted">{subtext}</div>}
      </div>
    </div>
    <span className="text-muted">›</span>
  </div>
);
export default SettingsItem;
