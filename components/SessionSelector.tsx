
import React from 'react';
import type { Session } from '../types';
import ButterflyIcon from './ButterflyIcon';

interface SessionSelectorProps {
  sessions: Session[];
  onSelectSession: (session: Session) => void;
}

const SessionSelector: React.FC<SessionSelectorProps> = ({ sessions, onSelectSession }) => {
  return (
    <div className="flex flex-col h-full w-full animate-fade-in">
      <div className="text-center mb-8">
        <ButterflyIcon className="w-16 h-16 mx-auto text-purple-400 mb-4" />
        <h1 className="text-3xl font-bold text-gray-100">Mariposa</h1>
        <p className="text-lg text-gray-400">Re-significado Guiado</p>
      </div>

      <h2 className="text-xl font-semibold text-gray-200 mb-4">Elige tu práctica</h2>
      
      <div className="space-y-4">
        {sessions.map(session => (
          <button
            key={session.id}
            onClick={() => onSelectSession(session)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-5 text-left hover:bg-gray-700 hover:border-purple-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <h3 className="text-lg font-semibold text-gray-100">{session.title}</h3>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-purple-400 font-medium">
                {Math.floor(session.duration / 60)} min {session.duration % 60 > 0 ? `${session.duration % 60} s` : ''}
              </span>
              <span className="text-gray-400">{session.phases.length} fases guiadas</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SessionSelector;
