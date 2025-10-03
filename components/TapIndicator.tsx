import React from 'react';
import type { TapSide } from '../types';

interface TapIndicatorProps {
  side: TapSide;
  isActive: boolean;
}

const TapIndicator: React.FC<TapIndicatorProps> = ({ side, isActive }) => {
  const colorClass = side === 'left' ? 'bg-purple-600' : 'bg-pink-600';
  const activeClass = isActive
    ? 'scale-110 opacity-100 shadow-lg'
    : 'scale-100 opacity-30 shadow-none';
  const shadowColor = side === 'left' ? 'shadow-purple-500/50' : 'shadow-pink-500/50';

  return (
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full transition-all duration-150 ease-in-out ${colorClass} ${activeClass} ${isActive ? shadowColor : ''}`}
    />
  );
};

export default TapIndicator;