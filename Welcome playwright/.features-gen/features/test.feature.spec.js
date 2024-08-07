/** Generated from: features\test.feature */
import { test } from "playwright-bdd";

test.describe("test", () => {

  test("login with valid password and user id", { tag: ["@test"] }, async ({  }) => {});

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "login with valid password and user id": {"pickleLocation":"3:1","tags":["@test"]},
};