exports.config = {
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['./e2e/features/step_definitions/*.step.js', './e2e/features/support/*.js'],
    format: "pretty"
  },

  specs: ['./e2e/features/*.feature'],

  multiCapabilities: [{
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    splitTestsBetweenCapabilities: true,
    chromeOptions: {args: ['--start-maximized']}
  }, {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    splitTestsBetweenCapabilities: true,
    chromeOptions: {args: ['--window-size=320,480']}
  }, {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    splitTestsBetweenCapabilities: true,
    chromeOptions: {args: ['--window-size=768,1024']}
  }, {
    browserName: 'safari'
  }, {
    browserName: 'firefox'
  }],

  baseUrl: 'http://localhost:8100/',

  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    require('connect')().use(require('serve-static')('www')).listen(8100);
  }
};
