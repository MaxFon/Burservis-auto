import { Locator, Page, expect } from "@playwright/test";

//Вывел однотипные селекторы списка в переменную, для простоты поддержки
let titleSelector = "h3[class='LC20lb MBeuO DKV0Md']" 
let nameCompanySelector = "span[class='VuuXrf']"

class SearchPage {
    readonly page: Page;
    readonly googleInput: Locator;
    // titles
    readonly firstResultTitle: Locator;
    readonly secondResultTitle: Locator;
    readonly thirdResultTitle: Locator;
    readonly fourthResultTitle: Locator;
    readonly fifthResultTitle: Locator;
    // company names
    readonly nameFirstCompany: Locator;
    readonly nameSecondCompany: Locator;
    readonly nameThirdCompany: Locator;
    readonly nameFourthCompany: Locator;
    readonly nameFifthCompany: Locator;

    constructor(page: Page) {
        this.page = page;
        this.googleInput = page.locator("textarea[id='APjFqb']");
        this.firstResultTitle = page.locator(titleSelector).first();
        this.secondResultTitle = page.locator(titleSelector).nth(1);
        this.thirdResultTitle = page.locator(titleSelector).nth(2);
        this.fourthResultTitle = page.locator(titleSelector).nth(3);
        this.fifthResultTitle = page.locator(titleSelector).nth(4);
        this.nameFirstCompany = page.locator(nameCompanySelector).first();
        this.nameSecondCompany = page.locator(nameCompanySelector).nth(1);
        this.nameThirdCompany = page.locator(nameCompanySelector).nth(2);
        this.nameFourthCompany = page.locator(nameCompanySelector).nth(3);
        this.nameFifthCompany = page.locator(nameCompanySelector).nth(4);
    }

    async checkingFirstAdFromList(text: string) {
        let titleAd = await this.firstResultTitle.innerText();
        await expect(titleAd.includes(text)).not.toBeTruthy();
        await expect(this.nameFirstCompany).not.toHaveText(text);
    }

    async checkingSecondAdFromList(text: string) {
        let titleAd = await this.secondResultTitle.innerText();
        await expect(titleAd.includes(text)).not.toBeTruthy();
        await expect(this.nameSecondCompany).not.toHaveText(text);
    }
    
    async checkingThirdAdFromList(text: string) {
        let titleAd = await this.thirdResultTitle.innerText();
        await expect(titleAd.includes(text)).not.toBeTruthy();
        await expect(this.nameThirdCompany).not.toHaveText(text);
    }

    async checkingFourthAdFromList(text: string) {
        let titleAd = await this.fourthResultTitle.innerText();
        await expect(titleAd.includes(text)).not.toBeTruthy();
        await expect(this.nameFourthCompany).not.toHaveText(text);
    }

    async checkingFifthAdFromList(text: string) {
        let titleAd = await this.fifthResultTitle.innerText();
        await expect(titleAd.includes(text)).not.toBeTruthy();
        await expect(this.nameFifthCompany).not.toHaveText(text);
    }
}

export default SearchPage;
