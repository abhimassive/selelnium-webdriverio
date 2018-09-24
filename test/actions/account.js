var faker = require('faker')
import signUpPage from '../page_objects/signUpPage'

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
  signUpPage.open()
}

export function createAccount() {
  signUpPage.inputFullName.setValue(fullName)
  signUpPage.inputCompanyName.setValue(companyName)
  signUpPage.inputEmailAddress.setValue(email)
  signUpPage.inputPassword.setValue(password)
  signUpPage.buttonCreateMyAccount.click()
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
  var welcomeMsg = signUpPage.messageWelcome.getText()
  return welcomeMsg
}

export function selectMarketingType(type) {
  signUpPage.selectMarketerType.click()
  switch (type.toLowerCase()) {
    case 'startingout':
      signUpPage.optionJustStartingOut().click()
      break
    case 'someexperience':
      signUpPage.optionSomeExperience().click()
      break
    case 'automation':
      signUpPage.optionAutomation().click()
      break
    case 'resell':
      signUpPage.optionResell().click()
      break
    default:
      signUpPage.optionJustStartingOut().click()
      break;
  }
}

export function selectMarketingRole(role) {
  signUpPage.emailMarketingRole.click()
  switch (role.toLowerCase()) {
    case 'ceo':
      signUpPage.optionCEO().click()
      break
    default:
      signUpPage.optionOther().click()
      break;
  }
}

export function chooseAccountType(accountType) {
  if (accountType.toLowerCase() === 'business') {
    signUpPage.buttonChooseBusinessAccount.click()
  } else if (accountType.toLowerCase() === 'creative') {
    signUpPage.buttonChooseCreativeAccount.click()
  } else {
    signUpPage.buttonChooseBusinessAccount.click()
  }
}

export function chooseTeamType(teamType) {
  if (teamType.toLowerCase() === 'single') {
    signUpPage.buttonChooseSingleTeam.click()
  } else if (teamType.toLowerCase() === 'multiple') {
    signUpPage.buttonChooseMultipleTeams.click()
  }
}

export function landingPageLoaded() {
  browser.waitUntil(() => signUpPage.navMainNavigation.isVisible() === true, 5000, 'Landing Page not loaded', 200);
  signUpPage.navMainNavigation.waitForExist()
  signUpPage.navMainNavigation.waitForVisible()
  return signUpPage.navMainNavigation.isVisible()
}
