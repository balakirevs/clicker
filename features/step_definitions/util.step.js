'use strict';

var chai              = require('chai');
var chaiAsPromised    = require('chai-as-promised');
var expect            = chai.expect;

chai.use(chaiAsPromised);

var UtilSteps  = function () {

  this.Given(/^user navigates to home page$/, function (next) {
    browser.get('/');
    next();
  });

  this.Then(/^user should see the title "([^"]*)"$/, function (title, next) {
    expect(browser.getTitle()).to.eventually.equal(title);
    next();
  });
};

module.exports = UtilSteps;