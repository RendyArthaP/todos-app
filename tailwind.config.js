module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'black': "#2F3136",
      'pink': "#FFF9FB",
      'purple': "#FCFAFD",
      'blue': "#F7FAFF",
      'daybreak-blue': "#1890FF",
      'green': "#F8FEF1",
      'txt-pink': "#FFF0F6",
      'txt-purple': "#F9F0FF",
      'txt-blue': "#F0F5FF",
      'txt-green': "#F6FFED"
    }),
    textColor: {
      'white': "#FFFFFF",
      'black': "#2F3136",
      'pink': "#EB2F96",
      'purple': "#7B61FF",
      'blue': "#2F54EB",
      'green': "#52C41A"
    },
    borderColor: {
      'black': "#2F3136",
      'pink': "#EB2F96",
      'purple': "#7B61FF",
      'blue': "#2F54EB",
      'green': "#52C41A"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
