import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import { horoscopeService } from '../../services/horoscopeService';
import { useLanguage } from '../../context/LanguageContext';

const HoroscopeDetailScreen = ({ screenData }) => {
  const { language } = useLanguage();
  const [data, setData] = useState("");
  const sign = screenData?.sign;

  useEffect(() => {
    horoscopeService.getDailyHoroscope(sign, language).then(setData);
  }, [sign]);

  return (
    <div className="screen">
      <Header title={sign} />
      <div className="p-6 overflow-auto">
        <div className="glass p-6 rounded-3xl">
          {data || "Loading cosmic transit..."}
        </div>
      </div>
    </div>
  );
};
export default HoroscopeDetailScreen;
