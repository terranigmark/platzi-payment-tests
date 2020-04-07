describe('Platzi "Davivienda payment method" test', function() {
    it('Payment flow choosing Davivienda', function() {
        // Go to platzi.com
        cy.visit('https://platzi.com')
        // Go to prices landing
        cy.contains('Comienza ahora')
            .click()
        // Choose 'Plan Expert'
        cy.contains('Empieza Ahora')
            .click()
        // Assert - its the Expert price page
        cy.url()
            .should('include', 'course=todos')

        // Input text in name and email fields
        cy.get('[name="name"]')
            .type('Hector Vega Test')
        cy.get('[name="email"]')
            .type('platzitest@gmail.com')

        // Click checbox about ToS
        cy.get('[id="tos"]').check( {force: true} )

        // Click on btn to continue
        cy.contains('Continuar').click()

        // Click on non-recurrent payment method
        cy.get('#checkout > div > div.Content > span > div > div.PaymentFormContent > div > div > div.PaymentOptions > div:nth-child(2) > div.PaymentOption')
            .click()

        // Get and fill ID field
        cy.get('[name="document_id"]')
            .type('834382')

        // Click on Davivienda option
        cy.get('[class="PaymentSubOption-title"]')
            .contains('Davivienda')
            .click()

        // Click on btn to continue payment
        cy.get('[class="PaymentCTA"]')
            .click()

        // Click on Dlocal payment btn
        cy.get('[class="DLocal-button btn-sky"')
            .click()
    })
})