import React from 'react';
import { useUser } from '../../context/UserContext';

const ProfileCard = () => {
  const { user } = useUser();
  return (
    <div className="glass p-6 rounded-3xl flex items-center gap-6 mb-8">
      <div className="w-20 h-20 bg-accent-primary rounded-full flex items-center justify-center text-3xl">
        {user?.name?.charAt(0) || '👤'}
      </div>
      <div>
        <h3 className="text-xl font-bold">{user?.name}</h3>
        <p className="text-xs text-muted uppercase tracking-widest">{user?.dob}</p>
      </div>
    </div>
  );
};
export default ProfileCard;
