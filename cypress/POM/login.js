class login {
    emailField = "input[name='email']"
    passwordField = "input[name='password']"
    emailAddress = "segunsam@mailinator.com"
    passwordinput = "Password@@2"
    loginButton = ".chakra-button"

page() {
    cy.visit('https://app-dev.gotrustcrow.com/login')
}

email() {
    cy.get(this.emailField).type(this.emailAddress)
}
password(){
    cy.get(this.passwordField).type(this.passwordinput)
}
loginBut(){
    cy.get(this.loginButton).click()
}
dasboard(){
    cy.url().should('eq', 'https://app-dev.gotrustcrow.com/dashboard')
}
}

export default login