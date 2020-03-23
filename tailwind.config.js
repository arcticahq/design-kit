/* eslint-disable global-require */

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    fontFamily: {
      sans: "Montserrat, sans-serif"
    },
    extend: {
      backgroundSize: {
        "100": "100%"
      },
      colors: {
        "gray-900": "#1b1b1b", // TODO: Fix background bug, should be 1a1a1a
        "yellow-500": "#f5a623"
      }
    }
  },
  variants: {
    fontSize: ["responsive", "focus"],
    opacity: ["hover"]
  },
  plugins: [require('@tailwindcss/ui'), require("tailwindcss-padding-safe")()]
}
