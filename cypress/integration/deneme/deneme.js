import { Given } from "cypress-cucumber-preprocessor/steps";
Given('kullanici amazon sayfasina gider', () => {
    cy.visit('https://www.amazon.de');
})