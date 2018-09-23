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
    if (accountState() === 'signup') {
      expect(welcomeMessage()).to.include('Choose your account type')
    } else {
      expect(welcomeMessage()).to.include('Welcome')
    }
  })

  it('Continue Account Setup', () => {
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