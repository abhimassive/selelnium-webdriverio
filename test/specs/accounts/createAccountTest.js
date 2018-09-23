import { createAccount, openSignUpPage } from "../../actions/account"

describe('Test Sign up for free Feature', () => {
  it('Open SignUp Page', () => {
    openSignUpPage()
  })

  it('Fill Form and Submit', () => {
    createAccount()
    browser.debug()
  })
})