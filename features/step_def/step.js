const { Given, When, Then, Before, AfterAll } = require('@cucumber/cucumber');
const puppeteer = require("puppeteer")
var { setDefaultTimeout } = require('../../node_modules/@cucumber/cucumber');
const { expect } = require("chai");

setDefaultTimeout(60 * 15000);
let browser, page;
Before(async function () {
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 10,
        devtools: false,
        args:
            [
                '--start-maximized',
                '--window-size=1920,1080',
            ]
    });
    page = await browser.newPage();
})

Given('I am on the homepage', async () => {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    await page.goto('http://localhost:8080/')
});

Given('There are to-dos', async () => {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    if ('.ant-result-icon.ant-result-image') {

        await page.click('button');

        let inputTodo = '[type=text]';
        await page.waitForSelector(inputTodo);
        let input = await page.$(inputTodo);
        await input.type('Hamburger');
        // await page.waitFor(1000)
        await page.click('button.ant-btn.ant-btn-primary.ciVFlUVFxQgyv-kbgNeau');
    }
    else {
        //
    }


    // let inputSearch = '[type=search]'
    // await page.waitForSelector(inputSearch);
    // let input2 = await page.$(inputSearch);
    // await input2.type('Food');

    page.waitForNavigation()
});

When('I click on delete button', async () => {
    // Write code here that turns the phrase above into concrete actions
    let deleteButtonSelector = ['.R8K2jDK2W4lxFx6xO8aQr svg'];
    await page.waitForSelector(deleteButtonSelector);
    let deleteButton = await page.$(deleteButtonSelector);
    await page.waitForTimeout(2000);
    await deleteButton.click();

    let deleteBtnSelector = ['.ant-btn-dangerous'];
    await page.waitForSelector(deleteBtnSelector);
    let confirmDeleteBtn = await page.$(deleteBtnSelector);
    await page.waitForTimeout(2000);
    await confirmDeleteBtn.click();

});

Then('Todo will be removed from the todo list', async () => {
    page.waitForNavigation();
    let todoImage = ['.ant-result-icon.ant-result-image']
    expect(todoImage).ok;

    browser.close();
});



