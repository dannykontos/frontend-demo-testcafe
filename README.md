# TestCafeDemo

A small setup of TestCafe framework, with test cases organised using Page Object Model

A small test framework that tests the following on Burton.com:

- successfully add two products to cart and assert that the operation is successful
- remove successfully one of them and assert that the result is correct
- remove successfully the remaining one and assert that the result is correct
- try to remove again one of the products expecting a failed test in this case

## Getting Started

1. **Install** [Node 14](https://nodejs.org/en/) or newer.

   Verify version: `node -v`

2. **Install** [TestCafe](https://devexpress.github.io/) globally:

   Run: `npm install -g testcafe`

3. **Install** [testcafe-reporter-html](https://www.npmjs.com/package/testcafe-reporter-html) for reports:

   Run: `npm install testcafe-reporter-html`

### Running a test

1. Open a terminal
2. Change directory to:

   /e2e/tests/

3. Run all tests in a browser:

   testcafe {list_of_browsers} \*.ts

   #### e.g testcafe safari,edge \*

4. Run tests from one file:

   testcafe {list_of_browsers} filename.ts

5. Run specific tests:

   testcafe {list_of_browsers} ./filename.ts/ -T "testname"

6. Run alias from package.json, "scripts" section:

   'npm run test:chrome' alias for "testcafe chrome e2e/tests/ --screenshots-full-page --screenshots-on-fails --reporter spec,html:reports/TestcafeReport.html",
   'npm run test:chrome:headless' alias for "testcafe chrome:headless e2e/tests --screenshots-full-page --screenshots-on-fails --reporter spec,html:reports/TestcafeReport.html",
   'npm run test:chrome:mobile' alias for "testcafe chrome:emulation:device=iphone 12 e2e/tests --screenshots-full-page --screenshots-on-fails --reporter spec,html:reports/TestcafeReport.html",
   'npm run test:safari' alias for "testcafe safari e2e/tests --screenshots-full-page --screenshots-on-fails --reporter spec,html:reports/TestcafeReport.html",
   'npm run test:firefox' alias for "testcafe firefox e2e/tests --screenshots-full-page --screenshots-on-fails --reporter spec,html:reports/TestcafeReport.html"