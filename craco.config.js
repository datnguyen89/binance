const CracoLessPlugin = require('craco-less')
const resolveUrlLoader = require('craco-resolve-url-loader');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: (lessRule, context) => {
          lessRule.use = lessRule.use.filter(i => !i.loader.includes('resolve-url-loader'));
          return lessRule;
        }
      },
    },
  ],
}