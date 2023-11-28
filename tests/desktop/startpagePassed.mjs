import { expect } from "chai"

beforeEach(async ({ browser }) => {
  await browser.url("https://www.startpage.com/");
	await browser.$("#q").setValue("hello world")
	await browser.$("#search-btn").click()
});

it("redirects on the results page", async ({ browser, currentTest }) => {
	await browser.feature(currentTest.id(), "my_feature_1")
	expect(browser.url).not.eq("https://www.startpage.com/")
});

it("shows some results items", async ({ browser, currentTest }) => {
  await browser.feature(currentTest.id(), "my_feature_1")
  const items = await browser.$$(".w-gl__result")
  const screenshot = await browser.takeScreenshot()

  await browser.attach(currentTest.id(), screenshot, "image/png")

  console.log("STEP", browser)

  await browser.step(currentTest.id(), "first step", async (s1) => {
    await s1.attach(JSON.stringify({ foo: "bar" }, null, 2), "application/json")
    await s1.attach("hellkajsdflkjasdlfkjas;dlkfjas;lkdfja;slkdfjl;sadkjfl;askdjf;alskdfjl;askdjfl;askdfjl;askdfjaklsdjfasdklfjlaskdjf", "text/plain")
    await s1.step("second step", async (s2) => {
      await s2.attach(screenshot, "image/png")
      await s2.step("third step", async (s3) => {
        await s3.epic("with_steps")
        await s3.attach(JSON.stringify({ foo: "bar" }, null, 2), "application/json")
      })
    })
  })

  expect(items.length).not.eq(0)
});
