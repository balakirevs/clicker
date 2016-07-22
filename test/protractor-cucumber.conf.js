exports.config = {
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: '../features/step_definitions/*.step.js',
    format: "pretty"
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../features/*.feature'],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8100/',

  useAllAngular2AppRoots: true
};