const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {});

  if (process.env.EMBROIDER) {
    const { Webpack } = require('@embroider/webpack');
    return require('@embroider/compat').compatBuild(app, Webpack, {
      packagerOptions: {
        webpackConfig: {
          devtool: false,
        },
      },
    });
  }

  return app.toTree();
};
