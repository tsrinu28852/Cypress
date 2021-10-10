/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('http://ae8c137ee894942c3ae491dbc5555b27-1330613925.us-east-2.elb.amazonaws.com/')
  })

  it('Exit the Text', () => {
   
    cy.contains('Here are some links to help you start:').should('exist')
   
  })
  it('Link Text Verification', () => {
   
    cy.contains('Tour of Heroes').should('exist')
   
  })
 
  it('Imaget Verification', () => {
   
    cy.get('img').should('exist')
   
  })

})
