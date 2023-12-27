### =========================Playwright Tests======================

1. You need to have installed:
   
   - @playwright/test version 1.40.0
   - npx version 6.14.13

2. Put your files in:

   - './tests/' --- for auto-test
   - './pageObjects/'  --- for pageObjectModel pages

3. Use command:

    ```
    npx playwright test
    ```
    To run tests without visual display


    ```
    npx playwright test --ui
    ```
    To run tests with visual display

P.S
    If playwright does not start - you will need to reinstall it by entering the command "npx playwright install" or use the second option - "npm init playwright@latest"
