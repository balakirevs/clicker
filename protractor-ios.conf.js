exports.config = {

  seleniumAddress: 'http://localhost:4723/wd/hub',

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
    browserName: 'safari',
    'appium-version': '1.5.2',
    platformName: 'iOS',
    platformVersion: '9.3',
    deviceName: 'iPhone 6s',
    app: '/Users/abv/Documents/code/clicker/platforms/ios/build/emulator/Clicker.app'
  },

  baseUrl: 'http://localhost:8100',

  onPrepare: function() {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);

    var SpecReporter = require('jasmine-spec-reporter');
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