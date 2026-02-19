import React from 'react';
import { ZODIAC_SIGNS } from '../../utils/constants';
import ZodiacCard from './ZodiacCard';

const ZodiacSelector = ({ onSelect }) => (
  <div className="grid grid-cols-3 gap-3">
    {ZODIAC_SIGNS.map(sign => (
      <ZodiacCard key={sign} name={sign} onClick={() => onSelect(sign)} />
    ))}
  </div>
);
export default ZodiacSelector;
