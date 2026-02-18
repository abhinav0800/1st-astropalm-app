import React, { useState } from 'react';
import { ONBOARDING_DATA } from '../../data/onboardingSlides';
import Button from '../common/Button';
import SwipeContainer from '../common/SwipeContainer';

const OnboardingScreen = ({ navigate }) => {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < ONBOARDING_DATA.length - 1) setStep(step + 1);
    else navigate('profile-setup');
  };

  return (
    <SwipeContainer onSwipeLeft={next}>
      <div className="screen p-8 flex flex-col items-center text-center">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-3xl font-bold mb-4">{ONBOARDING_DATA[step].title}</h2>
          <p className="text-secondary">{ONBOARDING_DATA[step].desc}</p>
        </div>
        <div className="w-full pb-8">
          <Button onClick={next} fullWidth>Next</Button>
        </div>
      </div>
    </SwipeContainer>
  );
};
export default OnboardingScreen;
