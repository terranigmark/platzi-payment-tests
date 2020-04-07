describe('Platzi "Baloto payment method" test', function() {
    it('Payment flow choosing Baloto', function() {
        // Go to platzi.com
        cy.visit('https://www.platzi.com')
        // Go to prices landing
        cy.contains('Comienza ahora')
            .click()
        // Chose 'Plan Expert'
        cy.contains('¡Empieza Ahora!')
            .click()
        // Assert - its th Expert price page
        cy.url()
            .should('include', 'course=todos')

        // Input text in name and email fields
        cy.get('[name="name"]')
            .type('Hector Vega CyTest')
        cy.get('[name="email"]')
            .type('platzitest@gmail.com')
        // Click on ToS checkbox
        cy.get('[id="tos"]')
            .check( {force: true} )
        // Click on 'continue' btn
        cy.contains('Continuar')
            .click()

        // Click on non-recurrent payment method
        cy.get('#checkout > div > div.Content > span > div > div.PaymentFormContent > div > div > div.PaymentOptions > div:nth-child(2) > div.PaymentOption')
            .click()

        // Get and fill ID field
        cy.get('[name="document_id"]')
            .type('834382')
        // Click on Baloto option
        cy.get('[class="PaymentSubOption-title"]')
            .contains('Baloto')
            .click()

        // Click on btn to conitnue payment
        cy.get('[class="PaymentCTA"]')
            .click()

        // Click on Baloto payment btn
        cy.get('[class="DLocal-button btn-sky"')
            .click()
    })
})