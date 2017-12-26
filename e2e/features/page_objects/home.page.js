var HomePage = function() {

  const menuIcon = element(by.css('.bar-button-menutoggle'));
  const menuTitle = element.all(by.css('.toolbar-title'));
  const menuLink = element.all(by.css('ion-label'));

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

module.exports = new HomePage();
