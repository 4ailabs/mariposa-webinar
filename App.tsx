
import React, { useState, useCallback } from 'react';
import type { Session } from './types';
import SessionSelector from './components/SessionSelector';
import SessionActive from './components/SessionActive';
import SessionComplete from './components/SessionComplete';
import { sessions as sessionsData } from './data/sessions';

const App: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);

  const handleSessionSelect = useCallback((session: Session) => {
    setSelectedSession(session);
    setIsSessionComplete(false);
  }, []);

  const handleSessionComplete = useCallback(() => {
    setIsSessionComplete(true);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedSession(null);
    setIsSessionComplete(false);
  }, []);

  const renderContent = () => {
    if (isSessionComplete && selectedSession) {
      return <SessionComplete onGoHome={handleGoHome} sessionTitle={selectedSession.title} />;
    }
    if (selectedSession) {
      return <SessionActive session={selectedSession} onComplete={handleSessionComplete} />;
    }
    return <SessionSelector sessions={sessionsData} onSelectSession={handleSessionSelect} />;
  };

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen w-full flex flex-col items-center font-sans overflow-x-hidden">
      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
        {renderContent()}
      </div>
    </main>
  );
};

export default App;
