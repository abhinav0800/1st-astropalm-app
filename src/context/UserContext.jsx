import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const data = await storageService.get('userProfile');
      setUser(data);
      setIsLoading(false);
    };
    loadUser();
  }, []);

  const updateProfile = async (profileData) => {
    setUser(profileData);
    await storageService.set('userProfile', profileData);
  };

  return (
    <UserContext.Provider value={{ user, updateProfile, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
