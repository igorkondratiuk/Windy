
describe('Main_page', () => {
  beforeEach(() => {
    cy.visit('').as('mp')
    cy.wait(4000)
  })

  it('passes_MP', () => {

      cy.location('host').should('contain', 'www.windy.com')
      cy.get('div#search-weather-bg').should('be.visible')
      cy.get('div#login').should('be.visible')
      cy.get('a#logo').should('be.visible')
  })

})