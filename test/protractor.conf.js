var SSReporter = require('protractor-jasmine2-screenshot-reporter');

var screenshotReporter = new SSReporter ({
  dest: 'coverage/e2e-desktop-screenshots',
  pathBuilder: function(currentSpec, suites) {
    var name = currentSpec.fullName;
    var testname = name.replace(/\s+/g, '-').toLowerCase();
    return testname;
  },
  filename: 'index.html'
});

exports.config = {
  baseUrl: 'http://localhost:8100',

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

  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  beforeLaunch: function () {
    return new Promise(function (resolve) {
      screenshotReporter.beforeLaunch(resolve);
    });
  },

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
    jasmine.getEnv().addReporter(screenshotReporter);

    browser.ignoreSynchronization = false;
  },

  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  useAllAngular2AppRoots: true
};
