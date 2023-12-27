import {test, expect} from '@playwright/test';
import MainPage from '../pageObjects/page_googleMain';
import SearchPage from '../pageObjects/page_googleSearch';

const possibleNames = ['Девелоп Нефть', 'Айти-нефтяник', 'Девелоп Сервис Бур']
const inappropriateNames = ['Газпром нефть', 'Shell']


test('Check possible name', async ({page}) => {
    test.setTimeout(20000);
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);

    for(let i in possibleNames){
        await test.step('Open start page and enter the name', async () => {
            await mainPage.startPage();
            await mainPage.mainInputFill(possibleNames[i]);
        });

        await test.step('We extract the value from the input and check the first five pages', async () => {
            let inputValue = await searchPage.googleInput.inputValue();
            await expect(inputValue = possibleNames[i]).toBeTruthy();
            await searchPage.checkingFirstAdFromList(inputValue);
            await searchPage.checkingSecondAdFromList(inputValue);
            await searchPage.checkingThirdAdFromList(inputValue);
            await searchPage.checkingFourthAdFromList(inputValue);
            await searchPage.checkingFifthAdFromList(inputValue);
        });
    };
});


test('Check inappropriate name - invalide test', async ({page}) => {
    test.setTimeout(20000);
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);

    for(let i in inappropriateNames){
        await test.step('Open start page and enter the name', async () => {
            await mainPage.startPage();
            await mainPage.mainInputFill(inappropriateNames[i]);
        });

        await test.step('We extract the value from the input and check the first five pages', async () => {
            let inputValue = await searchPage.googleInput.inputValue();
            await expect(inputValue == inappropriateNames[i]).toBeTruthy();
            await searchPage.checkingFirstAdFromList(inputValue);
            await searchPage.checkingSecondAdFromList(inputValue);
            await searchPage.checkingThirdAdFromList(inputValue);
            await searchPage.checkingFourthAdFromList(inputValue);
            await searchPage.checkingFifthAdFromList(inputValue);
        });
    };
});
