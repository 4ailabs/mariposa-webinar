/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
         theme: {
           extend: {
             animation: {
               'fade-in': 'fadeIn 0.5s ease-in-out',
               'slide-up': 'slideUp 0.6s ease-out',
               'float': 'float 3s ease-in-out infinite',
               'glow': 'glow 2s ease-in-out infinite alternate',
             },
             keyframes: {
               fadeIn: {
                 '0%': { opacity: '0', transform: 'translateY(10px)' },
                 '100%': { opacity: '1', transform: 'translateY(0)' },
               },
               slideUp: {
                 '0%': { opacity: '0', transform: 'translateY(30px)' },
                 '100%': { opacity: '1', transform: 'translateY(0)' },
               },
               float: {
                 '0%, 100%': { transform: 'translateY(0px)' },
                 '50%': { transform: 'translateY(-10px)' },
               },
               glow: {
                 '0%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' },
                 '100%': { boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)' },
               },
             },
           },
         },
  plugins: [],
}
