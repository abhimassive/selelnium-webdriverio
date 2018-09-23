var faker = require('faker')
import accountPage from '../page_objects/accountPage'

var firstName = faker.name.firstName()
var lastName = faker.name.lastName()
var fullName = firstName + ' ' + lastName
var companyName = faker.company.companyName()
var email = ((firstName + '.' + lastName).toLowerCase()) + '@test.com'
var password = process.env.SIGNUP_PASS
console.log('Creating Account with the following details : ' +
  '\nFull Name : ', fullName +
  '\nCompany Name : ', companyName +
  '\nEmail : ', email +
  '\nPassword : ', password)


export function openSignUpPage() {
  accountPage.open()
}

export function createAccount() {
  accountPage.inputFullName.setValue(fullName)
  accountPage.inputCompanyName.setValue(companyName)
  accountPage.inputEmailAddress.setValue(email)
  accountPage.inputPassword.setValue(password)
  accountPage.buttonCreateMyAccount.click()
  browser.waitForUrl('createsend')
  return fullName, companyName, email, password
}

export function accountState() {
  if ((browser.getUrl()).includes('signupstep2')) {
    return 'signup'
  } else {
    return 'welcome'
  }
}

export function welcomeMessage() {
  var welcomeMsg = accountPage.messageWelcome.getText()
  return welcomeMsg
}

export function selectMarketingType(type) {
  accountPage.selectMarketerType.click()
  switch (type.toLowerCase()) {
    case 'startingout':
      accountPage.optionJustStartingOut().click()
      break
    case 'someexperience':
      accountPage.optionSomeExperience().click()
      break
    case 'automation':
      accountPage.optionAutomation().click()
      break
    case 'resell':
      accountPage.optionResell().click()
      break
    default:
      accountPage.optionJustStartingOut().click()
      break;
  }
}

export function selectMarketingRole(role) {
  accountPage.emailMarketingRole.click()
  switch (role.toLowerCase()) {
    case 'ceo':
      accountPage.optionCEO().click()
      break
    default:
      accountPage.optionOther().click()
      break;
  }
}

export function chooseAccountType(accountType) {
  if (accountType.toLowerCase() === 'business') {
    accountPage.buttonChooseBusinessAccount.click()
  } else if (accountType.toLowerCase() === 'creative') {
    accountPage.buttonChooseCreativeAccount.click()
  } else {
    accountPage.buttonChooseBusinessAccount.click()
  }
}

export function chooseTeamType(teamType) {
  if (teamType.toLowerCase() === 'single') {
    accountPage.buttonChooseSingleTeam.click()
  } else if (teamType.toLowerCase() === 'multiple') {
    accountPage.buttonChooseMultipleTeams.click()
  }
}

export function landingPageLoaded() {
  browser.waitUntil(() => accountPage.navMainNavigation.isVisible() === true, 5000, 'Landing Page not loaded', 200);
  accountPage.navMainNavigation.waitForExist()
  accountPage.navMainNavigation.waitForVisible()
  return accountPage.navMainNavigation.isVisible()
}
