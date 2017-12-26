const { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, Then }) {

  Given(/^user navigates to home page$/, function (callback) {
    browser.get('');
    callback();
  });

  Then(/^user should see the title "([^"]*)"$/, function (title, callback) {
    expect(browser.getTitle()).to.eventually.equal(title).and.notify(callback);
    callback();
  });
});
