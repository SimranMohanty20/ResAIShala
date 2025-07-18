/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0f0606',
        'background': '#f5f5f5',
        'primary': '#bd4744',
        'secondary': '#ebe1ff',
        'accent': '#A63892',
        'background2':'#EFE8E8',
        'main':'#714CC2',
        'main2':'#ebe1ff',
       },
       keyframes: {
        moveBackground: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50%, 50%)' },
        }
      },

       animation: {
        'spin-slow': 'spin 20s linear infinite',
        moveBackground: 'moveBackground 20s linear infinite',
      },
    },
  },
  plugins: [],
}

