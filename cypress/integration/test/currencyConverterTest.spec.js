context('Currency Converter Test', () => {
 
    it('', () => {
        cy.visit('https://www.xe.com/')

        cy.get('#amount').type(100)

        cy.get('button[data-test-id=converter-submit-button]').click()

        cy.get('.converterresult-toAmount').invoke('text').then(parseFloat).should('be.gt', 84)
    })
  })
  