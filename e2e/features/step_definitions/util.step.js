'use strict';

var UtilSteps = function () {

  this.World = require('../support/world').World;

  this.Given(/^user navigates to home page$/, function (next) {
    browser.get('/');
    next();
  });

  this.Then(/^user should see the title "([^"]*)"$/, function (title, next) {
    this.expect(browser.getTitle()).to.eventually.equal(title).and.notify(next);
    next();
  });
};

module.exports = UtilSteps;
