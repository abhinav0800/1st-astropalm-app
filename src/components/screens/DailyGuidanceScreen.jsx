import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import { dailyGuidanceService } from '../../services/dailyGuidanceService';
import { useUser } from '../../context/UserContext';
import { useLanguage } from '../../context/LanguageContext';
import GuidanceCard from '../guidance/GuidanceCard';

const DailyGuidanceScreen = ({ goBack }) => {
  const { user } = useUser();
  const { language } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    dailyGuidanceService.fetchGuidance(user, language).then(setData);
  }, []);

  return (
    <div className="screen">
      <Header title="Daily Guidance" showBack onBack={goBack} />
      <div className="p-6">
        {data ? <GuidanceCard data={data} /> : <div className="text-center mt-20">Reading the Stars...</div>}
      </div>
    </div>
  );
};
export default DailyGuidanceScreen;
