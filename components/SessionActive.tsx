
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Session, TapSide } from '../types';
import TapIndicator from './TapIndicator';
import ButterflyIcon from './ButterflyIcon';
import { ChevronLeft, ChevronRight, Play, Pause, Square } from 'lucide-react';

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
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [currentSide, setCurrentSide] = useState<TapSide>('left');
  const [phaseStartTime, setPhaseStartTime] = useState<number>(Date.now());
  const [isPaused, setIsPaused] = useState(false);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);

  const hapticTap = useCallback((side: TapSide) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(100);
    }
  }, []);

  const currentPhase = useMemo(() => session.phases[currentPhaseIndex], [session.phases, currentPhaseIndex]);
  const isManualControl = session.manualControl;
  const isLastPhase = currentPhaseIndex === session.phases.length - 1;
  const isFirstPhase = currentPhaseIndex === 0;
  
  // Determinar si es una sesión con mariposa (todas las sesiones EMDR)
  const isSomaticSession = session.id === 'emdr-protocolo-completo' || session.id === 'emdr-sesion-rapida' ||
                           session.id === 'emdr-recursos-positivos' || session.id === 'emdr-lugar-seguro' ||
                           session.id === 'emdr-procesamiento-rapido' || session.id === 'emdr-autocuidado-diario';

  const handleNextPhase = useCallback(() => {
    if (currentPhaseIndex < session.phases.length - 1) {
      const currentPhaseDuration = session.phases[currentPhaseIndex]?.duration || 0;
      setCurrentPhaseIndex(prev => prev + 1);
      setPhaseStartTime(Date.now());
      setTotalElapsedTime(prev => prev + currentPhaseDuration);
    }
  }, [currentPhaseIndex, session.phases.length, session.phases]);

  const handlePrevPhase = useCallback(() => {
    if (currentPhaseIndex > 0) {
      const prevPhaseDuration = session.phases[currentPhaseIndex - 1]?.duration || 0;
      setCurrentPhaseIndex(prev => prev - 1);
      setPhaseStartTime(Date.now());
      setTotalElapsedTime(prev => prev - prevPhaseDuration);
    }
  }, [currentPhaseIndex, session.phases]);

  const handlePauseToggle = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // Tapping interval for visual and haptic feedback
  useEffect(() => {
    // Mostrar círculos solo en las fases específicas donde se indica procesar/palmaditas
    const shouldShowTapping = currentPhase?.type === 'tapping' || 
                              (isSomaticSession && currentPhase?.pauseDuration && 
                               (currentPhase.text?.toLowerCase().includes('palmaditas') || 
                                currentPhase.text?.toLowerCase().includes('procesa') ||
                                currentPhase.text?.toLowerCase().includes('procesar')));
    
    if (!shouldShowTapping) return;

    const tapIntervalMs = (60 / session.bpm) * 1000;
    const tapTimer = setInterval(() => {
      setCurrentSide(prevSide => {
        const newSide = prevSide === 'left' ? 'right' : 'left';
        hapticTap(newSide);
        return newSide;
      });
    }, tapIntervalMs / 2);

    return () => clearInterval(tapTimer);
  }, [session.bpm, hapticTap, currentPhase, isSomaticSession, currentPhaseIndex]);

  // Timer for current phase duration
  useEffect(() => {
    if (isPaused || !currentPhase?.duration) return;

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - phaseStartTime) / 1000);
      const phaseDuration = currentPhase.duration || 0;
      if (elapsed >= phaseDuration) {
        if (isLastPhase) {
          onComplete();
        } else {
          handleNextPhase();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPhase, phaseStartTime, isPaused, isLastPhase, onComplete, handleNextPhase]);

  const showButterfly = isSomaticSession;

  // Determinar si la mariposa debe estar en modo transformación (durante las palmaditas)
  const butterflyTransforming = isSomaticSession && currentPhase?.pauseDuration && 
                                (currentPhase.text?.toLowerCase().includes('palmaditas') || 
                                 currentPhase.text?.toLowerCase().includes('procesa') ||
                                 currentPhase.text?.toLowerCase().includes('procesar'));

  const progressPercentage = ((currentPhaseIndex + 1) / session.phases.length) * 100;

  return (
    <div className="w-full min-h-screen flex flex-col justify-between p-4 sm:p-6 bg-gray-900 text-gray-100 animate-fade-in pb-safe">
        <header className="flex justify-between items-start gap-3 mb-4">
            <div className="text-left flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl font-bold leading-tight">{session.title}</h1>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">
                  <p>Paso {currentPhaseIndex + 1} de {session.phases.length}</p>
                  {currentPhase?.duration && (
                    <p className="hidden sm:block">Tiempo: {currentPhase.duration}s</p>
                  )}
                </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {isPaused && (
                <button onClick={handlePauseToggle} className="text-xs sm:text-sm bg-green-700 active:bg-green-600 hover:bg-green-600 px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 touch-manipulation">
                  <Play size={16} />
                  <span className="hidden sm:inline">Reanudar</span>
                </button>
              )}
              <button onClick={onComplete} className="text-xs sm:text-sm bg-gray-700 active:bg-gray-600 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 touch-manipulation">
                <Square size={16} />
                <span className="hidden sm:inline">Terminar</span>
              </button>
            </div>
        </header>

        <div className="flex-grow flex items-center justify-center text-center px-2 sm:px-4 py-6 relative my-auto">
            {showButterfly && (
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                <ButterflyIcon
                  size="lg"
                  isTransforming={butterflyTransforming}
                  className="text-purple-400 w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
            )}
            <div className="max-w-4xl w-full">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-4 px-2">
                {currentPhase?.phrase || currentPhase?.text}
              </p>
              {currentPhase?.pauseDuration && (
                <p className="text-base sm:text-lg text-purple-300 italic mt-4">
                  Pausa: {currentPhase.pauseDuration} segundos
                </p>
              )}
            </div>
        </div>

        {/* Controles manuales */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 my-4 sm:my-8">
          {isManualControl && (
            <div className="flex gap-2 sm:gap-4 w-full max-w-md px-2">
              <button
                onClick={handlePrevPhase}
                disabled={isFirstPhase}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 bg-purple-700 active:bg-purple-600 hover:bg-purple-600 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium touch-manipulation"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Anterior</span>
              </button>
              <button
                onClick={handlePauseToggle}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 bg-blue-700 active:bg-blue-600 hover:bg-blue-600 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium touch-manipulation"
              >
                {isPaused ? <Play size={20} /> : <Pause size={20} />}
                {isPaused ? 'Reanudar' : 'Pausar'}
              </button>
              <button
                onClick={handleNextPhase}
                disabled={isLastPhase}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 bg-purple-700 active:bg-purple-600 hover:bg-purple-600 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium touch-manipulation"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {(currentPhase?.type === 'tapping' || 
            (isSomaticSession && currentPhase?.pauseDuration && 
             (currentPhase.text?.toLowerCase().includes('palmaditas') || 
              currentPhase.text?.toLowerCase().includes('procesa') ||
              currentPhase.text?.toLowerCase().includes('procesar')))) && (
            <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4">
              <TapIndicator side="left" isActive={currentSide === 'left'} />
              <TapIndicator side="right" isActive={currentSide === 'right'} />
            </div>
          )}
        </div>

        <footer className="w-full mt-auto pt-4">
            <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden mb-3">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 text-center px-4 leading-relaxed">
                {isManualControl ? 'Avanza a tu ritmo con los botones' : 'La vibración háptica puede no funcionar en todos los dispositivos'}
            </p>
        </footer>
    </div>
  );
};

export default SessionActive;

