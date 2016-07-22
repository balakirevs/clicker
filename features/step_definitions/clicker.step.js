'use strict';

var chai              = require('chai');
var chaiAsPromised    = require('chai-as-promised');
var expect            = chai.expect;

chai.use(chaiAsPromised);

var ClickerSteps = function () {

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
    homePage.getMenuTitle(text);
    next();
  });

  this.Then(/^left menu has a link "([^"]*)"$/, function (linkText, next) {
    homePage.getMenuLink(linkText);
    next();
  });
};
module.exports = ClickerSteps;