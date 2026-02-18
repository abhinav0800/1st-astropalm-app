import React from 'react';
import Header from '../common/Header';
import { ZODIAC_SIGNS } from '../../utils/constants';
import ZodiacSelector from '../horoscope/ZodiacSelector';

const HoroscopeScreen = ({ navigate, goBack }) => (
  <div className="screen">
    <Header title="Horoscope" showBack onBack={goBack} />
    <div className="p-6">
      <ZodiacSelector onSelect={(sign) => navigate('horoscope-detail', { sign })} />
    </div>
  </div>
);
export default HoroscopeScreen;
