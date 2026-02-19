import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import Select from '../common/Select';
import { ZODIAC_SIGNS } from '../../utils/constants';

const PartnerInput = ({ onCalculate, loading }) => {
  const [p1, setP1] = useState({ name: '', zodiac: 'Aries' });
  const [p2, setP2] = useState({ name: '', zodiac: 'Aries' });

  return (
    <div className="space-y-6">
      <div className="glass p-4 rounded-2xl">
        <h4 className="text-xs font-bold mb-4 opacity-50">PARTNER 1</h4>
        <Input placeholder="Name" value={p1.name} onChange={e => setP1({...p1, name: e.target.value})} />
        <Select options={ZODIAC_SIGNS} onChange={e => setP1({...p1, zodiac: e.target.value})} />
      </div>
      <div className="text-center text-2xl">💖</div>
      <div className="glass p-4 rounded-2xl">
        <h4 className="text-xs font-bold mb-4 opacity-50">PARTNER 2</h4>
        <Input placeholder="Name" value={p2.name} onChange={e => setP2({...p2, name: e.target.value})} />
        <Select options={ZODIAC_SIGNS} onChange={e => setP2({...p2, zodiac: e.target.value})} />
      </div>
      <Button fullWidth loading={loading} onClick={() => onCalculate(p1, p2)}>Check Connection</Button>
    </div>
  );
};
export default PartnerInput;
