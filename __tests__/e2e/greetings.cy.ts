describe('MMM-Skistar-Activities', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('greetings message is displayed', () => {
    cy.get('div[id$="MMM-Skistar-Activities"] > div > div > div[class="bright light medium green"]')
      .should('have.text', 'MMM-Skistar-Activities says: Hello world Ismar!')
      .should('be.visible')
  })
})
