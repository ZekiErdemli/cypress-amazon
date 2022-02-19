import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
Given('User is on his account', () => {
    cy.visit('https://www.amazon.co.uk')
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('crazyfordata.123@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('2985.cakobes')
    cy.get('label > input').click();
    cy.get('#signInSubmit').click();

})