
import React from 'react';
import { CheckCircle, Home, Sparkles, Heart } from 'lucide-react';

interface SessionCompleteProps {
  sessionTitle: string;
  onGoHome: () => void;
}

const SessionComplete: React.FC<SessionCompleteProps> = ({ sessionTitle, onGoHome }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-8 lg:p-12 animate-fade-in relative overflow-hidden bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Success icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 sm:p-6 lg:p-8 shadow-2xl">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center px-4 animate-slide-down">
          ¡Sesión Completada!
        </h1>

        {/* Session title */}
        <div className="glass-effect rounded-2xl p-4 sm:p-6 mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <p className="text-sm sm:text-base text-gray-400">Has completado</p>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center">
            "{sessionTitle}"
          </p>
        </div>

        {/* Info cards */}
        <div className="grid gap-4 sm:gap-6 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          {/* Card 1 */}
          <div className="glass-effect rounded-2xl p-5 sm:p-6 lg:p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Tómate un momento</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Respira profundo y nota cómo te sientes. ¿Cambió algo? ¿Te sientes diferente?
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-effect rounded-2xl p-5 sm:p-6 lg:p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Es normal que surjan cosas</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Si aparecen emociones, recuerdos o sueños en los próximos días, es señal de que tu cerebro está procesando. Es parte del proceso de sanación.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
          <button
            onClick={onGoHome}
            className="group relative w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 active:from-purple-700 active:to-blue-700 text-white font-bold py-4 sm:py-5 lg:py-6 px-8 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-base sm:text-lg lg:text-xl touch-manipulation shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
          >
            <span className="flex items-center justify-center gap-3">
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              Volver al inicio
            </span>
            <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Footer message */}
        <p className="text-center text-sm sm:text-base text-gray-400 mt-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          ✨ Felicidades por dedicarte este tiempo de cuidado personal
        </p>
      </div>
    </div>
  );
};

export default SessionComplete;
