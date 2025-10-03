
import React, { useState } from 'react';
import type { Session } from '../types';
import { Clock, PlayCircle, Brain, Heart, Shield, Zap, Star, Sparkles, Lock, Unlock } from 'lucide-react';

interface SessionSelectorProps {
  sessions: Session[];
  onSelectSession: (session: Session) => void;
}

const SessionSelector: React.FC<SessionSelectorProps> = ({ sessions, onSelectSession }) => {
  const [passwordModal, setPasswordModal] = useState<{ isOpen: boolean; session: Session | null }>({ 
    isOpen: false, 
    session: null 
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Contraseña para las sesiones premium (cambiar por la contraseña real del seminario)
  const SEMINAR_PASSWORD = 'seminario2024';

  const isPremiumSession = (sessionId: string): boolean => {
    return sessionId === 'emdr-protocolo-completo' || sessionId === 'emdr-sesion-rapida';
  };

  const handleSessionClick = (session: Session) => {
    if (isPremiumSession(session.id) && !isAuthenticated) {
      setPasswordModal({ isOpen: true, session });
    } else {
      onSelectSession(session);
    }
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === SEMINAR_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordModal({ isOpen: false, session: null });
      setPasswordInput('');
      if (passwordModal.session) {
        onSelectSession(passwordModal.session);
      }
    } else {
      alert('Contraseña incorrecta. Solo los asistentes del seminario pueden acceder a estas sesiones.');
      setPasswordInput('');
    }
  };

  const closePasswordModal = () => {
    setPasswordModal({ isOpen: false, session: null });
    setPasswordInput('');
  };

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

  const getSessionIcon = (sessionId: string) => {
    switch (sessionId) {
      case 'emdr-protocolo-completo':
        return <Brain className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'emdr-sesion-rapida':
        return <Zap className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'emdr-recursos-positivos':
        return <Star className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'emdr-lugar-seguro':
        return <Shield className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'emdr-procesamiento-rapido':
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'emdr-autocuidado-diario':
        return <Heart className="w-6 h-6 sm:w-7 sm:h-7" />;
      default:
        return <PlayCircle className="w-6 h-6 sm:w-7 sm:h-7" />;
    }
  };

  const getSessionIconColor = (sessionId: string): string => {
    switch (sessionId) {
      case 'emdr-protocolo-completo':
        return 'bg-gradient-to-br from-blue-500 to-blue-600'; // Azul para protocolo completo
      case 'emdr-sesion-rapida':
        return 'bg-gradient-to-br from-orange-500 to-orange-600'; // Naranja para sesión rápida
      case 'emdr-recursos-positivos':
        return 'bg-gradient-to-br from-yellow-500 to-yellow-600'; // Amarillo para recursos positivos
      case 'emdr-lugar-seguro':
        return 'bg-gradient-to-br from-green-500 to-green-600'; // Verde para lugar seguro
      case 'emdr-procesamiento-rapido':
        return 'bg-gradient-to-br from-indigo-500 to-indigo-600'; // Índigo para procesamiento rápido
      case 'emdr-autocuidado-diario':
        return 'bg-gradient-to-br from-pink-500 to-pink-600'; // Rosa para autocuidado
      default:
        return 'bg-gradient-to-br from-gray-500 to-gray-600';
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
    <div className="flex flex-col min-h-screen w-full animate-fade-in bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative px-4 py-8 sm:py-12 lg:py-16">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo Section */}
            <div className="mb-6 animate-float">
              <img 
                src="/images/logo-seminario.png" 
                alt="Logo Seminario Internacional de Inteligencia Energética"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain mx-auto mb-4 drop-shadow-lg"
              />
            </div>
            
            {/* Title Section */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3">
              Estimulación Bilateral Autoguiada
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-medium mb-4">
              Herramienta del Seminario
            </h2>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                Seminario Internacional de Inteligencia Energética
              </p>
              <a 
                href="https://inteligencia-energetica.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base font-medium underline decoration-blue-400/50 hover:decoration-blue-300"
              >
                <Sparkles className="w-4 h-4" />
                inteligencia-energetica.com
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sessions Section */}
      <div className="flex-1 px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-100 mb-6 lg:mb-8 text-center">
            ¿Qué quieres trabajar hoy?
          </h2>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            {sessions.map((session, index) => (
              <button
                key={session.id}
                onClick={() => handleSessionClick(session)}
                className={`group relative overflow-hidden ${isPremiumSession(session.id) && !isAuthenticated ? 'bg-gray-900 border-2 border-orange-500/50' : 'bg-gray-800 border border-gray-700'} rounded-2xl p-6 sm:p-8 text-left hover:bg-gray-700 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/20 active:scale-[0.98] lg:hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 touch-manipulation animate-slide-up`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 ${isPremiumSession(session.id) && !isAuthenticated ? 'bg-gray-700' : getSessionIconColor(session.id)} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300 relative`}>
                      {isPremiumSession(session.id) && !isAuthenticated ? (
                        <Lock className="w-6 h-6 sm:w-7 sm:h-7" />
                      ) : (
                        getSessionIcon(session.id)
                      )}
                      {isPremiumSession(session.id) && !isAuthenticated && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                          <Lock className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-white transition-colors leading-tight">
                          {session.title}
                        </h3>
                        {isPremiumSession(session.id) && !isAuthenticated && (
                          <span className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-400 px-2 py-1 rounded-lg text-xs font-medium border border-orange-500/30">
                            <Lock className="w-3 h-3" />
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-4">
                        {getSessionDescription(session.id)}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="inline-flex items-center gap-2 bg-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium border border-gray-600">
                          <Clock size={16} />
                          {formatDuration(session.duration)}
                        </span>
                        <span className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-300 px-3 py-2 rounded-lg text-sm border border-gray-700/50">
                          <PlayCircle size={16} />
                          {session.phases.length} pasos
                        </span>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-gray-400">
              Las palmaditas alternas ayudan a tu cerebro a procesar emociones difíciles
            </p>
            <p className="text-xs text-gray-500">
              ⚠️ Si tienes traumas severos o te sientes muy mal, busca ayuda profesional
            </p>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {passwordModal.isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-md lg:max-w-lg w-full">
            <div className="text-center mb-6 lg:mb-8">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Lock className="w-8 h-8 lg:w-10 lg:h-10 text-orange-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">
                Sesión Premium
              </h3>
              <p className="text-gray-400 text-sm lg:text-base">
                Esta sesión está disponible solo para asistentes del seminario
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contraseña del seminario
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ingresa la contraseña"
                  autoFocus
                />
              </div>
              
              <div className="flex gap-3 lg:gap-4">
                <button
                  onClick={closePasswordModal}
                  className="flex-1 px-4 py-3 lg:px-6 lg:py-4 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors text-sm lg:text-base font-medium"
                >
                  Cancelar
                </button>
                <button
                  onClick={handlePasswordSubmit}
                  className="flex-1 px-4 py-3 lg:px-6 lg:py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors text-sm lg:text-base font-medium"
                >
                  Acceder
                </button>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              💡 Pregunta la contraseña a los organizadores del seminario
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionSelector;
