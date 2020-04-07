describe('Platzi "PSE payment method" test', function() {
    it('Payment flow choosing PSE', function() {
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
            .type('platzitest0000@gmail.com')
        // Click on checkbox about ToS
        cy.get('[id="tos"]')
            .check( {force: true} )
        // Click on 'Continuar' btn
        cy.contains('Continuar')
            .click()

        // Click on non-recurrent payment method
        cy.get('#checkout > div > div.Content > span > div > div.PaymentFormContent > div > div > div.PaymentOptions > div:nth-child(4) > div.PaymentOption > div > div.PaymentOption-circle')
            .click()
        // Click on 'pay with PayPal' btn
        cy.contains('Completar pago con PSE')
            .click()

        //Select 'Davivienda' as bank
        cy.get('[name="banks"]')
            .select('BANCO DAVIVIENDA').should('have.value', '1051')
        // Select 'tipo de persona' as 'natural
        cy.get('[name="user_type"]')
            .select('Natural').should('have.value', 'N')
        // Select 'tipo de documento' as 'C.E.
        cy.get('[name="identification"]')
            .select('C.E. (Cédula de Extranjería)').should('have.value', 'CE')
        // Input ID number
        cy.get('[name="identification_number"]')
            .type('834382')
        // Input name and last name
        cy.get('[name="account_name"]')
            .type('Hector Vega CyTest')
        // Input phone number
        cy.get('[name="phone_number"]')
            .type('3209363520')
        // Assert - Pay btn is active
        cy.contains('Pagar con PSE')
            .click()
    })
})