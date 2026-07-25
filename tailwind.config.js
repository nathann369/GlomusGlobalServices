export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: '#1F5E3B',
        emerald: '#2E8B57',
        gold: '#C89B3C',
        soft: '#F8FAF8',
        charcoal: '#222222',
        hairline: '#ECECEC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
