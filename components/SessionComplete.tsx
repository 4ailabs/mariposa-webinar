
import React from 'react';
import ButterflyIcon from './ButterflyIcon';

interface SessionCompleteProps {
  sessionTitle: string;
  onGoHome: () => void;
}

const SessionComplete: React.FC<SessionCompleteProps> = ({ sessionTitle, onGoHome }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
      <ButterflyIcon className="w-20 h-20 text-green-400 mb-6" />
      <h1 className="text-3xl font-bold text-gray-100 mb-2">Sesión Completada</h1>
      <p className="text-lg text-gray-400 mb-8">Has completado: "{sessionTitle}"</p>
      
      <p className="text-gray-300 mb-8 max-w-sm">
        Tómate un momento para respirar profundo y notar cómo te sientes.
      </p>

      <button
        onClick={onGoHome}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default SessionComplete;
