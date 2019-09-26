const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 20);
  expect(text).toBe("Max (20 years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 20);
  expect(text).toBe("Max (20 years old)");
});

test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"]
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/efren/Desktop/js-testing-introduction/src/index.html"
  );
  await page.click("input#name");
  await page.type('input#name', 'Anna');
  await page.click("input#age");
  await page.type('input#age', '30');
  await page.click('#btnAddUser');
});
