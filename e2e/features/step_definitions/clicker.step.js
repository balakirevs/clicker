const { defineSupportCode } = require('cucumber');
const homePage = require('../page_objects/home.page.js');

defineSupportCode(function({ When, Then }) {

  When(/^user clicks menu icon$/, function (callback) {
    homePage.clickMenuIcon();
    callback();
  });

  Then(/^user should see the text "([^"]*)"$/, function (text, callback) {
    expect(homePage.getMenuTitle()).to.eventually.contains(text).and.notify(callback);
    callback();
  });

  Then(/^left menu has a link "([^"]*)"$/, function (linkText, callback) {
    expect(homePage.getMenuLink()).to.eventually.contains(linkText).and.notify(callback);
    callback();
  });
});
