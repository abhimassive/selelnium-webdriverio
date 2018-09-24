Below are the reasons that can cause Test flakiness and the solution to mitigate them

1. Using Hardcoded data - Tests might pass on the first run, but would fail on the second run onwards. For example: 
  Create Account Test- If the same emailId is used to register again, the test will fail saying ‘This id already exists’ 
  and subsequent tests dependent on this will fail as well which is another weakpoint that is discussed in next point.  
  Solution - 1.) Let tests generate their own data on runtime using random string generator functions or using 
  other third-party packages which generate the data for you like FakerJs which has been used in my test framework
             2.) Add script at the end of your suite like an afterAll() function to connect to the Database and wipe all test data 
             that was created in the previous run,  irrespective of test pass/fail. 
              Disadvantages: a) For this your test data need to have a specific identifier tag in their data like `_test` so that 
                                they get identified when the delete SQLruns. 
                             b) If the database in only accessible on a company private network and do not allow incoming traffic 
                                from other servers, SQL cleanup would fail if tests are run on CI servers like BitBucket, CircleCI, TeamCity

2. Inter-Dependent Tests - All tests should be independent of each other In other words they should not wait for or depend on other tests to 
   pass or use data created by other tests. Quite understandably, it the previous test fails then the other `n` tests dependent on it would 
   also fail even though the functionality of ’n’ tests is not broken in the application.
   Solution - Write tests so that hey can create their own data and setup the pre-reqs in the beforeTest() methods. 
   This will enable tests to run in parallel, save time, remove dependencies, improve test-coverage and better passing rate

3. Fraglie Element Locators - Using Xpath, fuzzy logic, findElementByText(), NthChild in the DOM, element coordinates 
   - these are bound to change every now and them in a product development environment. 
   Using these to identify web elements will fail the tests if anything as changed in the dom. 
   Also tests will fail if they are expecting a particular text in a particular language in page. 
   e.g this test will fail if the app is in English but will fail if localized: expect(homepage.welcomeMessage.getText()).to.equal(‘Welcome Mike’). 
   `Welcome` will be spelled differently in German or French.  A better approach would be expect(….)to.equal.(localeCompare(‘Welcome Mike’))
   Solution: a) Coordinate better with Devs to get a specific `data-qa` tags for the elements that you wanna target. 
                These tags can be removed in a pre-build step before the application is deployed to production. 
             b) Should refrain from using hard-coded values for assertions

4. Waits: Waits are necessary evil in every automation setup. But using hard explicit waits/pauses can make tests sluggish and wait unnecessarily and 
   increase build-time and build cost-to-company. 
   Solution: Using waitUntil() where the client implicitly waits for a particular element to appear and then continue on from there.

5. Reasons outside our control: Sometimes test fail or no reason at all or for reasons outside our control like network issues, deadlock in the DB,
   hardware/RAM underperformance. 
   Solution: Have a global retry(), method which can re-run tests on failure. Have this method take in parameters, so that, we can customize the amount
   of retries we want for a test e.g retry(3) would run a failed test 3 more times before eventually showing red.

6. Last but not least: Be a good programmer, follow best coding practices and write performant and maintainable code. Use page-object models and re-usable components
   as much as possible. Get test-code Peer-Reviewed by more than one person before merging to master.


