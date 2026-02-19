import React from 'react';
import Input from '../common/Input';
import DatePicker from '../common/DatePicker';

const ProfileForm = ({ data, onChange }) => (
  <div className="space-y-4">
    <Input label="Display Name" value={data.name} onChange={e => onChange({...data, name: e.target.value})} />
    <DatePicker label="Date of Birth" value={data.dob} onChange={e => onChange({...data, dob: e.target.value})} />
  </div>
);
export default ProfileForm;
