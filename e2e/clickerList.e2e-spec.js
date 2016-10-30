import { browser, element, by } from 'protractor';
var clickerField = element(by.css('.text-input'));
var clickerButton = element.all(by.className('button-outline')).first();
var removeButton = element.all(by.css('.button-outline-md-danger')).first();
var firstClicker = element.all(by.className('clickerList')).first();
describe('ClickerList', function () {
    beforeEach(function () {
        browser.get('');
    });
    it('should switch into clickers page from menu', function () {
        element(by.css('.bar-button-menutoggle')).click();
        expect(element.all(by.css('.toolbar-title')).last().getText()).toEqual('Clickers');
    });
    it('has an input box for new Clickers', function () {
        expect(element(by.css('.text-input')).isPresent()).toEqual(true);
    });
    it('should add a Clicker', function () {
        'test clicker one'.split('').forEach(function (c) { return clickerField.sendKeys(c); });
        clickerButton.click();
        browser.driver.sleep(1000);
        expect(firstClicker.getText()).toEqual('TEST CLICKER ONE (0)');
    });
    it('should click a Clicker', function () {
        firstClicker.click();
        browser.driver.sleep(1000);
        expect(firstClicker.getText()).toEqual('TEST CLICKER ONE (1)');
    });
    it('should delete a Clicker', function () {
        removeButton.click();
        browser.driver.sleep(1000);
        element.all(by.className('clickerList')).count()
            .then(function (count) { return expect(count).toEqual(0); });
    });
});
//# sourceMappingURL=clickerList.e2e-spec.js.map