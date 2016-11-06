'use strict';

var ClickerSteps = function () {

  this.World = require('../support/world').World;
  var HomePage = require('../page_objects/home.page.js');
  var homePage;

  this.Before(function () {
    homePage = new HomePage();
  });

  this.When(/^user clicks menu icon$/, function (next) {
    homePage.clickMenuIcon();
    next();
  });

  this.Then(/^user should see the text "([^"]*)"$/, function (text, next) {
    this.expect(homePage.getMenuTitle()).to.eventually.contains(text).and.notify(next);
    next();
  });

  this.Then(/^left menu has a link "([^"]*)"$/, function (linkText, next) {
    this.expect(homePage.getMenuLink()).to.eventually.contains(linkText).and.notify(next);
    next();
  });
};

module.exports = ClickerSteps;
