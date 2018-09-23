import Page from './page'
export default new class accountPage extends Page {
  // Input Fields
  get inputFullName() { return browser.element("//input[@name='contactName']") }
  get inputCompanyName() { return browser.element("//input[@name='companyName']") }
  get inputEmailAddress() { return browser.element("//input[@name='email']") }
  get inputPassword() { return browser.element("//input[@name='password']") }

  get messageWelcome() { return browser.element("//h1") }

  get selectMarketerType() { return browser.element("//select[@name='email-marketer-type']") }
  get optionJustStartingOut() { return browser.element("//option[@value='starting-out']") }
  get optionSomeExperience() { return browser.element("//option[@value='some-experience']") }
  get optionAutomation() { return browser.element("//option[@value='advanced']") }
  get optionResell() { return browser.element("//option[@value='resell']") }

  get emailMarketingRole() { return browser.element("//select[@name='email-marketer-role']") }

  //Buttons
  get buttonCreateMyAccount() { return browser.element("//button[@class='cmbtn primary']") }
  get buttonChooseBusinessAccount() { return browser.element("//button[@id='accordion-trigger-0']") }
  //ask Developer to provide an `id` or a name or a specific automation tag for the following elements
  get buttonChooseCreativeAccount() { return browser.element("//button[@class='c-button-user-account c-button-user-account--no-arrow c-button-user-account--no-avatar  js-accordion-dull-out-non-accordion-item']") }
  get buttonChooseSingleTeam() { return browser.element("//div[@id='accordion-target-0']//ul[1]//li[1]//button[1]") }
  get buttonChooseMultipleTeams() { return browser.element("//div[@id='accordion-target-0']//ul[1]//li[2]//button[1]") }


  open() {
    super.open('signup');
  }

}