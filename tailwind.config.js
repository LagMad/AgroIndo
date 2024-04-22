/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Playfair: ["Playfair"],
        Poppins: ['Poppins'],
      },
      colors: {
        'cust-darker-green' : '#2E3D2A',
        'cust-dark-green' : '#43766C',
        'cust-light-green' : '#B1C381',

        'cust-blue' : '#9BB8CD',

        'cust-dark-brown' : '#76453B',
        'cust-light-brown' : '#B19470',

        'cust-dark-cream' : '#FFF7D4',
        'cust-light-cream' : '#F8FAE5',

        'cust-yellow' : '#EEC759'
      },
      backgroundImage: {
        'Hero1' : "url('/src/assets/Hero1.png')",
        'HomeBG' : "url('/src/assets/HomeBG.png')",
        'AboutPict1' : "url('/src/assets/AboutSpicesPict1.jpg')",
        'AboutPict2' : "url('/src/assets/AboutSpicesPict2.jpg')",
        'Konjac' : "url('/src/assets/Konjac.png')",
        'Kunyit' : "url('/src/assets/Kunyit.jpg')",
        'Jahe' : "url('/src/assets/Jahe.jpg')"
      }
    }
  },
  plugins: [],
};
