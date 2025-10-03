
import React from 'react';
import type { Session } from '../types';
import ButterflyIcon from './ButterflyIcon';
import { Clock, PlayCircle } from 'lucide-react';

interface SessionSelectorProps {
  sessions: Session[];
  onSelectSession: (session: Session) => void;
}

const SessionSelector: React.FC<SessionSelectorProps> = ({ sessions, onSelectSession }) => {
  const formatDuration = (seconds: number): string => {
    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return `${hours}h ${minutes}min`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}min${remainingSeconds > 0 ? ` ${remainingSeconds}s` : ''}`;
    }
  };

  const getSessionDescription = (sessionId: string): string => {
    switch (sessionId) {
      case 'emdr-protocolo-completo':
        return 'Sesión completa paso a paso: identifica un recuerdo difícil y procésalo hasta que deje de molestarte. Te guiaré en cada etapa.';
      case 'emdr-sesion-rapida':
        return 'Para cuando algo te está molestando ahora. Una versión rápida para procesar situaciones del día a día.';
      case 'emdr-recursos-positivos':
        return 'Para cuando necesitas sentirte mejor. Vamos a fortalecer un recuerdo o sensación positiva que ya tienes.';
      case 'emdr-lugar-seguro':
        return 'Crea tu espacio de calma interno. Un lugar al que puedes regresar cuando te sientas ansioso o abrumado.';
      case 'emdr-procesamiento-rapido':
        return 'Para procesar cualquier experiencia molesta de forma rápida y eficaz. Ideal para situaciones del día a día.';
      case 'emdr-autocuidado-diario':
        return 'Rutina diaria de autocuidado. Úsala cada mañana o cuando necesites conectarte contigo mismo.';
      default:
        return 'Sesión guiada paso a paso';
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full animate-fade-in px-4 py-6 pb-safe">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-4 mb-4">
          <img 
            src="/images/logo-seminario.png" 
            alt="Logo Seminario Internacional de Inteligencia Energética"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <ButterflyIcon className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400" size="md" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100">Estimulación Bilateral</h1>
        <h2 className="text-xl sm:text-2xl text-purple-300">Herramienta del Seminario</h2>
        <p className="text-sm sm:text-base text-gray-400 mt-2 px-4">Seminario Internacional de Inteligencia Energética</p>
        <p className="text-xs sm:text-sm text-blue-400 mt-1">
          <a href="https://inteligencia-energetica.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            inteligencia-energetica.com
          </a>
        </p>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">¿Qué quieres trabajar hoy?</h2>

      <div className="space-y-3 sm:space-y-4 flex-1">
        {sessions.map(session => (
          <button
            key={session.id}
            onClick={() => onSelectSession(session)}
            className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl p-4 sm:p-5 text-left active:bg-gray-700 active:border-purple-500 hover:bg-gray-700 hover:border-purple-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 group touch-manipulation"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-100 group-hover:text-purple-300 group-active:text-purple-300 transition-colors leading-tight">
                  {session.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-2 line-clamp-2">
                  {getSessionDescription(session.id)}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs sm:text-sm gap-2 flex-wrap">
                  <span className="text-purple-400 font-medium bg-purple-900/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Clock size={16} />
                    {formatDuration(session.duration)}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1.5 px-2">
                    <PlayCircle size={16} />
                    {session.phases.length} pasos
                  </span>
                </div>
              </div>
              {(session.id === 'emdr-protocolo-completo' || session.id === 'emdr-sesion-rapida' ||
                session.id === 'emdr-recursos-positivos' || session.id === 'emdr-lugar-seguro' ||
                session.id === 'emdr-procesamiento-rapido' || session.id === 'emdr-autocuidado-diario') && (
                <div className="flex-shrink-0">
                  <ButterflyIcon size="sm" className="text-purple-400 opacity-60 w-8 h-8" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
      
        <div className="mt-6 p-4 sm:p-5 bg-purple-900/20 border-2 border-purple-700/30 rounded-xl">
          <p className="text-sm sm:text-base text-purple-200 text-center leading-relaxed">
            🦋 Herramienta oficial del Seminario Internacional de Inteligencia Energética
          </p>
          <p className="text-xs sm:text-sm text-gray-400 text-center mt-3">
            💡 Las palmaditas alternas ayudan a tu cerebro a procesar emociones difíciles
          </p>
          <p className="text-xs sm:text-sm text-gray-400 text-center mt-2">
            ⚠️ Si tienes traumas severos o te sientes muy mal, busca ayuda profesional
          </p>
        </div>
    </div>
  );
};

export default SessionSelector;
