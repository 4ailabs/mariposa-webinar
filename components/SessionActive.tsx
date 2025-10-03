
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Session, TapSide } from '../types';
import TapIndicator from './TapIndicator';

interface SessionActiveProps {
  session: Session;
  onComplete: () => void;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const SessionActive: React.FC<SessionActiveProps> = ({ session, onComplete }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentSide, setCurrentSide] = useState<TapSide>('left');
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  const hapticTap = useCallback((side: TapSide) => {
    if ('vibrate' in navigator) {
      // A short, distinct vibration
      navigator.vibrate(100);
    }
  }, []);
  
  // Main session timer and phase progression
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => {
        const newTime = prev + 1;
        
        const nextPhaseIndex = session.phases.findIndex(p => p.time === newTime);
        if (nextPhaseIndex > -1) {
          setCurrentPhaseIndex(nextPhaseIndex);
        }

        if (newTime >= session.duration) {
          onComplete();
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.duration, session.phases, onComplete]);

  // Tapping interval for visual and haptic feedback
  useEffect(() => {
    const tapIntervalMs = (60 / session.bpm) * 1000;
    const tapTimer = setInterval(() => {
      setCurrentSide(prevSide => {
        const newSide = prevSide === 'left' ? 'right' : 'left';
        hapticTap(newSide);
        return newSide;
      });
    }, tapIntervalMs / 2); // Switch side on each half interval

    return () => clearInterval(tapTimer);
  }, [session.bpm, hapticTap]);

  const currentPhase = useMemo(() => session.phases[currentPhaseIndex], [session.phases, currentPhaseIndex]);
  const progressPercentage = (elapsedTime / session.duration) * 100;

  return (
    <div className="w-full h-screen max-h-[800px] flex flex-col justify-between p-4 bg-gray-900 text-gray-100 animate-fade-in">
        <header className="flex justify-between items-center">
            <div className="text-left">
                <h1 className="text-xl font-bold">{session.title}</h1>
                <p className="text-gray-400">{formatTime(elapsedTime)} / {formatTime(session.duration)}</p>
            </div>
            <button onClick={onComplete} className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition-colors">
                Terminar
            </button>
        </header>

        <div className="flex-grow flex items-center justify-center text-center px-4">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              {currentPhase?.phrase || currentPhase?.text}
            </p>
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-8 my-8">
            <TapIndicator side="left" isActive={currentSide === 'left'} />
            <TapIndicator side="right" isActive={currentSide === 'right'} />
        </div>
        
        <footer className="w-full">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
                La vibración háptica puede no ser compatible con todos los dispositivos/navegadores.
            </p>
        </footer>
    </div>
  );
};

export default SessionActive;

