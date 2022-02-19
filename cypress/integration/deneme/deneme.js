import { Given } from "cypress-cucumber-preprocessor/steps";
Given('kullanici amazon sayfasina gider', () => {
    cy.visit('https://www.amazon.com')
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('zekierdemli80@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('Cypress.Amazon.49')
    cy.get('label > input').click();
    cy.get('#signInSubmit').click();
    // cy.get('#ap-account-fixup-phone-skip-link').click();
    cy.get('#twotabsearchtextbox').type('samsung Galaxy S10{enter}');
    // cy.get('#search');
    // cy.get('[data-asin="B09MW1JD1V"]').should('have.text', 'samsung s10');

    // expect(cy.get('#search')).to.be('samsung s10');


    // cy.xpath('//a[@data-menu-id="13"]//div').invoke('text').then((text1)=>{
    //cy.log(text1)});     canan h. locator calismasi

    cy.xpath('(//span[@class="a-size-medium a-color-base a-text-normal"])')
        .then(($el) => {
            const count = $el.length
            cy.log("result : " + count)
            var sumfiyat = 0
            var genArr = Array.from({ length: count }, (v, k) => k + 1)
            cy.wrap(genArr).each((index) => {

                cy.xpath('(//span[@class="a-size-medium a-color-base a-text-normal"])[' + index + ']').invoke('text').then((urun) => {
                    cy.log("urun : " + urun)
                    console.log("urun : ")
                    console.log(urun)

                });
                cy.xpath('(//span[@class="a-offscreen"])[' + index + ']').invoke('text').then((fiyat) => {
                    cy.log("fiyat : " + fiyat)
                    console.log("fiyat : " + fiyat)
                    console.log("")

                });

            })


        })

})