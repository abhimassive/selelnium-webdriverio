## selelnium-wdio-boilerplate
A boilerplate for Creating Account using NodeJS frameworks

* [WebdriverIO](http://webdriver.io/) - WebDriver bindings for Node.js
* [Mocha](https://mochajs.org/) - Mocha is a Test runner framework
* [Chai](https://www.chaijs.com/) - Chai is a BDD / TDD assertion library
* [FakeJS](https://github.com/marak/Faker.js/) - Generates fake sample data


This is a highly scalable robust page-object model. The framework is designed as follows:

* TESTS - Tests are under /test/specs/feature/*test.js
  All the coding logic is kept away from test specs to make tests more readable and maintainable
  Tests only call re-usable functions(explained below) and then validate the expected results using Chai assertions
  Tests are executing by Mocha
  
* PAGE-OBJECTS - Elements or Locators of a particular page are kept in test/page_objects/*Page.js
  page_objects folder can have different pages like homePage, signUpPage, accountProfilePage etc
  The elements from these pages can be used and re-used to construct re-usable actions(described below) which can be used by the above Tests
  
* ACTIONS - Actions or Helpers are functions which carry out common actions throughout the app. Each action can have
  multiple clicks and setValues to form an actions. Examples of actions are createAccount, signIn, checkOut, chooseMarketingType.
  Actions can also take in parameters which means a single action function can perform multiple data-driven scenarios. For example signIn() can take your credentials in its parameters and the same function can perform the signIn for multiple credentials - `singIn('foo@bar.com', 'Pass1234')`

  An example snippet from this repo's test:

  ```
  chooseAccountType('Business')
  chooseTeamType('Single')
      
  selectMarketingType('StartingOut')
  selectMarketingRole('CEO')
  ```



ASSUMPTIONS: This test will run Successfully only if clicking Create Account lands in 'Choose your account type' page.
Rest of the Account Setup landing pages are not handled
  
  #### Get Started
  
  * Pre-req - [Node](https://nodejs.org/en/download/)
  
  * Clone this repo - `git clone https://github.com/abhimassive/selelnium-wdio-boilerplate.git`
  
  * Install dependencies - `npm install`
  
  * Create a `.env` file in the root of this repo and fill up the values using `.env-sample` as a reference
  
      Note: BASE_URL should only contain the homepage address with a trailing '/' and should not include any paths like /signin, /signup, /account etc 
  
  * Run tests - `npm test`
  
  
