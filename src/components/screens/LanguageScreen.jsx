import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGES } from '../../utils/constants';
import Button from '../common/Button';

const LanguageScreen = ({ navigate }) => {
  const { changeLanguage } = useLanguage();

  const handleSelect = (langCode) => {
    changeLanguage(langCode);
    navigate('onboarding');
  };

  return (
    <div className="screen p-6 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-8">Choose Your Language</h2>
      <div className="grid grid-cols-2 gap-4 w-full">
        {LANGUAGES.map(lang => (
          <Button key={lang.code} variant="secondary" onClick={() => handleSelect(lang.code)}>
            {lang.flag} {lang.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default LanguageScreen;
