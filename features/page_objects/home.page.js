'use strict';

var HomePage = function() {

  var menuIcon = element(by.css('.bar-button-menutoggle'));
  var menuTitle = element.all(by.css('.toolbar-title'));
  var menuLink = element.all(by.css('ion-label'));

  this.clickMenuIcon = function() {
    menuIcon.click();
  };

  this.getMenuTitle = function() {
    return menuTitle.getText();
  };

  this.getMenuLink = function() {
    return menuLink.getText();
  }
};

module.exports = HomePage;