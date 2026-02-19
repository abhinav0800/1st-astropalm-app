import React from 'react';
import { LANGUAGES } from '../../utils/constants';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="grid grid-cols-2 gap-2">
      {LANGUAGES.map(lang => (
        <div 
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition ${
            language === lang.code ? 'border-accent-glow bg-white/10' : 'border-white/10'
          }`}
        >
          <span>{lang.flag}</span>
          <span className="text-xs">{lang.name}</span>
        </div>
      ))}
    </div>
  );
};
export default LanguageSelector;
