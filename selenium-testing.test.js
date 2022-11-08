const {Builder, By, Key, until} = require("selenium-webdriver");
require("dotenv").config();

describe("", ()=>{
    let driver;

    beforeAll(async() => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    afterAll(async() => {
        await driver.quit();
    });

    const setDelay = async () =>{
        await driver.sleep(500);
    }

    it("As a user I want to open the Home page", async ()=>{
        await driver.get(process.env.url);
        await driver.getTitle().then(title =>{
            expect(title).toEqual("Home");
        });
        await setDelay();

    })

    it("As a user I want to open the Contact Page", async ()=>{
        await driver.findElement(By.name('contact')).click();
        await driver.getTitle().then(title =>{
            expect(title).toEqual("Contact Us");
        });
        await setDelay();

    })
    it("As a user I want to sign up using my email", async ()=>{
        let emailInput = await driver.findElement(By.name('email'));
        let userEmail = "kalani@gmail.com"
        await emailInput.sendKeys(userEmail);
        await driver.findElement(By.name('more-info-btn')).click();
        let message =  await driver.findElement(By.id('message')).getText()
        expect(message).toEqual("More info coming to "+userEmail)
        await setDelay();
    })
});