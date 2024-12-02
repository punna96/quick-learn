class LoginPage {
  visit() {
    cy.visit('/');
  }

  getUsernameInput() {
    return cy.get('#loginForm_input_text');
  }

  getPasswordInput() {
    return cy.get('#loginForm_input_passwordpassword');
  }

  getSubmitButton() {
    return cy.get('button[type="submit"]');
  }

  getRememberMeCheckbox() {
    return cy.get('[type="checkbox"]'); // Return the checkbox element
  }

  getErrorMessage() {
    return cy.get('.Toastify');
  }

  getWelcomeMessage() {
    return cy.get('.Toastify');
  }

  login(mail, password) {
    this.getUsernameInput().type(mail);
    this.getPasswordInput().type(password);
    this.getRememberMeCheckbox().check(); // Check the Remember Me checkbox
    this.getSubmitButton().click();
  }

  loginWithInvalidCredential(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getRememberMeCheckbox().check(); // Optionally include this step here
    this.getSubmitButton().click();
  }

  loginWithEmptyValue() {
    this.getSubmitButton().should('be.disabled');
  }
}

module.exports = LoginPage;
