import { browser, element, by } from 'protractor';
import { HomePage } from "./pages/HomePage";
import { async } from 'q';

describe("Going to write first test", () => {

    var homePage = new HomePage();

    beforeEach(async() => {
        await homePage.OpenBrowser("http://localhost:8808/");
    })

    it("should pass without any issue", () => {
        let a = 12
        expect(a).toBe(12);
    });

    it("should get first element and it's title", () => {
        const e = element(by.tagName('h2'));
        e.getText().then(text => {
            expect(text).toEqual('Selenium Framework development');
        });
    })

    it("should get all headings", async() => {
        await homePage.GetAllHeadings();
    })

    it("should get last element and it's title", () => {
        const els = element.all(by.tagName('h2')).last();
        els.getText().then(text => {
            expect(text).toEqual('Android Automation');
        });
    })
});