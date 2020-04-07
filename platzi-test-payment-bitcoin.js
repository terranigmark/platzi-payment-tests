describe('Platzi "Bitcoin payment method" test', function() {
    it('Payment flow choosing Bitcoin', function() {
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
            .type('platzitest00@gmail.com')
        // Click on checkbox about ToS
        cy.get('[id="tos"]')
            .check( {force: true} )
        // Click on 'Continuar' btn
        cy.contains('Continuar')
            .click()

        // Click on non-recurrent payment method
        cy.get('#checkout > div > div.Content > span > div > div.PaymentFormContent > div > div > div.PaymentOptions > div:nth-child(5) > div.PaymentOption > div > div.PaymentOption-circle')
            .click()
        // Click on 'pay with Bitcoin' btn
        cy.contains('Continuar pago')
            .click()
    })
})