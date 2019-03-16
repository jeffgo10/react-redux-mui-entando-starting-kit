module.exports = {
    staticFileGlobs: [
      'build/static/css/**.css',
      'build/static/js/**.js',
      'build/static/media/**.js',
      'build/apple-assets/**.png',
      'build/**.png',
      'build/index.html',
    ],
    swFilePath: 'build/service-worker.js',
    stripPrefix: 'build/',
    handleFetch: false,
    /* runtimeCaching: [{
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'cacheThenNetwork'
    }] */
  }