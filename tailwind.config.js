module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif']
    },
    backgroundColor: theme => ({
      'black': "#2F3136",
      'pink': "#FFF9FB",
      'purple': "#FCFAFD",
      'white': "#FFFFFF",
      'blue': "#F7FAFF",
      'daybreak-blue': "#1890FF",
      'green': "#F8FEF1",
      'progress': "#F5F5F5",
      'progressSuccess': "#52C41A",
      'txt-pink': "#FFF0F6",
      'txt-purple': "#F9F0FF",
      'txt-blue': "#F0F5FF",
      'txt-green': "#F6FFED",
      'button': "#27AE60"
    }),
    textColor: {
      'white': "#FFFFFF",
      'black': "#2F3136",
      'pink': "#EB2F96",
      'purple': "#7B61FF",
      'blue': "#2F54EB",
      'green': "#52C41A",
      'gray': "#262626"
    },
    borderColor: {
      'black': "#2F3136",
      'pink': "#EB2F96",
      'purple': "#7B61FF",
      'blue': "#2F54EB",
      'green': "#52C41A",
      'grey': "#E4E4E8",
      'gray': "#E5E5E5",
      'button': "#D9D9D9"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
