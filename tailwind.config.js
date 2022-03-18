const plugin = require("tailwindcss/plugin");
module.exports = {
  daisyui: {
    themes: ["dark"],
  },

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { backgroundColor: "#494949" },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
