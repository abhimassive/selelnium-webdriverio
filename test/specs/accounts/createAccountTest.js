import { createAccount, openSignUpPage, welcomeMessage, accountState, chooseAccountType, chooseTeamType, selectMarketingType, selectMarketingRole } from "../../actions/account"

describe('Test Sign up for free Feature', () => {
  it('Open SignUp Page', () => {
    openSignUpPage()
  })

  it('Fill Form, Submit and Verify SignUp', () => {
    createAccount()
    if (accountState() === 'signup') {
      expect(welcomeMessage()).to.include('Choose your account type')
    } else {
      expect(welcomeMessage()).to.include('Welcome')
    }
  })

  it('Continue', () => {
    if (accountState() === 'signup') {
      chooseAccountType('Business')
      chooseTeamType('Single')
      browser.pause(5000)
    } else {
      selectMarketingType('StartingOut')
      selectMarketingRole('CEO')
    }
  });



})