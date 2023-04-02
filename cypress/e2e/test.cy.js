

describe('Main_page', () => {
    beforeEach(() => {
        cy.visit('https://www.expedia.com/')
        cy.wait(4000)
    })

    it('passes_MP', () => {

        let now = new Date().toLocaleDateString()
        let y = now.split('/')
        let s = `${y[2]}-${y[0]}-${y[1]}`

        cy.get('input[placeholder="Placeholder"]').type('Orlando').click()
        //cy.get('input#d1')

    })

})