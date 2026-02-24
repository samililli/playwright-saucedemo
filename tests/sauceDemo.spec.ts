import { test, expect } from '@playwright/test';

//test s Xpath lokátory//

test.describe('SauceDemo-Xpath', () => {

  test('login flow', async ({ page }) => {
    const base_url = 'https://www.saucedemo.com/';
    const login_form = page.locator('xpath=//div[contains(@class, "login-box")]//form');

    // #1a)
    await page.goto(base_url);
    await expect(page).toHaveURL(base_url);
    await expect(login_form).toBeVisible();
    await login_form.screenshot({ path: 'screenshots/01_login_form.png' });

    // #1b)
    const login_button = page.locator('xpath=//input[@data-test="login-button"]');
    await expect(login_button).toBeVisible();
    await login_button.click();

    // #1c)
    const error_message = page.locator('xpath=//h3[@data-test="error"]');
    await expect(error_message).toContainText('Username is required');
    await page.screenshot({ path: 'screenshots/02_missing_username.png' });

    // #1d)
    const username_input = page.locator('xpath=//input[@data-test="username"]');
    await expect(username_input).toBeVisible();
    await username_input.fill('standard_user');
    await login_button.click();

    // #1e)
    await expect(error_message).toContainText('Password is required');
    await page.screenshot({ path: 'screenshots/03_missing_password.png' });

    // #1f)
    const password_input = page.locator('xpath=//input[@data-test="password"]');
    await expect(password_input).toBeVisible();
    await password_input.fill('secret_sauce');
    await login_button.click();

    // #1g)
    await expect(login_form).not.toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const page_title = page.locator('xpath=//span[@data-test="title"]');
    await expect(page_title).toBeVisible();
    await expect(page_title).toContainText('Products');

    // #1h)
    await page.screenshot({ path: 'screenshots/04_products_page.png' });

    // #1i)
    const burger_menu = page.locator('xpath=//button[@id="react-burger-menu-btn"]');
    await expect(burger_menu).toBeVisible();
    await burger_menu.click();
    const logout_link = page.locator('xpath=//a[@id="logout_sidebar_link"]');
    await expect(logout_link).toBeVisible();
    await logout_link.click();

    // #1j)
    await expect(page_title).not.toBeVisible();
    await expect(login_form).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');

  });

});

//test s CSS lokátory//

test.describe('SauceDemo-CSS', () => {

  
  test('login flow', async ({ page }) => {
    const base_url = 'https://www.saucedemo.com/';
    const login_form = page.locator('div.login-box form');

    // #1a)
    await page.goto(base_url);
    await expect(page).toHaveURL(base_url);
    await expect(login_form).toBeVisible();
    await login_form.screenshot({ path: 'screenshots/01_login_form.png' });

    // #1b)
    const login_button = page.locator('[data-test="login-button"]');
    await expect(login_button).toBeVisible();
    await login_button.click();

    // #1c)
    const error_message = page.locator('[data-test="error"]');
    await expect(error_message).toContainText('Username is required');
    await page.screenshot({ path: 'screenshots/02_missing_username.png' });

    // #1d)
    const username_input = page.locator('[data-test="username"]');
    await expect(username_input).toBeVisible();
    await username_input.fill('standard_user');
    await login_button.click();

    // #1e)
    await expect(error_message).toContainText('Password is required');
    await page.screenshot({ path: 'screenshots/03_missing_password.png' });

    // #1f)
    const password_input = page.locator('[data-test="password"]');
    await expect(password_input).toBeVisible();
    await password_input.fill('secret_sauce');
    await login_button.click();

    // #1g)
    await expect(login_form).not.toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const page_title = page.locator('[data-test="title"]');
    await expect(page_title).toBeVisible();
    await expect(page_title).toContainText('Products');

    // #1h)
    await page.screenshot({ path: 'screenshots/04_products_page.png' });

    // #1i)
    const burger_menu = page.locator('#react-burger-menu-btn');
    await expect(burger_menu).toBeVisible();
    await burger_menu.click();
    const logout_link = page.locator('#logout_sidebar_link');
    await expect(logout_link).toBeVisible();
    await logout_link.click();

    // #1j)
    await expect(page_title).not.toBeVisible();
    await expect(login_form).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  }); 

}); 