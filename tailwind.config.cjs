const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    fontFamily: {
      'body': 'Baskervville',
      'title': 'Playfair Display SC'
    },
    backgroundImage: {
      'hero': "url('/img/duo1.jpg')",
    },
  },

  plugins: [],
};

module.exports = config;
