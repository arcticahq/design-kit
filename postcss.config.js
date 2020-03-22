/*------------------------------------------------------------------
[PostCSS Config]

Project:    Arctica
Version:    1.0
-------------------------------------------------------------------*/

/* eslint-disable global-require */

module.exports = () => ({
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
})
