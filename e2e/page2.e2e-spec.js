import { browser, element, by } from 'protractor';
var message = element(by.className('message'));
describe('Page2', function () {
    beforeEach(function () {
        browser.get('');
    });
    it('should have correct text when Goodbye Ionic is selected', function () {
        element(by.css('.bar-button-menutoggle')).click().then(function () {
            browser.driver.sleep(2000); // wait for the animation
            element.all(by.className('input-wrapper')).then(function (items) {
                items[1].click();
                browser.driver.sleep(2000); // wait for the animation
                expect(message.getText()).toEqual('Bye!');
                return items[1];
            });
        });
    });
});
//# sourceMappingURL=page2.e2e-spec.js.map