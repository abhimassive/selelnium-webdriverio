import {
  createAccount,
  openSignUpPage,
  welcomeMessage,
  accountState,
  chooseAccountType,
  chooseTeamType,
  selectMarketingType,
  selectMarketingRole,
  landingPageLoaded
} from '../../actions/account'

describe('End to End Test for SignUp', () => {
  it('Open SignUp Page', () => {
    openSignUpPage()
  })

  it('Fill Form, Submit and Verify SignUp', () => {
    createAccount()
    try {
      expect(welcomeMessage()).to.include('Choose your account type')
    } catch (error) {
      console.log('Functionality for Choosing Marketing role has not been handled in this testcase')
      browser.close()
      process.exit()
    }
  })

  it('Choose Your Account Type - Business and Single Team', () => {
    if (accountState() === 'signup') {
      chooseAccountType('Business')
      chooseTeamType('Single')
      expect(landingPageLoaded()).to.equal(true)
    } else {
      selectMarketingType('StartingOut')
      selectMarketingRole('CEO')
    }
  })
})