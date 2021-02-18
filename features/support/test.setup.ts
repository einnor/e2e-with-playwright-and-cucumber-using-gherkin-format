import { Before, BeforeAll, AfterAll, After, setWorldConstructor } from "@cucumber/cucumber";
import { devices, chromium } from "playwright";
import { OurWorld } from "./types";
import CustomWorld from '../../src/lib/CustomWorld';

setWorldConstructor(CustomWorld);

BeforeAll(async function () {
    // Browsersare expensive in Playwright so only create 1
    // eslint-disable-next-line to ignore the next line
    (global as any).browser = await chromium.launch({
        // Not headless so we can watch tests run
        headless: false,
        // Slow so we can see things happening
        slowMo: 50,
    });
});

AfterAll(async function () {
    // Close the browser after all scenarios have run
    // eslint-disable-next-line to ignore the next line
    await (global as any).browser.close();
});

// Create a new test context and page per scenario
Before(async function (this: OurWorld) {
    const pixel2 = devices['Pixel 2'];
    // eslint-disable-next-line to ignore the next line
    this.context = await (global as any).browser.newContext({
        viewport: pixel2.viewport,
        userAgent: pixel2.userAgent,
    });
    this.page = await this.context.newPage();
});

// Clean up after each scenario
After(async function (this: OurWorld) {
    await this.page.close();
    await this.context.close();
});