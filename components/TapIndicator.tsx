import React from 'react';
import type { TapSide } from '../types';

interface TapIndicatorProps {
  side: TapSide;
  isActive: boolean;
}

const TapIndicator: React.FC<TapIndicatorProps> = ({ side, isActive }) => {
  const colorClass = side === 'left' ? 'bg-purple-600' : 'bg-pink-600';
  const activeClass = isActive
    ? 'scale-110 opacity-100 shadow-2xl'
    : 'scale-100 opacity-30 shadow-none';
  const shadowColor = side === 'left' ? 'shadow-purple-500/50' : 'shadow-pink-500/50';
  const label = side === 'left' ? 'Izquierda' : 'Derecha';

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div
        className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full transition-all duration-150 ease-in-out ${colorClass} ${activeClass} ${isActive ? shadowColor : ''}`}
      />
      <span className={`text-xs sm:text-sm font-medium transition-opacity duration-150 ${isActive ? 'opacity-100 text-white' : 'opacity-50 text-gray-400'}`}>
        {label}
      </span>
    </div>
  );
};

export default TapIndicator;