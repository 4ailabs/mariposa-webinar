
import React from 'react';
import ButterflyIcon from './ButterflyIcon';

interface SessionCompleteProps {
  sessionTitle: string;
  onGoHome: () => void;
}

const SessionComplete: React.FC<SessionCompleteProps> = ({ sessionTitle, onGoHome }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-6 sm:p-8 animate-fade-in">
      <ButterflyIcon className="w-24 h-24 sm:w-28 sm:h-28 text-green-400 mb-6" />
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3 px-4">¡Sesión Completada!</h1>
      <p className="text-base sm:text-lg text-gray-400 mb-8 px-4">Has completado: <span className="text-purple-300 font-medium">"{sessionTitle}"</span></p>

      <div className="bg-green-900/20 border-2 border-green-700/30 rounded-xl p-6 sm:p-8 mb-8 max-w-md mx-4">
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
          Tómate un momento para respirar profundo y notar cómo te sientes.
        </p>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          Es normal si surgen emociones o recuerdos en los próximos días. Tu cerebro está procesando.
        </p>
      </div>

      <button
        onClick={onGoHome}
        className="bg-purple-600 active:bg-purple-700 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg touch-manipulation w-full max-w-xs"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default SessionComplete;
