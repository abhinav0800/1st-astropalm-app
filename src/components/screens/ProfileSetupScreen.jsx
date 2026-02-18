import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import Input from '../common/Input';
import Button from '../common/Button';
import DatePicker from '../common/DatePicker';
import Select from '../common/Select';

const ProfileSetupScreen = ({ navigate }) => {
  const { updateProfile } = useUser();
  const [form, setForm] = useState({ name: '', dob: '', gender: 'Other' });

  const handleSave = () => {
    if (form.name && form.dob) {
      updateProfile(form);
      navigate('home');
    }
  };

  return (
    <div className="screen p-8">
      <h2 className="text-2xl font-bold mb-6">About You</h2>
      <div className="space-y-4">
        <Input label="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <DatePicker label="Date of Birth" onChange={e => setForm({...form, dob: e.target.value})} />
        <Select label="Gender" options={['Male', 'Female', 'Non-Binary', 'Other']} onChange={e => setForm({...form, gender: e.target.value})} />
      </div>
      <div className="mt-12">
        <Button onClick={handleSave} fullWidth>Unlock My Path</Button>
      </div>
    </div>
  );
};
export default ProfileSetupScreen;
