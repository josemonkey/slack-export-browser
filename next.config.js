const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  return {
    images: {
      unoptimized: true,
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false }

      return config
    },
    basePath: (phase === PHASE_EXPORT) || (phase === PHASE_PRODUCTION_BUILD) ? '/slack' : undefined
  }

}
