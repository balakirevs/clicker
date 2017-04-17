exports.config = {

  seleniumAddress: 'http://localhost:4723/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/features/step_definitions/*.step.js', './e2e/features/support/*.js'],
    format: "pretty"
  },
  specs: ['./e2e/features/*.feature'],

  capabilities: {
    browserName: '',
    'appium-version': '1.6.4',
    platformName: 'iOS',
    platformVersion: '10.3',
    deviceName: 'iPhone 7',
    app: '/Users/abv/Documents/code/clicker/platforms/ios/build/emulator/Clicker.app',
    automationName: 'XCUITest',
    autoWebview: true,
    fullReset: true
  },

  baseUrl: '',

  onPrepare: function() {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);

    var defer = protractor.promise.defer();
    browser.ignoreSynchronization = true;
    browser.executeScript('return window.location;').then( function(location){
      browser.resetUrl = 'file://';
      browser.baseUrl = location.origin + location.pathname;
      defer.fulfill();
    });
    return defer.promise;
  },
  useAllAngular2AppRoots: true
};
