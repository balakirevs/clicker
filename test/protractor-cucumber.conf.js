exports.config = {
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: '../features/step_definitions/*.step.js',
    format: "pretty"
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../features/*.feature'],

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
  }],

  baseUrl: 'http://localhost:8100/',

  useAllAngular2AppRoots: true
};