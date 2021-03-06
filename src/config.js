const merge = require('lodash/merge')

const appConfig = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_URL,
    isBrowser: typeof window !== 'undefined',
  },
  development: {
    apiUrl: window.BASE_URL_DEV,
  },
  production: {
    apiUrl: window.BASE_URL_BUILD,
  },
}
const config = merge(appConfig.all, appConfig[appConfig.all.env])

export default config