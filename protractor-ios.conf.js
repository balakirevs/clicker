exports.config = {

  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: [
    './e2e/**/*.e2e-spec.ts'
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
    platformVersion: '10.0',
    deviceName: 'iPhone 6s',
    app: '/Users/abv/Documents/code/clicker/platforms/ios/build/emulator/Clicker.app',
    automationName: 'XCUITest'
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
  useAllAngular2AppRoots: true
};
