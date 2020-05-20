const withCss = require('@zeit/next-css')
const withImages = require('next-images')
module.exports = withCss({})


module.exports = withImages({
  webpack(config, options) {
    return config
  }
})