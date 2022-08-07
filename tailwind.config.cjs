const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    fontFamily: {
      'body': 'Baskervville',
      'title': 'Playfair Display SC',
      'question-mark': 'Berkshire Swash',
    },
    backgroundImage: {
      'hero': "url('/img/duo1.jpg')",
    },
  },

  plugins: [],
};

module.exports = config;
