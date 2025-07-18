/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Monokai-inspired colors
        monokai: {
          50: '#f8f8f2',
          100: '#f1f1eb',
          200: '#e6e6d7',
          300: '#d4d4aa',
          400: '#a6e22e',
          500: '#66d9ef',
          600: '#fd971f',
          700: '#f92672',
          800: '#ae81ff',
          900: '#272822',
          950: '#1e1f1a',
        },
        // Dark theme colors
        dark: {
          50: '#f8f8f2',
          100: '#3e3d32',
          200: '#2d2d2d',
          300: '#2a2a2a',
          400: '#272822',
          500: '#1e1f1a',
          600: '#1a1b17',
          700: '#161713',
          800: '#12130f',
          900: '#0e0f0b',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
