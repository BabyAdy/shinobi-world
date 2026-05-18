/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shinobi: {
          orange: '#FF6B00',
          orangeLight: '#ff8533',
          black: '#1A1A1A',
        }
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.15) translateY(-2%)' },
        }
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
}
