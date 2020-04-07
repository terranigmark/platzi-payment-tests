describe('Platzi "Efecty payment method" test', function() {
    it('Payment flow choosing Efecty', function() {
        // Go to platzi.com
        cy.visit('https://www.platzi.com')
        // Go to prices lanidng
        cy.contains('Comienza ahora')
            .click()
        // Choose 'Plan Expert
        cy.contains('Empieza Ahora')
            .click()
        // Assert - it is the Expert price page
        cy.url()
            .should('include', 'course=todos')

        // Get name field and type on it
        cy.get('[name="name"]')
            .type("Hector Vega CyTest")
        // Get email field and type on it
        cy.get('[name="email"]')
            .type('platzitest@gmail.com')
        // Click on checkbox about ToS
        cy.get('[id="tos"]')
            .check( {force: true} )
        // Click on 'Continuar' btn
        cy.contains('Continuar')
            .click()

        // Click on non-recurrent payment method
        cy.get('#checkout > div > div.Content > span > div > div.PaymentFormContent > div > div > div.PaymentOptions > div:nth-child(2) > div.PaymentOption')
            .click()
        // Get and fill ID field
        cy.get('[name="document_id"]')
            .type('834382')
        // Click on Efecty option
        cy.get('[class="PaymentSubOption-title"]')
            .contains('Efecty')
            .click()
        // Click on btn to continue payment
        cy.get('[class="PaymentCTA"]')
            .click()
        // Click on DLovcal payment btn
        cy.get('[class="DLocal-button btn-sky"]')
            .click()
    })
})