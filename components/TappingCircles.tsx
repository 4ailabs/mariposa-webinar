import React, { useState, useEffect, useCallback } from 'react';
import type { TapSide } from '../types';
import TapIndicator from './TapIndicator';

interface TappingCirclesProps {
  bpm?: number;
  onComplete?: () => void;
}

const TappingCircles: React.FC<TappingCirclesProps> = ({ 
  bpm = 60, 
  onComplete 
}) => {
  const [currentSide, setCurrentSide] = useState<TapSide>('left');
  const [isActive, setIsActive] = useState(true);

  // Función para vibración háptica
  const hapticTap = useCallback((side: TapSide) => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Vibración corta de 50ms
    }
  }, []);

  // Intervalo de tapping para feedback visual y háptico
  useEffect(() => {
    if (!isActive) return;

    const tapIntervalMs = (60 / bpm) * 1000;
    const tapTimer = setInterval(() => {
      setCurrentSide(prevSide => {
        const newSide = prevSide === 'left' ? 'right' : 'left';
        hapticTap(newSide);
        return newSide;
      });
    }, tapIntervalMs / 2);

    return () => clearInterval(tapTimer);
  }, [bpm, hapticTap, isActive]);

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-4">
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/images/logo-seminario.png" 
            alt="Logo Seminario"
            className="w-8 h-8 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-white">Estimulación Bilateral</h1>
            <p className="text-xs text-gray-400">Modo Círculos</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              isActive 
                ? 'bg-red-600 hover:bg-red-500' 
                : 'bg-green-600 hover:bg-green-500'
            }`}
          >
            {isActive ? '⏸️ Pausar' : '▶️ Iniciar'}
          </button>
          
          {onComplete && (
            <button
              onClick={handleComplete}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              ✕ Cerrar
            </button>
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Instrucciones */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            {isActive ? 'Sigue los círculos con tus ojos' : 'Círculos pausados'}
          </h2>
          <p className="text-gray-400 max-w-md">
            {isActive 
              ? 'Mueve tus ojos siguiendo el círculo que se ilumina. Esto ayuda a tu cerebro a procesar emociones.'
              : 'Presiona "Iniciar" para comenzar la estimulación bilateral.'
            }
          </p>
          
          {isActive && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>BPM: {bpm}</span>
            </div>
          )}
        </div>

        {/* Círculos de tapping */}
        <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20">
          <TapIndicator side="left" isActive={currentSide === 'left' && isActive} />
          <TapIndicator side="right" isActive={currentSide === 'right' && isActive} />
        </div>

        {/* Indicador de estado */}
        {isActive && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {currentSide === 'left' ? '👁️ Izquierda' : '👁️ Derecha'}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-xs text-gray-600">
          Seminario Internacional de Inteligencia Energética
        </p>
      </div>
    </div>
  );
};

export default TappingCircles;
