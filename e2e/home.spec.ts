import { expect, test } from "@playwright/test"

import { HomePage } from "./pages/home.page"

test.describe("Coachify Home page E2E Test", () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.open()
    await expect(page).toHaveURL("/")
    await expect(page).toHaveTitle(/Coachify/)
  })

  test("user should be able to see Available Coach", async () => {
    await expect(homePage.availableMentorsSection).toBeVisible()
  })

  test("user should be able to see Featured Coachee", async () => {
    await expect(homePage.featuredMenteesSection).toBeVisible()
  })
})
