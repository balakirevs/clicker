exports.config = {
  seleniumAddress: 'http://localhost:7777/wd/hub',

  specs: [
    '../www/build/test/**/*.e2e.js'
  ],

  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },

  capabilities: {
    device: 'android',
    browserName: 'browser',
    'appium-version': '1.5.2',
    platformName: 'android',
    platformVersion: '6.0',
    deviceName: 'emulator-5554',
    nativeInstrumentsLib: true
  },

  baseUrl: 'http://10.0.2.2:' + (process.env.HTTP_PORT || '8100'),

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    browser.ignoreSynchronization = false;
  },


  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true
};
