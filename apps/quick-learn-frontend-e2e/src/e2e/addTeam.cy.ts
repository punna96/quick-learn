import AddTeam = require("../test/addTeam");
import LoginPage = require("../test/Login");

describe('Login Test', () => {
    const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
    cy.get('.text-xl').contains("Sign in to your account")
    loginPage.login();

    cy.url().should('include', '/dashboard'); 
    loginPage.getWelcomeMessage().should('contain', 'Login Success!');
  });

 

  it('Admin able to Add Team', () => {
    const addTeams = new AddTeam();
    addTeams.addTeam()
    
  });

  it('verify required field ', () => {
    const addTeams = new AddTeam();
    addTeams.fieldNameRequired()
    cy.get(':nth-child(1) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(2) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(3) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(4) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(5) > .mt-1').should('have.text','Password must be at least 8 characters long')
    cy.get(':nth-child(7) > .mt-1').should('have.text','This field is required')
    
  });

  it('verify field by passing only spaces', () => {
    const addTeams = new AddTeam();
    addTeams.validateFieldWithEmptySpaces()
    cy.get(':nth-child(1) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(2) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(3) > .mt-1').should('have.text','This field is required')
    cy.get(':nth-child(5) > .mt-1').should('have.text','Password must be at least 8 characters long')
    
    
  });
})
