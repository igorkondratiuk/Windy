describe('Search_weather_bg', () => {
    beforeEach(() => {
        cy.visit('')
        cy.wait(4000)
        cy.get('div#plugin-hp-weather').click().as('tableWrapper')


    })
    it('tableWrapper',()=>{
        cy.get('@tableWrapper').then(()=> {
          cy.get('div#detail').should('be.visible')

           cy.get('div[class*=legend-hour]').should('be.visible').and('have.text','Hours')
           cy.get('div[class*=legend-temp]').should('be.visible').and('contain','Temperature')
            cy.get('span[data-do="metric,temp"]').should('be.visible').and('have.class','metric-clickable')

            
        })

    })


    it.skip('Temperature', ()=>{

        cy.get('@tableWrapper').then(()=>{
            let tempF=''; let tempV=''

            cy.get('span[data-do="metric,temp"]').invoke('text').as('metric_temp')
            cy.get('@metric_temp').then((text)=>{tempF=text})
            cy.get('tr[class="td-temp height-temp d-display-table"]>td').eq(0).invoke('text').as('temp_value')
            cy.get('@temp_value').then((text)=>{tempV=text})

            cy.get('span[data-do="metric,temp"]').click().wait(4000)

            cy.get('@metric_temp').then(() => {
                cy.get('@metric_temp').should('not.eq',tempF)
            })
            cy.get('@temp_value').then(()=>{
                cy.get('@temp_value').should('not.eq',tempV)
            })
        })


    })








})