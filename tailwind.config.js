module.exports = {
  darkMode: 'class', // Activation du mode sombre par classe
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0057B7',
        secondary: '#4F9DED',
        darkbg: '#222222',
        lightbg: '#F5F5F5',
        greenpulse: '#2e8a3aff', // couleur du bouton dans l'image
      },
      
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/line-clamp'),
    
    //require('@tailwindcss/typography')
  ],
}