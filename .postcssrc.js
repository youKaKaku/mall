// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport":{
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 7,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/tabbarshow/]

    }
  }
}
