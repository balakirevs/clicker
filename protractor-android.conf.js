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
    autoWebview: true,
    defaultTimeoutInterval: 400000
  },

  capabilities: {
    browserName: '',
    'appium-version': '1.5.3',
    platformName: 'android',
    platformVersion: '6.0',
    deviceName: 'emulator-5554',
    autoWebview: true,
    avd: 'Nexus',
    nativeInstrumentsLib: true,
    app: "/Users/abv/Documents/code/clicker/platforms/android/build/outputs/apk/android-debug.apk"
  },

  baseUrl: 'http://10.0.2.2:' + (process.env.HTTP_PORT || '8100'),

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    browser.ignoreSynchronization = false;
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  useAllAngular2AppRoots: true
};
