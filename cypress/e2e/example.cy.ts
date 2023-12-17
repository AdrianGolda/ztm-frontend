// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/login')
    cy.contains('h1', 'Sign In')
  })
})

describe('test log and fetch', () => {
  it('logs in and checks data', () => {
    cy.visit('/login');
    cy.get("#login").type("user2");
    cy.get("#password").type("user2");
    cy.get("#submit").click();
    cy.get("#stop-container").contains("add", {timeout: 5000})
  })
  it("test add and remove", () => {
    cy.visit('/login');
    cy.get("#login").type("user2");
    cy.get("#password").type("user2");
    cy.get("#submit").click();
    cy.get("#stop-container").contains("add", {timeout: 5000}).first().click();
    cy.get("#my-stops", { timeout: 4000}).contains("Remove", {timeout: 4000}).first().click();
  })
})
