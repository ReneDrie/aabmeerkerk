module.exports = function () {
  return [
    /**
     * Plugin to inline @import rules content
     */
    require('postcss-import'),

    /**
     * Plugin to remove comments
     */
    require('postcss-discard-comments'),

    /**
     * PostCSS plugin to use tomorrow's CSS syntax
     * https://github.com/MoOx/postcss-cssnext
     */
    require('postcss-cssnext')({
      browsers: ['last 3 versions', 'iOS >= 8']
    })
  ]
};
