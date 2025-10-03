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
  const [currentBPM, setCurrentBPM] = useState(bpm);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [hasHeadphones, setHasHeadphones] = useState(false);

  // Función para crear beep estéreo
  const createStereoBeep = useCallback((side: TapSide, frequency: number = 800) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const pannerNode = audioContext.createStereoPanner();
    
    oscillator.connect(gainNode);
    gainNode.connect(pannerNode);
    pannerNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    // Configurar canal estéreo (izquierda = -1, derecha = 1)
    pannerNode.pan.setValueAtTime(side === 'left' ? -1 : 1, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, []);

  // Función para vibración háptica
  const hapticTap = useCallback((side: TapSide) => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Vibración corta de 50ms
    }
  }, []);

  // Detectar auriculares
  useEffect(() => {
    const detectHeadphones = async () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Crear un tono muy silencioso para detectar
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.001, audioContext.currentTime);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        
        // Si no hay error, probablemente hay auriculares
        setHasHeadphones(true);
      } catch (error) {
        setHasHeadphones(false);
      }
    };

    detectHeadphones();
  }, []);

  // Intervalo de tapping para feedback visual, háptico y audio
  useEffect(() => {
    if (!isActive) return;

    const tapIntervalMs = (60 / currentBPM) * 1000;
    const tapTimer = setInterval(() => {
      setCurrentSide(prevSide => {
        const newSide = prevSide === 'left' ? 'right' : 'left';
        hapticTap(newSide);
        
        // Reproducir beep si el audio está habilitado
        if (audioEnabled) {
          createStereoBeep(newSide);
        }
        
        return newSide;
      });
    }, tapIntervalMs / 2);

    return () => clearInterval(tapTimer);
  }, [currentBPM, hapticTap, isActive, audioEnabled, createStereoBeep]);

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
            {isActive ? 'Pausar' : 'Iniciar'}
          </button>
          
          {onComplete && (
            <button
              onClick={handleComplete}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Instrucciones */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            {isActive ? 'Haz palmaditas siguiendo los círculos' : 'Círculos pausados'}
          </h2>
          <p className="text-gray-400 max-w-md">
            {isActive 
              ? 'Haz palmaditas alternas con tus manos siguiendo el círculo que se ilumina. Esto ayuda a tu cerebro a procesar emociones.'
              : 'Presiona "Iniciar" para comenzar la estimulación bilateral.'
            }
          </p>
          
          {/* Controles de velocidad y audio */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentBPM(60)}
                className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                  currentBPM === 60 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                Normal (60 BPM)
              </button>
              <button
                onClick={() => setCurrentBPM(90)}
                className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                  currentBPM === 90 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                Rápido (90 BPM)
              </button>
            </div>
            
            {/* Control de audio */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                disabled={!hasHeadphones}
                className={`px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2 ${
                  audioEnabled 
                    ? 'bg-green-600 text-white' 
                    : hasHeadphones 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {audioEnabled ? 'Sonido ON' : 'Sonido OFF'}
              </button>
              
              <div className="flex flex-col items-center gap-1">
                {!hasHeadphones && (
                  <span className="text-xs text-yellow-400">
                    Conecta auriculares para audio
                  </span>
                )}
                <span className="text-xs text-gray-500">
                  Nota: El sonido solo funciona con auriculares
                </span>
              </div>
            </div>
            
            {isActive && (
              <div className="flex items-center justify-center gap-2 text-sm text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>BPM: {currentBPM}</span>
              </div>
            )}
          </div>
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
              {currentSide === 'left' ? 'Izquierda' : 'Derecha'}
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
