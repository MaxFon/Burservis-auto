import { Locator, Page, expect } from "@playwright/test";

class MainPage {
    readonly page: Page;
    readonly mainInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainInput = page.locator("textarea[id='APjFqb']");
    }

    async startPage() {
        await this.page.goto('https://www.google.com/');
        await expect(this.page).toHaveURL('https://www.google.com/');
    }

    async mainInputFill(text: string) {
        await this.mainInput.fill(text);
        await this.mainInput.press('Enter');
    }
}

export default MainPage;
