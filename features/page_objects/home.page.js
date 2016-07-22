'use strict';

var chai              = require('chai');
var chaiAsPromised    = require('chai-as-promised');
var expect            = chai.expect;

chai.use(chaiAsPromised);

var HomePage = function() {

  var menuIcon = element(by.css('.bar-button-menutoggle'));
  var menuTitle = element.all(by.css('.toolbar-title'));
  var menuLink = element.all(by.css('ion-label'));

  this.clickMenuIcon = function() {
    menuIcon.click();
  };

  this.getMenuTitle = function(text) {
    expect(menuTitle.getText()).to.eventually.contain(text);
  };

  this.getMenuLink = function(linkText) {
    expect(menuLink.getText()).to.eventually.contain(linkText);
  }
};

module.exports = HomePage;