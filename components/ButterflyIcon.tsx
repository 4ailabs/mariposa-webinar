
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ButterflyIconProps {
  className?: string;
  isTransforming?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ 
  className = '', 
  isTransforming = false, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 32,
    md: 64, 
    lg: 96
  };

  const animationClass = isTransforming ? 'animate-pulse transform transition-all duration-1000' : '';

  return (
    <div className={`${animationClass} ${className}`}>
      <Sparkles 
        size={sizeClasses[size]}
        className={`text-purple-400 ${isTransforming ? 'text-pink-400' : ''}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default ButterflyIcon;
