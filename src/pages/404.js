import FuzzyText from '@/components/FuzzyText';
import React from 'react';

const hoverIntensity = 0.27;
const enableHover = 0.4;

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          404
        </FuzzyText>
      </div>
    </div>
  );
}
